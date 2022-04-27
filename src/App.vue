<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <scrollTo />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
    <v-footer fixed padless color="white">
      <div class="mx-auto">
        <img src="@/assets/power.jpeg" class="brand pt-2" alt="AET" />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import scrollTo from "@/components/ScrollTo";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    scrollTo,
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

$body-font-family: "Quicksand", sans-serif;
$primaryColor: #fa7414;
$secondaryColor: #020740;

#app {
  font-family: $body-font-family !important;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;
}

#app .display-1,
#app .display-2,
#app .display-3,
#app .display-4,
#app .headline,
#app .title,
#app .subtitle-1,
#app .subtitle-2,
#app .body-1,
#app .body-2,
#app .caption,
#app .overline {
  font-family: $body-font-family !important;
}

.sec {
  animation: fadeIn 1s forwards;
}

.f-12 {
  font-size: 12px !important;
}

.f-10 {
  font-size: 10px !important;
}

#nprogress .bar {
  background: $primaryColor !important;
}

#nprogress .spinner-icon {
  border-top-color: $primaryColor !important;
  border-left-color: $primaryColor !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-3em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.black-bg {
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ) !important;
}

@media only screen and (max-width: 768px) {
  #app .display-1 {
    font-size: 1.7rem !important;
    padding: 0 1.3em;
  }
  #app .subheading {
    font-size: 12px;
  }
}
@media only screen and (max-width: 480px) {
  #app {
    .display-1 {
      font-size: 1.3rem !important;
      padding: 0 1.3em;
    }
  }

  #app .subheading {
    font-size: 12px;
  }
}

.divide {
  width: 3em;
  height: 0.2em;
  margin: 0 auto;
  background-color: rgba(255, 129, 40, 0.253);
}

.mt-5m {
  margin-top: 5.8em !important;
}

img.brand {
  width: 200px;
}

body::-webkit-scrollbar {
  width: 6px;
}

body::-webkit-scrollbar-thumb {
  background-color: $primaryColor;
  outline: 1px solid slategrey;
}
</style>
