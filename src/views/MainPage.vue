<template>
  <v-app-bar scroll-behavior="hide" color="#7999A5">
    <template v-slot:prepend>
      <v-icon icon="mdi-ring"></v-icon>
    </template>
    <v-app-bar-title class="text text-h5">Кристина & Максим 07.07.2024</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer
      permanent
      rail
      expand-on-hover
      @update:rail="isExpandNav = !isExpandNav"
  >
    <v-list nav>
      <v-tabs v-model="curTab" direction="vertical">
        <v-tab value="guestsList" prepend-icon="mdi-account-group">Список гостей</v-tab>
      </v-tabs>
      <v-divider class="mb-3"/>
      <v-list-item link @click="$router.push({name: 'Wedding'})" prepend-icon="mdi-email-heart-outline">
        Приглашение
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-3">
        <v-btn v-if="isExpandNav" block theme="dark" @click="logout" prepend-icon="mdi-logout">Выйти</v-btn>
        <v-btn v-else icon="mdi-logout" theme="dark" @click="logout" size="x-small"></v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-main>
    <v-window v-model="curTab" class="h-100">
      <v-window-item value="guestsList">
        <v-card variant="text" class="pa-2">
          <v-card-title>Список приглашенных гостей</v-card-title>
          <v-card-text class="text-body-1">
            <p class="mb-2">Составьте список своих близких, с которыми Вы хотите разделить этот замечательный день.</p>
            <p class="mb-2">Вы можете отметить тех, кому уже послали ссылку на Ваше приглашение, просто кликнув по соответствующему полю 'Приглашен?'.</p>
            <p class="">Отправляйте напоминания тем, кто не дал четкого ответа, или всем гостям для актуализации
              списка.</p>
          </v-card-text>
          <v-expansion-panels class="w-75 px-3 py-2 mx-auto">
            <v-expansion-panel variant="tonal" elevation="2">
              <v-expansion-panel-title color="blue-grey-lighten-5">Всего гостей: {{guests.length}}</v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="d-flex justify-space-evenly">
                <span class="text-body-1">Придет: {{guests.filter(guest => guest.attend === attendValues.YES).length }}</span>
                <span class="text-body-1">Не придет: {{guests.filter(guest => guest.attend === attendValues.NO).length }}</span>
                <span class="text-body-1">Не знают: {{guests.filter(guest => guest.attend === attendValues.NOT_SURE).length }}</span>
                <span class="text-body-1">Не дали ответ: {{guests.filter(guest => guest.attend === attendValues.EMPTY).length }}</span>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

        </v-card>
        <v-card variant="text" class="pa-5 mx-2 d-flex justify-space-evenly">
          <v-btn
              color="green"
              variant="tonal"
              prepend-icon="mdi-plus"
              text="Добавить гостя"
              border
              @click="openGuestDialog(false)"
          />
          <v-btn
              color="red"
              variant="tonal"
              prepend-icon="mdi-delete"
              text="Удалить"
              border
              :disabled="!selectedGuests.length"
              @click="deleteGuest(selectedGuests.map(guest => guest.id))"
          />
          <div>
            <v-btn
                color="amber"
                variant="tonal"
                prepend-icon="mdi-square-edit-outline"
                text="Редактировать"
                border
                :disabled="selectedGuests.length !== 1"
                @click="openGuestDialog(true)"
            >
            </v-btn>
            <v-tooltip
                activator="parent"
                location="top"
                v-if="selectedGuests.length !== 1"
            >Выберите <b>1</b> гостя
            </v-tooltip>
          </div>
          <v-btn
              color="blue"
              variant="tonal"
              prepend-icon="mdi-email-fast"
              text="Отправить напоминание"
              border
              :disabled="!selectedGuests.length"
              @click="sendMails(selectedGuests)"
          />
        </v-card>
        <GuestDialog v-if="isOpenedGuestDialog"/>
        <v-snackbar v-model="sendMailSuccess" timeout="2000" variant="tonal">
          <v-avatar
              icon="mdi-email-check"
              color="green"
              class="mr-2"
          />
          Письма успешно отправлены
          <template v-slot:actions>
            <v-btn icon="mdi-close" @click="sendMailSuccess = false"></v-btn>
          </template>
        </v-snackbar>
        <v-card flat>
          <v-card-title class="d-flex align-center pe-2">
            <v-icon icon="mdi-account-group"></v-icon> &nbsp;
            Гости
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                density="compact"
                label="Поиск"
                single-line
                flat
                hide-details
                variant="solo-filled"
            ></v-text-field>
          </v-card-title>
          <v-data-table-virtual
              v-model:search="search"
              v-model="selectedGuests"
              :items="guests"
              :headers="headers"
              no-data-text="Добавьте первого гостя..."
              height="500"
              show-select
              return-object
          >
            <template v-slot:[`item.invited`]="{item}">
              <v-icon v-if="item.invited" icon="mdi-check-bold" color="green" @click="changeGuestInvited(item)"/>
              <v-icon v-else icon="mdi-close" color="red" @click="changeGuestInvited(item)"/>
            </template>
          </v-data-table-virtual>
        </v-card>
      </v-window-item>
    </v-window>
  </v-main>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useAuth} from "@/stores/useAuth.ts";
import {useGuests} from "@/stores/useGuests.ts";
import GuestDialog from "@/components/GuestDialog.vue";
import {attendValues} from "@/interfaces/guest.ts"

const isExpandNav = ref(false);
const curTab = ref('');
const {checkAuth, logout} = useAuth();
const {guests, isOpenedGuestDialog, selectedGuests, isEditGuest, sendMailSuccess} = storeToRefs(useGuests());
const {getGuests, changeGuestInvited, setNewGuestVariable, deleteGuest, sendMails} = useGuests();

const search = ref('');

const headers = [
  {title: 'Фамилия', key: 'lastName', align: 'center'},
  {title: 'Имя', key: 'firstName', align: 'center'},
  {title: 'Отчество', key: 'patronymic', align: 'center'},
  {title: 'Приглашен?', key: 'invited', align: 'center'},
  {title: 'Email', key: 'email', align: 'center'},
  {title: 'Присутствие', key: 'attend', align: 'center'},
  {title: 'Дата', key: 'date', align: 'center'},
]

const openGuestDialog = (edit) => {
  isEditGuest.value = edit;
  isOpenedGuestDialog.value = true;
  if (isEditGuest.value) {
    setNewGuestVariable(selectedGuests.value[0])
  }
}

onMounted(async () => {
  checkAuth();
  await getGuests();
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital@1&family=Dynalight&family=Lora&display=swap');

.text {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: white;
}
</style>