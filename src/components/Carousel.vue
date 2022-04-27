<template>
  <div class="carousel">
    <v-carousel
      cycle
      :interval="interval"
      class="h-5"
      height="800"
      hide-delimiter-background
      :vertical="vertical"
      vertical-delimiters
      show-arrows-on-hover
      progress
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-sheet class="h-5 black-bg">
          <v-row class="fill-height" align="center" justify="center">
            <div class="sec text-center pa-3">
              <v-container>
                <h1
                  class="display-1 font-weight-thin mb-4 animated bounceInDown delay-1s"
                >
                  {{ item.title | toTitleCase }}
                </h1>
                <h4
                  class="subheading font-weight-medium animated slideInDown delay-1s"
                >
                  {{ item.subtitle }}
                </h4>
              </v-container>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselCom",
  data: () => ({
    items: [
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/carousel%2Fbg-1.jpg?alt=media&token=54c5e28a-af29-4ad5-a726-13a9e253bfcc",
        title: "DELIVERING PROFICIENT TECHNICAL / AUTOMATED POWER SOLUTIONS ",
        subtitle: `We offer various forms of Power engineering services that encompass Power project development, Implementation, Standardization and Commissioning.
Our scope covers Grid, off grid, Island and Independent Power involving Planning, Installation, Testing and Commissioning. 
`
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/carousel%2Fbg-3.jpg?alt=media&token=2bb7d2c9-f5ae-40b2-a13b-c42d6c255a9f",
        title: "REAL TIME DATA ORIENTED AND EFFICIENT POWER MANAGEMENT ",
        subtitle:
          "24/7 on-site operation and maintenance support with backend remote assistance banking on real time data for instant technical advice that help to ensure immediate resolution of escalation for dependable power."
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/carousel%2Fbg-2.jpg?alt=media&token=bf865a48-081d-48f3-b739-3ff76fa1efce",
        title:
          "INNOVATIVE RECOMMENDATION AND COST EFFECTIVE CLIENT- CENTRIC APPROACH ",
        subtitle:
          "AET has over a decade years of experience in PIM (power infrastructure management); Rural, Industrial and Residential electrification; High, Medium and Low Voltage Projects; Solar- Inverter Alternative Power; and Accustomed Technical Know-how on wide range of generators SDMO, CAT, Perkins and others, medium and large sizes."
      },
      {
        src:
          "https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/carousel%2Fbg-4-1.jpg?alt=media&token=5a447178-ded6-4625-a318-4731b8a40572",
        title: "REQUIREMENT BASED CONSTRUCTION PROJECTS",
        subtitle:
          "We have proven experience of designing and constructing need specific solution for Electrical panels; Automation; Clear fuel supply Lines and Backup storages; HT and LT circuits, Street lighting and others."
      }
    ],
    interval: 5000,
    vertical: true
  }),
  filters: {
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
};
</script>

<style lang="scss">
.v-btn--icon.v-size--small .v-icon {
  font-size: 10px !important;
}

.mdi-circle {
  font-size: 10px;
}

.h-5 {
  height: 700px !important;
}

@media only screen and (max-width: 768px) {
  .h-5 {
    height: 300px !important;
  }
}
@media only screen and (max-width: 480px) {
}
</style>