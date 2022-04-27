<template>
  <div class="career">
    <header>
      <v-container>
        <div class="sec">
          <v-row align="center" justify="center" class="fill-height">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-medium mb-4 animated bounce">
                <span class="accent--text">Career</span>
              </h1>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </header>
    <v-sheet color="secondary" class="mb-4">
      <v-container>
        <div class="pa-5">
          <h3 class="headline white--text">
            You are a professional, a graduate, a student? Or still at school?
          </h3>
          <h5 class="subtitle-2 white--text font-weight-thin mt-3">
            We offer interesting opportunities for all career stages.
          </h5>
          <div class="text-center">
            <v-btn
              color="primary"
              text
              target="_blank"
              :href="link"
              large
              class="mt-4 animated tada"
              prepend-icon=""
            >
              <v-icon left>mdi-map-marker</v-icon> Get in Touch</v-btn
            >
          </div>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Career",
  data: () => ({
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=antrumengineering@gmail.com&su=Contact_Antrum&body=Let_know_you"
  }),
  metaInfo() {
    return {
      title: "Career | Antrum Engineering.com",
      meta: [
        {
          name: "Career | Antrum Engineering.com"
        },
        {
          name: "keywords",
          content:
            "Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering, Career AET"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.career {
  header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsec-images%2FAET.jpg?alt=media&token=2f548b7d-b793-45f6-a280-145fa908fb9f")
        center center;
    color: #fff;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 480px) {
    .image {
      width: 100%;
      margin: 0;
      padding: 1em;
    }
    header {
      height: 30vh;
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 100%;
      margin: 0;
      padding: 1em;
    }
  }
}
</style>