import {defineStore} from 'pinia';
import {api} from '@/api/api';
import {Ref, ref} from 'vue';
import {attendValues, Guest, NewGuest} from '../interfaces/guest';
import {findBestMatch} from 'string-similarity';
import {useAuth} from './useAuth';

export const useGuests = defineStore('guests', () => {
    const guests: Ref<Guest[]> = ref([]);
    const newGuest: Ref<NewGuest> = ref({firstName: '', lastName: '', patronymic: '', email: '', attend: attendValues.EMPTY});
    const isFormSuccess = ref(false);
    const sendMailSuccess = ref(false);
    const isOpenedGuestDialog = ref(false);
    const selectedGuests: Ref<Guest[]> = ref([]);
    const isEditGuest = ref(false);
    const lastNameErrorMessage = ref('');
    const firstNameErrorMessage = ref('');
    const emailErrorMessage = ref('');
    const attendErrorMessage = ref('');
    const {showErrorMessage} = useAuth()

    const searchGuestByMatchFI = (newGuest: NewGuest): Guest | undefined => {
        const allFI = guests.value.map(guest => guest.lastName + guest.firstName);
        const newGuestFI = newGuest.lastName + newGuest.firstName;
        const result = findBestMatch(newGuestFI, allFI)
        if (result.bestMatch.rating <= 0.5) {
            return undefined
        }
        return guests.value[result.bestMatchIndex]
    }

    const getGuests = async () => {
        const response = await api.get('/guests');
        guests.value = response.data;
    };

    const deleteGuest = async (guestsId: number[]) => {
        for (const id of guestsId) {
            try {
                await api.delete(`/guests/${id}`);
            } catch (e) {
                console.log(e);
            }
        }
        await getGuests();
        closeDialog();
    }

    const closeDialog = () => {
        clearNewGuestVariable();
        isOpenedGuestDialog.value = false;
        isEditGuest.value = false;
    }

    const sendForm = async (newGuestData: NewGuest) => {
        if (!newGuestData.lastName) {
            showErrorMessage(lastNameErrorMessage, 'Заполните поле');
            return;
        }
        if (!newGuestData.firstName) {
            showErrorMessage(firstNameErrorMessage, 'Заполните поле');
            return;
        }
        if (!newGuestData.email) {
            showErrorMessage(emailErrorMessage, 'Заполните поле');
            return;
        }
        if (newGuestData.attend === attendValues.EMPTY) {
            showErrorMessage(attendErrorMessage, 'Сделайте выбор');
            return;
        }
        const existedGuest = searchGuestByMatchFI(newGuestData)
        let response;
        if (existedGuest) {
            response = await api.put(`/guests/${existedGuest.id}`, {
                patronymic: newGuestData.patronymic,
                attend: newGuestData.attend,
                email: newGuestData.email,
                invited: true,
                date: new Date().toLocaleString('ru')
            });
        } else {
            response = await api.post('/guests/add', {
                ...newGuestData,
                invited: true
            });
        }
        if (response.status === 200) {
            isFormSuccess.value = true;
            await getGuests();
        } else {
            console.log(response);
        }
    };

    const changeGuestInvited = async (guest: Guest): Promise<void> => {
        const response = await api.put(`/guests/${guest.id}`, {
            invited: !guest.invited
        })
        if (response.status === 200) {
            await getGuests();
        } else {
            console.log(response);
        }
    }

    const setNewGuestVariable = (guest: Guest) => {
        newGuest.value.lastName = guest.lastName;
        newGuest.value.firstName = guest.firstName;
        newGuest.value.patronymic = guest.patronymic;
        newGuest.value.email = guest.email;
        newGuest.value.attend = guest.attend;
    }

    const clearNewGuestVariable = () => {
        newGuest.value.lastName = '';
        newGuest.value.firstName = '';
        newGuest.value.patronymic = '';
        newGuest.value.email = '';
        newGuest.value.attend = attendValues.EMPTY;
    }

    const saveNewGuest = async (newGuestData: NewGuest) => {
        try {
            await api.post('/guests/add', newGuestData);
            await getGuests();
        } catch (e) {
            console.log(e);
        }
        closeDialog();
    }

    const editExistedGuest = async (guestId: number, guestData: NewGuest) => {
        try {
        await api.put(`/guests/${guestId}`, guestData);
        await getGuests();
        } catch (e) {
            console.log(e);
        }
        closeDialog();
        selectedGuests.value[0] = guests.value.find(guest => guest.id === guestId)
    }

    const sendMails = async (guests: Guest[]) => {
        try {
            await Promise.all(guests.map(guest => {
                api.post(`/guests/${guest.id}/sendMail`)
            }))
            selectedGuests.value = []
            sendMailSuccess.value = true
        } catch (e) {
            console.log(e)
        }
    }

    return {
        attendErrorMessage,
        newGuest,
        isFormSuccess,
        isEditGuest,
        isOpenedGuestDialog,
        guests,
        lastNameErrorMessage,
        firstNameErrorMessage,
        emailErrorMessage,
        selectedGuests,
        sendMailSuccess,
        sendForm,
        getGuests,
        deleteGuest,
        changeGuestInvited,
        clearNewGuestVariable,
        setNewGuestVariable,
        closeDialog,
        saveNewGuest,
        editExistedGuest,
        searchGuestByMatchFI,
        sendMails
    };

});