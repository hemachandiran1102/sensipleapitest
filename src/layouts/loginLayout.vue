<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <!-- <img src="../statics/login-bg.jpg" alt="login-bg">  -->
      <div class="login-page">
        <div class="add-language"></div>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "loginLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
