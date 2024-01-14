import {defineStore, storeToRefs} from 'pinia';
import {Ref, ref} from 'vue';
import {api} from '../api/api';
import router from '../router';
import {LoginRequestData, LoginResponseData} from '../interfaces/auth';
import {AxiosResponse, HttpStatusCode} from 'axios';
import {useCache} from './useCache';
import {ro} from 'vuetify/locale';

export const useAuth = defineStore('auth', () => {
    const username = ref('');
    const password = ref('');
    const isLoading = ref(false);
    const isAuth = ref(false);
    const usernameErrorMessage = ref('');
    const errorMessage = ref('');
    const { token } = storeToRefs(useCache());

    const defaultTimeout = 1800;

    enum ErrorMessages {
        EMPTY_FIELD = 'Заполните поле',
        NO_AUTH = 'Невозможно авторизоваться из-за проблем подключения',
        INCORRECT_CREDS = 'Неверный логин или пароль',
    }

    const showErrorMessage = (errorMessageField: Ref<string>, message: string) => {
        errorMessageField.value = message;
        setTimeout(() => {
            errorMessageField.value = '';
        }, defaultTimeout);
    };

    const login = async () => {
        if (!username.value) {
            showErrorMessage(usernameErrorMessage, ErrorMessages.EMPTY_FIELD);
            return;
        }
        if (!password.value) {
            showErrorMessage(errorMessage, ErrorMessages.EMPTY_FIELD);
            return;
        }
        try {
            isLoading.value = true;
            const response = await api.post<LoginResponseData, AxiosResponse<LoginResponseData>, LoginRequestData>('/user/login', {
                username: username.value,
                password: password.value
            });
            if (response.data.token) {
                console.log('success, isAuth previos value =', isAuth.value )
                isAuth.value = true;
                console.log('isAuth current value =', isAuth.value )
                isLoading.value = false;
                token.value = response.data.token
                await router.push({ name: 'Main' });
            } else {
                console.error('Ошибка авторизации');
                showErrorMessage(errorMessage, ErrorMessages.NO_AUTH);
            }
        } catch (e) {
            console.error(e);
            showErrorMessage(errorMessage, ErrorMessages.NO_AUTH);
        }
    }

    const checkAuth = async () => {
        try {
            const response = await api.get('/user/me', {
                headers: {
                    'Authorization': `Token ${token.value}`
                }
            });
            if (response.status === HttpStatusCode.Ok) {
                console.log('Вы залогинены');
                isAuth.value = true;
            }
        } catch (err) {
            console.error(err);
            isAuth.value = false;
        }
        if (!isAuth.value) await router.push({ name: 'Login' });
    };

    const logout = async () => {
        token.value = "";
        isAuth.value = false;
        await router.push({ name: 'Login' });
    }

    return {
        isAuth,
        isLoading,
        username,
        usernameErrorMessage,
        errorMessage,
        password,
        checkAuth,
        login,
        logout,
        showErrorMessage,
    }
});