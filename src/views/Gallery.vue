<template>
  <div class="gallery">
    <header>
      <v-container>
        <div class="sec">
          <v-row align="center" justify="center" class="fill-height">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-medium mb-4 animated bounce">
                <span class="accent--text">Gallery</span>
              </h1>
              <h4 class="subheading font-weight-medium">
                Our work speaks more about us...
              </h4>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </header>
    <Showcase />
  </div>
</template>

<script>
import Showcase from "@/components/Showcase.vue";

export default {
  name: "Gallery",
  components: {
    Showcase
  },
  metaInfo() {
    return {
      title: "Gallery | Antrum Engineering.com",
      meta: [
        {
          name: "Gallery | Antrum Engineering.com"
        },
        {
          name: "keywords",
          content:
            "Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering, Gallery AET"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.gallery {
  header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fphotography-of-electric-tower-during-sunset-923953.jpg?alt=media&token=136a2b96-be3d-4eb0-8d87-a84642234eec")
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
    header {
      height: 30vh;
    }
  }
}
</style>