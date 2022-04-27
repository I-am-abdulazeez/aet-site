<template>
  <div class="values mt-4">
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" lg="4" md="4" sm="12" justify-center>
        <div class="my-10">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Freli.svg?alt=media&token=a1c58b7b-bb3f-4b7b-adec-2e83dabe39b7"
            lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Frel-1.png?alt=media&token=fe251587-de77-41e0-b837-6ae17835ab8f"
            class="text-center mb-9 mx-auto animated pulse infinite"
            width="100"
          ></v-img>

          <h3 class="font-weight-medium grey--text text--darken-3">
            Reliability
          </h3>
        </div>
        <v-card class="text-center pa-4 primary white--text" :hover="hoverCard">
          <ICountUp
            class="display-3 font-weight-thin"
            :delay="delay"
            :endVal="endVal1"
            :options="options"
          />
          <h3 class="mt-3 headline">Year of Operation</h3>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" md="4" sm="12">
        <div class="my-10">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Finte.svg?alt=media&token=8860e7d2-24e0-4ba1-ad25-8e392bd1b194"
            lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Fint.png?alt=media&token=cb5a4fa2-3fae-4eae-9c80-68d3ac0e588f"
            class="mb-9 text-center mx-auto animated pulse infinite"
            width="100"
          ></v-img>
          <h3 class="font-weight-medium grey--text text--darken-3">
            Integrity
          </h3>
        </div>
        <v-card class="text-center pa-4 primary white--text" :hover="hoverCard">
          <ICountUp
            class="display-3 font-weight-thin"
            :delay="delay"
            :endVal="endVal2"
            :options="options"
          />
          <sup class="subtitle-1">+</sup>
          <h3 class="mt-3 headline">Project Major Industry</h3>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" md="4" sm="12">
        <div class="my-10">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Fprof.svg?alt=media&token=6eb1df2a-e861-496e-a577-a6833066e7af"
            lazy-src="https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fvalues%2Fprof.png?alt=media&token=1dd6d6ca-26da-4459-8921-4ccf9b6f7be6"
            class="mx-auto mb-9 text-center animated pulse infinite"
            width="100"
          ></v-img>
          <h3 class="font-weight-medium grey--text text--darken-3">
            Professionalism
          </h3>
        </div>
        <v-card class="text-center pa-4 primary white--text" :hover="hoverCard">
          <ICountUp
            class="display-3 font-weight-thin"
            :delay="delay"
            :endVal="endVal3"
            :options="options"
          />
          <sup class="subtitle-1">%</sup>
          <h3 class="mt-3 headline">Operation Improvement</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  name: "Values",
  components: {
    ICountUp
  },
  data: () => ({
    hoverCard: true,
    delay: 2000,
    endVal1: 15,
    endVal2: 100,
    endVal3: 80,
    options: {
      useEasing: true,
      duration: 5,
      useGrouping: true,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: ""
    }
  }),
  methods: {}
};
</script>

<style lang="scss">
.v-card--hover:hover {
  cursor: auto;
}
</style>