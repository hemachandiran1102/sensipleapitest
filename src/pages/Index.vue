<template>
  <q-page class="flex flex-center">
    <div class="login-body">
      <div class="login">
        <div class="logo-area">
          <img alt="Logo-one" src="IMG.jpg" />
        </div>
        <div class="login-input">
          <div id="todo-field" class="login-process">
            <div class="login-status">
              <h2>God Of War</h2>
              <p>(Welcome to Ragnorak)</p>
            </div>
            <!-- USER ID -->
            <div class="form-field-wrapper">
              <label class="form-field-label" for="userId">Email Id</label>
              <q-input
                v-model="email"
                name="userId"
                class="input-field"
                type="text"
                outlined
                id="userId"
              >
              </q-input>
              <div class="reg-error">
                <span
                  class="error-msg"
                  v-if="v$.email.$error && v$.email.required.$invalid"
                  >Email is Required</span
                >
                <span
                  class="error-msg"
                  v-if="
                    v$.email.$error &&
                    !v$.email.required.$invalid &&
                    v$.email.email.$invalid
                  "
                  >Enter a valid email address</span
                >
              </div>
            </div>

            <!-- PASSWORD -->
            <div class="form-field-wrapper">
              <label class="form-field-label" for="password">Password</label>
              <q-input
                class="input-field"
                id="password"
                outlined
                v-model="password"
              >
              </q-input>
              <span class="error-msg" v-if="v$.password.$error">
                Password is required
              </span>
            </div>
          </div>

          <div class="button-area">
            <q-btn
              @click="submitForm()"
              class="flat-btn flat-view-btn"
              unelevated
              no-caps
              @submit.prevent
              label="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from "vue";
import useValidate from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        return;
      }
      this.$router.push({ path: "/thankYou" });
    },
  },
};
</script>
<style>
.register {
  text-align: center;
}
.register a {
  color: #fa8b23;
  font-size: 17px;
  font-weight: 600;
}
</style>
