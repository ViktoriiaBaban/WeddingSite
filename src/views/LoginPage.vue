<template>
  <v-app>
    <v-main style="background-color: #EEF2F3">
      <v-container class="fill-height">
        <v-sheet width="400" class=" pa-2 mx-auto align-self-center" style="background-color: #EEF2F3">
          <v-card class="mx-auto px-6 py-8">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                  v-model="username"
                  label="Имя пользователя"
                  variant="solo-filled"
                  :error-messages="usernameErrorMessage"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :type="show ? 'text' : 'password'"
                  label="Пароль"
                  type="password"
                  variant="solo-filled"
                  :error-messages="errorMessage"
              >
                <template v-slot:append-inner>
                  <v-icon color="#5A6676" :icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click="show = !show"></v-icon>
                </template>
              </v-text-field>
              <v-btn
                  color="#7999A5"
                  type="submit"
                  block
                  class="mt-2"
                  variant="elevated"
                  @click="login"
                  height="50"
                  :loading="isLoading"
              >Войти
              </v-btn>
            </v-form>
          </v-card>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useAuth} from "@/stores/useAuth.ts";

const show = ref(false)
const {
  errorMessage,
  usernameErrorMessage,
  username,
  password,
  isLoading,
} = storeToRefs(useAuth());
const { login } = useAuth();
</script>

<style scoped>

</style>