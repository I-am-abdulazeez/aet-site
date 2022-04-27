<template>
  <div class="scroll-to">
    <transition name="scale-transition">
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        small
        bottom
        text
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </transition>
  </div>
</template>

<script>
export default {
  name: "scrollTo",
  data: () => ({
    fab: false
  }),
  methods: {
    onScroll(s) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || s.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped>
</style>