<template>
<v-main style="background-color: #EEF2F3" >
  <v-container class="fill-height">
    <v-card variant="elevated" class="pa-5 mx-auto">
      <v-card-title class="title-text">Спасибо за ответ</v-card-title>
      <v-card-text class="text-body-1">
        <span v-if="guestAttend === 'yes'">Будем ждать Вас на нашей свадьбе!</span>
        <span v-else-if="guestAttend === 'no'">Очень жаль, что вы не сможете прийти. Если что-то изменится, не стесняйтесь отправить форму еще раз</span>
        <span v-else>Надеемся, в скором времени всё прояснится. Вы можете заполнить форму на сайте, как только будете готовы, или дождаться повторного письма на почту</span>
      </v-card-text>
      <v-card-item class="justify-center">
        <v-btn
            color="#7999A5"
            variant="elevated"
            style="font-family: 'Lora', serif"
            @click="router.push({name: 'Wedding'})"
        >
          Посмотреть приглашение
        </v-btn>
      </v-card-item>

    </v-card>
  </v-container>

</v-main>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {api} from "@/api/api.ts";
import router from "@/router/index.ts";

const attendValues = {
  yes: 'Да',
  not_sure: 'Не знаю',
  no: 'Нет'
}

const guestId = ref(0);
const guestAttend = ref('');

onMounted(async () => {
  guestId.value = Number(router.currentRoute.value.params.id)
  guestAttend.value = router.currentRoute.value.params.attend
  await api.put(`/guests/${guestId.value}`, {
    attend: attendValues[guestAttend.value],
    date: new Date().toLocaleString('ru')
  });
})
</script>

<style scoped>
.title-text {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #3c495a;
}

.text-body-1 {
  font-family: 'Lora', serif !important;
  font-style: normal;
  color: #3c495a;
}
</style>