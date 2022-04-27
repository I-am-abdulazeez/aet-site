<template>
  <div class="footer">
    <v-footer padless color="white black--text">
      <div class="container">
        <v-card flat tile class="text-center black--text">
          <v-card-text>
            <v-btn
              class="mx-4"
              target="_blank"
              icon
              color="#3b5998"
              href="https://www.facebook.com/AETCOgroup/?__tn__=%2Cd%2CP-R&eid=ARD05YmC_4Aa6Sur7talOSrPNH5odDl7sSfeugDDvlBENs-HiOoIQvyMhVqRGWZKMq8azjWk336HzzSl"
            >
              <v-icon size="24px">fab fa-facebook</v-icon>
            </v-btn>

            <v-btn
              class="mx-4"
              target="_blank"
              icon
              color="#00acee"
              href="https://twitter.com/antrum_engr"
            >
              <v-icon size="24px">fab fa-twitter</v-icon>
            </v-btn>

            <v-tooltip top color="#DB4437">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mx-4"
                  target="_blank"
                  v-on="on"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=antrumengineering@gmail.com&su=Contact_Antrum&body=Let_know_you"
                  icon
                  color="#DB4437"
                >
                  <v-icon size="24px">fab fa-google-plus</v-icon>
                </v-btn>
              </template>
              <span>antrumengineering@gmail.com</span>
            </v-tooltip>

            <v-tooltip top color="secondary">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mx-4"
                  target="_blank"
                  v-on="on"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@antrumengineering.com&su=Contact_Antrum&body=Let_know_you"
                  icon
                  color="secondary"
                >
                  <v-icon size="24px">mdi-email</v-icon>
                </v-btn>
              </template>
              <span>info@antrumengineering.com</span>
            </v-tooltip>

            <v-btn
              class="mx-4"
              href="https://www.linkedin.com/company/antrum-engineering/"
              target="_blank"
              icon
              color="#0e76a8"
            >
              <v-icon size="24px">fab fa-linkedin</v-icon>
            </v-btn>

            <v-btn
              class="mx-4"
              target="_blank"
              icon
              color="#833AB4"
              href="https://www.instagram.com/antrum_engr/"
            >
              <v-icon size="24px">fab fa-instagram</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="pt-0 black--text">
            We are equipped to undertake high capacity works requiring heavy
            duty machines, cranes, warehousing and others via specialist service
            and equipment providers that we have relationship with. We also have
            relationship with support and administrative organizations including
            courier service, authorized spares and part dealers for generators
            CAT, SDMO and Perkins, electrical vendors, and generator rental
            which helps to entrench our qualitative and reliable service
            standpoint.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="black--text title-1">
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-icon color="primary" class="mb-3">mdi-map-marker</v-icon>
                <p class="black--text">
                  38, Oyewole Street, Palmgrove, Ilupeju, Lagos.
                </p>
                <p class="mb-1 grey--text text-lighten-3">
                  6B, Bendel Close, Victoria Island, Lagos.
                </p>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-icon color="primary" class="mb-3">mdi-phone</v-icon>
                <p class="black--text">
                  +234 815 303 8811.
                </p>
                <p class="mb-1 black--text">
                  +234 815 303 8800.
                </p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="secondary--text">
            {{ new Date().getFullYear() }} — <strong>AET</strong>
          </v-card-text>
        </v-card>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      // {
      //   icon: "fab fa-facebook",
      //   ,
      //   place:
      //     ""
      // },
      // {
      //   icon: "fab fa-twitter",
      //   color: "",
      //   place: ""
      // },
      // {
      //   icon: "fab fa-google-plus",
      //   color: ""
      // },
      // {
      //   icon: "",
      //   color: "",
      //   place: ""
      // },
      // {
      //   icon: "",
      //   color: "",
      //   place: ""
      // }
    ],
  }),
};
</script>

<style lang="scss"></style>
