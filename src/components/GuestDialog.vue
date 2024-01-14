<template>
  <v-dialog v-model="isOpenedGuestDialog" class="w-75">
    <v-card variant="elevated" color="#EEF2F3">
      <v-row class="px-5 pt-3">
        <v-card-title class="form-text">
          <span v-if="!isEditGuest">Добавить гостя</span>
          <span v-else>Редактировать гостя</span>
        </v-card-title>
        <v-spacer/>
        <v-btn icon="mdi-close" variant="text" @click="closeDialog"></v-btn>
      </v-row>
      <v-card-text class="mt-n2">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                  v-model="newGuest.lastName"
                  :rules="[rules.alwaysRequired]"
                  hide-details="auto"
                  density="comfortable"
                  variant="solo"
                  label="Фамилия"
                  placeholder="Иванов"
                  type="text"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="newGuest.firstName"
                  :rules="[rules.alwaysRequired]"
                  hide-details="auto"
                  density="comfortable"
                  variant="solo"
                  label="Имя"
                  placeholder="Иван"
                  type="text"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="newGuest.patronymic"
                  hide-details="auto"
                  density="comfortable"
                  variant="solo"
                  label="Отчество"
                  placeholder="Иванович"
                  type="text"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                  v-model="newGuest.email"
                  hide-details="auto"
                  density="comfortable"
                  variant="solo"
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  type="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align-content="space-around" justify="center">
            <v-card-text class="form-text">Будет ли на свадьбе?</v-card-text>
            <v-btn-toggle
                v-model="newGuest.attend"
                class="mr-10 mt-3 my-outline-btn"
                color="#7999A5"
                density="compact"
                divided=true
                variant="outlined"
                mandatory
            >
              <v-btn :value="attendValues.YES">Да</v-btn>
              <v-btn :value="attendValues.NOT_SURE">Пока не известно</v-btn>
              <v-btn :value="attendValues.NO">Нет</v-btn>
            </v-btn-toggle>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="align-self-center my-2">
        <v-btn
            variant="flat"
            color="green"
            class="mr-2"
            @click="isEditGuest ? editExistedGuest(guestId, newGuest) : saveNewGuest(newGuest)"
        >
          Сохранить изменения
        </v-btn>
        <v-btn variant="flat" color="red" :disabled="!isEditGuest" @click="deleteGuest([guestId])">Удалить
          пользователя
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>

import {storeToRefs} from "pinia";
import {useGuests} from "@/stores/useGuests.ts";
import {attendValues} from "@/interfaces/guest.ts";

const {isOpenedGuestDialog, selectedGuests, isEditGuest, newGuest} = storeToRefs(useGuests());
const {deleteGuest, closeDialog, editExistedGuest, saveNewGuest} = useGuests();
const guestId = isEditGuest ? selectedGuests.value[0]?.id : 0
let rules = {
  alwaysRequired: value => !!value || 'Заполните поле',
};


</script>


<style scoped>
.form-text {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
}

.v-btn--variant-outlined {
  border: thin solid #7999A5 !important;
  color: #556579;
}

.v-btn--active {
  background-color: #7999A5 !important;
  color: white !important;
}
</style>