<template>
  <div class="contact">
    <v-row align="center">
      <v-col cols="12" lg="6" md="6" sm="12">
        <div class="mapouter" v-if="map">
          <div class="gmap_canvas">
            <iframe
              width="700"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Antrum%20Engineering&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div v-else>
          <p>Loading map...</p>
        </div>
      </v-col>
      <v-col cols="12" sm="12" lg="5" md="5" offset-lg="1" offset-md="1">
        <h2 class="font-weight-thin mb-4">
          Let's Hear from you.
        </h2>
        <v-card class="pa-7">
          <v-form ref="formEmail" lazy-validation>
            <v-text-field
              v-model="formData.name"
              :counter="20"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="formData.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              v-model="formData.message"
              :rules="[v => !!v || 'Messsage is required']"
              label="Message"
              required
            ></v-textarea>
            <v-btn
              :loading="loading"
              :disabled="disabled"
              color="secondary"
              @click="sendMessage()"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar color="success" v-model="snackbar" :timeout="timeout">
      {{ successMessage }}
      <v-btn color="white" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar color="error" v-model="snackbarError" :timeout="timeout">
      {{ errorMessage }}
      <v-btn color="white" text @click="snackbarError = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { functions } from "../firebase";

export default {
  data: () => ({
    formData: {
      name: "",
      email: "",
      message: ""
    },
    map: true,
    loading: false,
    disabled: false,
    snackbar: false,
    snackbarError: false,
    successMessage: "",
    errorMessage: "",
    timeout: 5000,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    sendMessage() {
      if (this.$refs.formEmail.validate()) {
        this.loading = true;
        this.disabled = true;
        const data = {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message
        };
        const sendEmail = functions.httpsCallable("sendEmail");
        sendEmail(data)
          // eslint-disable-next-line no-unused-vars
          .then(res => {
            this.disabled = false;
            this.loading = false;
            this.snackbar = true;
            this.successMessage = "Mail sent! We'll respond ASAP.";
            this.$refs.formEmail.reset();
          })
          .catch(err => {
            this.disabled = false;
            this.loading = false;
            this.snackbarError = true;
            this.errorMessage = err.message;
          });
      }
    }
  }
};
</script>

<style lang="scss">
.contact {
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
    padding: 1em;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 300px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 500px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 700px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 500px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 600px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 600px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 300px;
      width: 600px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 300px;
      width: 330px;
    }
  }
}
</style>