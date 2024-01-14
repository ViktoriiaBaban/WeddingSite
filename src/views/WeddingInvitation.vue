<template>
  <v-main>
    <v-btn
        v-if="isAuth"
        icon="mdi-arrow-left"
        size="large"
        class="ma-2"
        position="fixed"
        @click="$router.push({name: 'Main'})"
    />
    <section class="d-flex flex-column justify-center align-center">
      <section class="main-page mb-4 ">
        <div class="d-inline-flex flex-column-reverse flex-md-row">
          <h3 class="date align-self-end mr-11">07.07.2024</h3>
          <img class="img-fluid" width="455" src="../assets/img/main_photo_1.png" alt="Кристина и Максим">
        </div>
        <h1 class="d-flex mt-n2 col-md-7 justify-content-center justify-content-md-end">Кристина & Максим</h1>
        <div class="d-flex justify-content-md-end ml-n5">
          <img width="458" src="../assets/img/main_photo_2.png" alt="Кристина и Максим">
        </div>
        <img class="flower-main mx-15" src="../assets/img/flowers_1.png" alt="Цветы">
      </section>
      <v-toolbar class="nav mt-1 mt-sm-3 mt-md-4" color="#7999A5" density="comfortable">
        <v-list class="d-flex mx-auto " density="compact" bg-color="#7999A5">
          <v-list-item class="nav-link mr-10" href="#timeline">Расписание</v-list-item>
          <v-list-item class="nav-link mx-15" href="#hints">Наши пожелания</v-list-item>
          <v-list-item class="nav-link ml-7 mr-15" href="#map">Карта</v-list-item>
          <v-list-item class="nav-link ml-10" href="#fos">Отметить присутствие</v-list-item>
        </v-list>
      </v-toolbar>
    </section>
    <main class="text pt-5">
      <section class="d-flex container flex-column-reverse flex-md-row pl-15 pt-5 ">
        <div class="d-flex flex-column v-col-md-7 mt-5 ml-4 mr-15 greed pb-md-5">
          <h2 class="h2-greeting ml-2 align-self-start">Дорогой гость,</h2>
          <p class="greeting-text pt-3 mb-lg-5 mb-3 ">Мы будем рады видеть тебя на своей свадьбе! На этом сайте ты
            можешь
            ознакомиться с основными моментами нашего дня. Также просим тебя подтвердить свое присутствие,
            воспользовавшись формой
            в конце страницы.</p>
          <button class="text mt-10 ml-3 align-self-center">
            <a class="text-decoration-none text-white" href="#fos">Подтвердить присутствие</a>
          </button>
        </div>
        <div class="mt-8 d-flex flex-column ">
          <div class="polaroid align-self-center"></div>
          <img class="flower-polaroid " src="../assets/img/flower_decorate.png" alt="Цветочное украшение">
        </div>
      </section>
      <section class="d-flex timeline-section" id="timeline">
        <aside class="col-1 d-none d-md-block">
          <img src="../assets/img/Flowers.png" alt="Цветы сбоку">
        </aside>
        <div class="d-flex flex-column container mx-auto">
          <h2 class="mb-5">Расписание</h2>
          <div class="mt-3 timeline">
            <div class="con left">
              <img class="element-show icon element-animation" src="../assets/img/champagne-glass.svg"
                   alt="Сбор гостей">
              <div class="element-show content element-animation left-animate ">
                <p class="text-end">16:00</p>
                <p class="text-end">Сбор гостей</p>
              </div>
            </div>
            <div class="con right">
              <img class="element-show icon element-animation" src="../assets/img/wedding-ring.svg" alt="Церемония">
              <div class="element-show content element-animation right-animate">
                <p>17:00</p>
                <p>Церемония</p>
              </div>
            </div>
            <div class="con left">
              <img class="element-show icon element-animation" src="../assets/img/banquet.svg" alt="Банкет">
              <div class="element-show content element-animation left-animate">
                <p>17:30</p>
                <p>Банкет</p>
              </div>
            </div>
            <div class="con right">
              <img class="element-show icon element-animation" src="../assets/img/dance.svg" alt="Танец">
              <div class="element-show content element-animation right-animate">
                <p>Первый танец</p>
              </div>
            </div>
            <div class="con left">
              <img class="element-show icon element-animation" src="../assets/img/cake.svg" alt="Торт">
              <div class="element-show content element-animation left-animate">
                <p>Свадебный торт</p>
              </div>
            </div>
            <div class="con right">
              <img class="element-show icon element-animation" src="../assets/img/sparkler_1.svg" alt="Конец">
              <div class="element-show content  element-animation right-animate">
                <p>23:00</p>
                <p>Окончание вечера</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-5" id="hints">
        <h2>Подсказки и пожелания</h2>
        <div class="container hints ml-15 pl-15">
          <div class="hint left gifts element-animation down-animate element-show">
            <h3>Подарки</h3>
            <p>Не ломайте голову над подарками. Ваши пожелания в конвертах помогут осуществить наши мечты.</p>
          </div>
          <div class="hint right dress element-animation down-animate element-show">
            <h3>Дресс-код</h3>
            <p>Мы будем рады если вы поддержите цветовую гамму нашей свадьбы:</p>
            <div class="palitra">
              <div class="d-flex justify-content-between align-content-between">
                <div class="circle blue "></div>
                <div class="circle dark-blue "></div>
                <div class="circle pink"></div>
                <div class="circle bej"></div>
                <div class="circle green"></div>
                <div class="circle brown"></div>
              </div>
            </div>
          </div>
          <div class="hint left mood element-animation down-animate element-show">
            <img class="img-fluid moodbord" src="../assets/img/moodbord.jpg" alt="Свадебный мудборд">
          </div>
          <div class="hint right flower element-animation down-animate element-show">
            <h3>Цветы</h3>
            <p>Будем рады, если вместо цветов вы подарите бутылочку вашего любимого вина.</p>
          </div>
        </div>
      </section>
      <section class="map d-flex justify-content-md-between flex-column-reverse flex-md-row" id="map">
        <iframe class="align-self-center"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ace1937416493bd73233b123d7db222373b527549002cef47078c8c1b30f16854&amp;source=constructor"
                width="495" height="471" frameborder="0"></iframe>
        <div class="d-flex align-items-center flex-column mt-3">
          <h2 class="ml-n15 align-self-center">Где будет проходить торжество</h2>
          <p class="mt-10 ml-5">
            <svg id="Capa_1" width="40px" height="40px" enable-background="new 0 0 512 512" viewBox="0 0 512 512"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="m421 165c0-90.981-74.019-165-165-165s-165 74.019-165 165c0 32.765 9.586 64.429 27.681 91.509l57.135 86.414c-39.986 11.753-84.816 37.66-84.816 79.077 0 64.381 99.946 90 165 90 65.558 0 165-25.835 165-90 0-41.368-44.737-67.297-84.816-79.077l57.094-86.353c18.136-27.141 27.722-58.805 27.722-91.57zm-30 257c0 28.379-55.442 60-135 60s-135-31.621-135-60c0-21.029 29.262-42.078 72.247-52.714l62.753 94.911 62.753-94.911c42.985 10.636 72.247 31.685 72.247 52.714zm-22.706-182.037-112.294 169.84-112.335-169.9c-14.828-22.191-22.665-48.092-22.665-74.903 0-74.439 60.561-135 135-135s135 60.561 135 135c0 26.811-7.837 52.712-22.706 74.963z"
                  fill="#000000" style="fill: rgb(44, 52, 77);"></path>
              <path
                  d="m293.211 90c-15.918 0-28.315 7.129-37.211 16.934-8.896-9.805-21.293-16.934-37.211-16.934-29.602 0-52.789 24.129-52.789 54.932 0 32.35 25.138 53.485 59.931 82.736 20.298 17.066 20.497 17.493 30.069 25.719 9.949-8.547 9.517-8.435 28.939-24.739 34.115-28.638 61.061-51.258 61.061-83.716 0-30.803-23.188-54.932-52.789-54.932zm-27.561 115.671c-3.157 2.65-6.368 5.346-9.644 8.119-3.682-3.125-7.258-6.132-10.771-9.084-32.352-27.201-49.235-42.213-49.235-59.774 0-14.214 9.797-24.932 22.789-24.932 14.373 0 20.837 15.275 22.476 19.956l3.516 10.044h22.438l3.516-10.044c1.639-4.682 8.103-19.956 22.476-19.956 12.992 0 22.789 10.718 22.789 24.932 0 18.473-21.119 36.201-50.35 60.739z"
                  fill="#000000" style="fill: rgb(44, 52, 77);"></path>
            </svg>
            Шувалофф Холидэйс, ул. Ломоносова, 102
          </p>
        </div>
        <img
            alt="Цветок"
            class="align-self-end d-none d-lg-block"
            height="274"
            src="../assets/img/flower_map.svg"
            width="350"
        >
        <img
            alt="Цветок"
            class="align-self-end d-none d-md-block d-lg-none"
            height="179"
            src="../assets/img/flower_map.svg"
            width="255"
        >
      </section>
      <section class="fos d-flex flex-column" id="fos">
        <h2 class="mt-4">Просим Вас отметить своё присутствие!</h2>
        <div class="d-flex container-fluid align-self-start flex-column-reverse flex-md-row">
          <img
              class="flower-fos mx-sm-0 align-self-md-end"
              width="380"
              height="254"
              src="../assets/img/flower_fos.svg"
              alt="Верхняя половина цветка"
          >
          <v-form class="mt-4 mx-sm-0 d-flex flex-column " validate-on="submit lazy">
            <v-item-group class="d-flex">
              <v-text-field
                  v-model="newGuest.lastName"
                  density="comfortable"
                  variant="solo"
                  label="Фамилия"
                  placeholder="Иванов"
                  type="text"
                  :error-messages="lastNameErrorMessage"
              ></v-text-field>
              <v-text-field
                  v-model="newGuest.firstName"
                  class="mx-1"
                  density="comfortable"
                  variant="solo"
                  label="Имя"
                  placeholder="Иван"
                  type="text"
                  :error-messages="firstNameErrorMessage"
              ></v-text-field>
              <v-text-field
                  v-model="newGuest.patronymic"
                  density="comfortable"
                  variant="solo"
                  label="Отчество"
                  placeholder="Иванович"
                  type="text"
              ></v-text-field>
            </v-item-group>
            <v-text-field
                v-model="newGuest.email"
                density="comfortable"
                variant="solo"
                label="Email"
                placeholder="johndoe@gmail.com"
                type="email"
                :error-messages="emailErrorMessage"
            ></v-text-field>
            <p>Будете ли вы на нашей свадьбе?</p>
            <p v-if="!!attendErrorMessage.length" class="text-red-darken-1 text-subtitle-2">{{ attendErrorMessage }}</p>
            <v-btn-toggle
                v-model="newGuest.attend"
                class="mt-2 my-outline-btn"
                color="#7999A5"
                density="comfortable"
                divided
                variant="outlined"
                mandatory
            >
              <v-btn :value="attendValues.YES">Конечно приду!</v-btn>
              <v-btn :value="attendValues.NOT_SURE">Пока не знаю</v-btn>
              <v-btn :value="attendValues.NO">К сожалению, нет</v-btn>
            </v-btn-toggle>
            <div class="mt-5  align-self-center">
              <v-btn type="submit" color="#556579" @click.prevent="sendForm(newGuest)">Отправить</v-btn>
            </div>
          </v-form>
          <v-dialog v-if="isFormSuccess" v-model="isFormSuccess">
            <v-card variant="elevated" color="#EEF2F3">
              <div class="d-flex border-b">
                <v-card-title class="text ml-2">Спасибо!</v-card-title>
                <v-spacer/>
                <v-btn variant="text" icon="$close" color="#556579" @click="isFormSuccess = false"></v-btn>
              </div>
              <v-card-text class="text mt-2">Форма успешно отправлена.</v-card-text>
              <v-card-text class="text mt-n3 mb-4">Мы пришлем Вам напоминание на указанный адрес электронной почты.
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </section>
    </main>
  </v-main>
  <v-footer>
    <img width="355" height="86" class="ml-n4 mt-n4" src="../assets/img/flower_timer.svg" alt="Нижняя половина цветка">
  </v-footer>
</template>

<script setup>
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useGuests} from "@/stores/useGuests.ts";
import {useAuth} from "@/stores/useAuth.ts";
import {attendValues} from "@/interfaces/guest.ts";

const {
  newGuest,
  isFormSuccess,
  lastNameErrorMessage,
  firstNameErrorMessage,
  emailErrorMessage,
  attendErrorMessage
} = storeToRefs(useGuests());
const {sendForm, getGuests} = useGuests();
const {isAuth} = storeToRefs(useAuth())

onMounted(async () => {
  await getGuests();
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital@1&family=Dynalight&family=Lora&display=swap');

body {
  width: 100%;
}

.text {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #556579;
}

.nav-link {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: white;
}

.main-page {
  margin-top: 52px;
  height: 660px;
}

.date {
  width: 227px;

  padding-bottom: 0;
  padding-left: 20px;

  font-family: 'Dynalight', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;

  letter-spacing: 0.44px;
  z-index: 1;

  color: #5A6676;
}

h1 {
  position: relative;
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 62px;
  color: #5A6676;
  z-index: 1;
}

.flower-main {
  position: relative;
  width: 310.96px;
  height: 400px;
  right: -72%;
  bottom: 63%;
}

main {
  background: #EEF2F3;
  height: auto;
}

.h2-greeting {
  font-family: 'Cormorant', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 61px;
}

.greeting-text {
  font-family: 'Cormorant', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
}

button.text {
  color: white !important;
  background: #7999A5;
  border: none;
  border-radius: 5px;
  padding: 10px;
}

.polaroid {
  box-sizing: border-box;
  width: 355px;
  height: 426px;
  background: url("../assets/img/polaroid.png");
  border-width: 20px 30px 85px 30px;
  border-style: solid;
  border-color: #FFFFFF;
  transform: rotate(13deg);
}

.flower-polaroid {
  position: relative;
  width: 434px;
  max-width: 100%;
  bottom: 140px;
  left: 95px;
  transform: rotate(-10deg);
}

h2 {
  font-family: 'Lora', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 64px;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #2C344D;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.con {
  position: relative;
  width: 30%;
}

.con.left {
  left: 20%;
}

.con.right {
  left: 50%;
}

.con::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  z-index: 1;
}

.con.right::after {
  left: -8px;
}

.con::before {
  content: '';
  position: absolute;
  width: 90px;
  height: 2px;
  top: calc(50% - 1px);
  right: 0;
  background: #2C344D;
  z-index: 1;
}

.con.right::before {
  left: 0;
}

.con .icon {
  position: absolute;
  display: inline-block;
  z-index: 1;
  top: calc(10%);
}

.con.left .icon {
  right: -100px;
}

.con.right .icon {
  left: -100px;
}

.con .content {
  padding: 30px 500px 30px 0;
  position: relative;
  text-align: center;
}

.con.right .content {
  padding: 30px 0 30px 100px;
  text-align: start;
}

.con .content p {
  margin: 0;
}

.hints {
  position: relative;
  height: 1200px;
  padding-top: 50px;
}

.hint {
  position: relative;
  width: 457px;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 30px 63px 70px 63px;
  text-align: center;
}

h3 {
  font-family: 'Cormorant', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
}

.hint p {
  margin-top: 40px;
  font-family: 'Cormorant', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
}

.hint.gifts {
  background: #556579;
  color: white;
}

.hint.dress {
  background: white;
  top: -7%;
  z-index: 1;
}

.hint.mood {
  top: -12%;
  background: #7999A5;
  width: 500px;
  height: 390px;
  z-index: 2;
  padding: 15px 10px 10px 10px;
}

.hint.flower {
  background: white;
  top: -18%;
  z-index: 3;
  padding-bottom: 55px;
}

.moodbord {
  max-width: 90%;
  max-height: 95%;
}

.palitra {
  height: 50px;
  margin-top: 30px;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.circle.blue {
  background: #7999A5;
}

.circle.dark-blue {
  background: #5A6676;
}

.circle.pink {
  background: #E8C9CD;
}

.circle.bej {
  background: #CEB599;
}

.circle.green {
  background: #A1B684;
}

.circle.brown {
  background: #775735;

}

.map iframe {
  position: relative;
  box-sizing: border-box;
  width: 555px;
  height: 561px;
  border-width: 20px 30px 70px 30px;
  border-style: solid;
  border-color: #FFFFFF;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  top: 10%;
  left: 10%;
  margin-bottom: 40px;
}

.map .flex-column {
  position: relative;
  right: -20%;
  width: 600px;
}

.map img {
  position: relative;
  right: 0;
  bottom: 0;
}

.fos {
  padding-bottom: 40px;
  background: white;
}

.flower-fos {
  position: relative;
  left: -13px;
  bottom: -40px;
  z-index: 1;
  background-color: white;
}

form {
  position: relative;
  margin: 0 auto;
  min-height: 323px;
  background: #EEF2F3;
  box-shadow: 4px 4px 4px #556579;
  border-radius: 10px;
  padding: 45px 100px;
  z-index: 1;
}

.v-btn--variant-outlined {
  border: thin solid #7999A5 !important;
  color: #556579;
}

.v-btn--active {
  background-color: #7999A5 !important;
  color: white !important;
}

footer {
  position: relative;
  height: 86px;
  background: #556579;
}

footer img {
  position: relative;
}

@media (max-width: 1039px), (min-width: 601px) {
  h1 {
    font-size: 50px;
  }

  .hint.left {
    left: 10%;
  }

  .hint.right {
    left: 40%;
  }

  form {
    max-width: 90%;
    padding: 45px 70px;
  }
}

@media (max-width: 600px) {
  .text {
    font-size: 16px;
    line-height: 18px;
  }

  h1 {
    font-size: 40px;
    line-height: normal;
    align-self: center;
  }

  .date {
    font-size: 35px;
    line-height: normal;
  }

  .main-page {
    margin-left: 0;
    height: 500px;
  }

  .flower-main {
    z-index: -1;
    right: 0%;
    bottom: 75%;
  }

  h2 {
    font-size: 25px;
    line-height: normal;
  }

  .h2-greeting {
    font-size: 25px;
    line-height: normal;
  }

  .greeting-text {
    font-size: 20px;
    line-height: normal;
  }

  .polaroid {
    width: 320px;
    height: 391px;

  }

  .flower-polaroid {
    max-width: 300px;
    height: auto;
    transform: rotate(-17deg);

  }

  .greed {
    position: relative;
    bottom: 200px;
  }

  .con.left {
    left: 15%;
  }

  .con {
    position: relative;
    width: 35%;
  }

  .con .content {
    padding: 30px 120px 30px 0px;
    position: relative;
    text-align: end;
  }

  h3 {
    font-size: 25px;
  }

  .hint p {
    font-size: 18px;
  }

  .hint {
    width: 65%;
    padding: 30px 33px 70px 33px;
  }

  .hint.left {
    left: 1%;
  }

  .hint.right {
    left: 35%;
  }

  .hint.dress {
    top: -5%;
  }

  .hint.mood {
    top: -10%;
    width: 65%;
    height: fit-content;
  }

  .hint.flower {
    top: -12%;
  }

  .circle {
    width: 38px;
    height: 38px;
  }

  .map iframe {
    max-width: 90%;
    height: 510px;
    top: 0%;
    left: 0%;
  }

  .map .flex-column {
    align-items: center;
    right: -5%;
    max-width: 90%;
  }

  form {
    max-width: 90%;
    padding: 45px 60px;
  }
}

@media (max-width: 391px) {
  h1 {
    font-size: 32px;
  }

  .date {
    font-size: 25px;
  }

  form {
    padding: 45px 20px;
  }

  .con.left {
    left: 5%;
  }

  .con {
    position: relative;
    width: 45%;
  }

  .con .content {
    padding: 30px 60px 30px 0px;
    position: relative;
    text-align: end;
  }

  .con.right .content {
    padding: 30px 0px 30px 60px;
    text-align: start;
  }

  .con::before {
    width: 50px;
  }

  .polaroid {
    width: 250px;
    height: 321px;
    border-width: 10px 10px 55px 10px;
    transform: rotate(10deg);

  }

  .flower-polaroid {
    width: 270px;
    height: auto;
    transform: rotate(-16deg);
    bottom: 115px;
    left: 75px;
    margin-bottom: 50px;
  }

  .hint {
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.25);
  }

  .palitra .d-flex {
    flex-wrap: wrap;
    justify-content: space-around !important;
  }

  .hint.mood {
    top: -8%;
  }

  .hint.flower {
    top: -10%;
  }

  .map div p {
    padding: 0 50px;
    text-align: center;
  }
}
</style>