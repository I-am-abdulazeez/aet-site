<template>
  <div class="contact-view">
    <header>
      <v-container>
        <div class="sec">
          <v-row align="center" justify="center" class="fill-height">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-medium mb-4 animated bounce">
                <span class="accent--text">Contact Us</span>
              </h1>
              <h4 class="subheading font-weight-medium">
                Let's hear from you...
              </h4>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </header>
    <v-container>
      <Contact />
    </v-container>
  </div>
</template>

<script>
import Contact from "../components/Contact";

export default {
  name: "contact",
  metaInfo() {
    return {
      title: "Contact | Antrum Engineering.com",
      meta: [
        {
          name: "Contact | Antrum Engineering.com"
        },
        {
          name: "keywords",
          content:
            "Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering power, contact AET"
        }
      ]
    };
  },
  components: {
    Contact
  }
};
</script>

<style lang="scss">
.contact-view {
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
    header {
      height: 30vh;
    }
  }
}
</style>