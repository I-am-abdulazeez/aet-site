<template>
  <nav>
    <v-app-bar
      height="70"
      app
      light
      fixed
      dense
      color="white"
      elevate-on-scroll
    >
      <v-container class="d-flex pa-0 align-center">
        <v-app-bar-nav-icon
          class="hidden-md-and-up grey--text text--darken-2"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <a href="/" class="align-items">
            <img src="@/assets/logo.png" class="pt-2 brand" alt="AET" />
          </a>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          class="mr-2 hidden-sm-and-down grey--text text--darken-1"
          text
          v-for="link of links"
          :key="link.id"
          router
          :to="link.path"
          color="white"
          active-class="sec-text"
        >
          {{ link.text }}
        </v-btn>

        <!--Hide in large screen and up-->
      </v-container>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="white">
      <v-list>
        <v-list-item
          v-for="link of links"
          :key="link.id"
          router
          :to="link.path"
          active-class="primary--text"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium f-12 primary-text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    links: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "About",
        path: "/about",
      },
      {
        text: "Products & Services",
        path: "/product",
      },
      {
        text: "Industry",
        path: "/industry",
      },
      {
        text: "Career",
        path: "/career",
      },
      {
        text: "Gallery",
        path: "/gallery",
      },

      {
        text: "Contact",
        path: "/contact",
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss">
$primaryColor: #fa7414;

.sec-text {
  color: $primaryColor;
}

.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  color: $primaryColor;
}

.v-btn {
  text-transform: none !important;
}

.pl-1 {
  text-decoration: none;
}

nav {
  img.brand {
    width: 230px;
  }
}

.ml-20 {
  margin-left: 5em;
}

@media only screen and (max-width: 480px) {
  nav {
    img.brand {
      width: 170px;
    }
  }
}
</style>
