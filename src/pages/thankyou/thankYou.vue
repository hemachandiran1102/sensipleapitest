<template>
  <q-page padding>
    <div class="login-body">
      <div class="login">
        <div class="logo-area">
          <img alt="Logo-one" src="IMG.jpg" />
        </div>
        <div class="login-input">
          <div class="login-status">
            <!-- <h2>{{$t('PASSWORDRESETSUCCESSFULLY')}}</h2> -->
            <p>THANK YOU</p>
          </div>
          <div class="button-area">
            <q-btn
              @click="loginPage"
              class="flat-btn flat-view-btn"
              unelevated
              no-caps
              label="Go Sign In"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "thankYouNew",
  data() {
    return {
      copyrightYear: "",
    };
  },
  methods: {
    loginPage() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    let today = new Date();
    this.copyrightYear = today.getFullYear();
  },
};
</script>

<style></style>
