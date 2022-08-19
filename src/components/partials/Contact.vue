<template>
  <div class="tokyo_tm_contact">
    <div class="fields">
      <div class="alert alert-success mb-1" v-show="success">
        You'r message has been send.
      </div>
      <div class="alert alert-danger mb-1" v-show="error">
        An error has occurred while trying to process your request.
      </div>
      <ValidationObserver tag="form" ref="observer" @submit.prevent="onSubmit">
          <div class="first">
            <ul>
              <ValidationProvider
                name="name"
                rules="required"
                v-slot="{ errors }"
              >
                <li>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Name"
                    autocomplete="off"
                  />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>

              <ValidationProvider
                name="email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <li>
                  <input
                    type="text"
                    rules="required|email"
                    v-model="formData.email"
                    placeholder="Email"
                  />
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
              <ValidationProvider
                name="message"
                rules="required"
                v-slot="{ errors }"
              >
                <li>
                  <textarea
                    v-model="formData.message"
                    placeholder="Message"
                  ></textarea>
                  <span class="inpur-error">{{ errors[0] }}</span>
                </li>
              </ValidationProvider>
            </ul>
          </div>
          <div class="tokyo_tm_button" style="text-align: center;margin-bottom: 2.5rem;">
            <button type="submit" class="white-fill-bg fill-black" :disabled="loading">
              {{loading ? 'Sending message...' : 'Send Message'}}
            </button>
          </div>
      </ValidationObserver>
    </div>
    <!-- END FIELDS -->
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import axios from "axios";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      success: false,
      error: false,
      formData: {
        recaptcha_response: "",
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;

      this.formData.recaptcha_response = await this.$root.recaptcha();
      
      axios.post('https://api.mikkelsv.dk/mail/send', this.formData).then(() => {
        this.loading = false;
        this.success = true;
        this.error = false;

        this.$refs.observer.reset();

        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      }).catch(err => {
        this.loading = false;
        this.success = false;
        this.error = true;

        console.log(err)
      });
    },
  },
};
</script>

<style>
  .mb-1{
    margin-bottom: 1rem;
  }
  .alert {
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
  }
  .alert-success {
    color: #266d0e;
    border-color: #c5e9ba;
    background-color: #d9f0d1;
  }
  .alert-danger {
    color: #990022;
    border-color: #ffb3c4;
    background-color: #ffccd7;
  }
</style>