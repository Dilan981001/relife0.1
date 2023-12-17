<template>
  <q-drawer
    show-if-above
    side="left"
    behavior="desktop"
    :width="100"
    class="colorBackground"
  >
    <div class="flex flex-center column q-mt-lg q-mb-lg">
      <img
        src="/relife3.ico"
        alt="Relife icon"
        style="width: 70%; height: 70%"
      />
    </div>

    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item
          clickable
          :active="link === 'home'"
          @click="link = 'home'"
          active-class=""
        >
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon
              :icon="['fas', 'calendar-plus']"
              :size="{ width: '70%', height: '70%' }"
              style="color: floralwhite; width: 70%; height: 70%"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item
          clickable
          :active="link === 'home'"
          @click="link = 'home'"
          active-class=""
        >
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon
              :icon="['fas', 'fa-message']"
              :size="{ width: '70%', height: '70%' }"
              style="color: floralwhite; width: 70%; height: 70%"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item
          clickable
          :active="link === 'home'"
          @click="link = 'home'"
          active-class=""
        >
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon
              :icon="['fas', 'fa-archive']"
              :size="{ width: '70%', height: '70%' }"
              style="color: floralwhite; width: 70%; height: 70%"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item
          clickable
          :active="link === 'home'"
          @click="link = 'home'"
          active-class=""
        >
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon
              :icon="['fas', 'fa-user-plus']"
              :size="{ width: '70%', height: '70%' }"
              style="color: floralwhite; width: 70%; height: 70%"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <router-link to="/marketplace">
          <q-item clickable>
            <q-item-section avatar class="flex flex-center column">
              <font-awesome-icon
                :icon="['fas', 'fa-cart-plus']"
                :size="{ width: '70%', height: '70%' }"
                style="color: floralwhite; width: 70%; height: 70%"
              />
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </div>

    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <q-item-section avatar class="flex flex-center column">
        <router-link to="/signin">
          <p style="color: white">Sign Out</p>
        </router-link>
      </q-item-section>
    </div>
  </q-drawer>
</template>

<script>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default {
  name: "LeftBarf",
  components: {
    FontAwesomeIcon,
    // eslint-disable-next-line vue/no-unused-components
  },
  setup() {
    return {
      link: ref("parentdashf"),
    };
  },
};
</script>

<style>
.colorBackground {
  background: #284b36;
  z-index: 1000;
}
.q-item_section--side {
  padding-right: 0px !important;
}
.q-item_section--avatar {
  color: white !important;
}
.q-item {
  padding: 20px 0px !important;
}
</style>
