<template>
  <div class="error404">
    <div class="text-center my-7">
      <p>
        <img src="@/assets/sad.svg" style="width:30vw;max-width:180px;" />
      </p>
      <p class="grey--text subtitle-1 text--ligthen-3">
        Sorry, nothing here...<strong>(404)</strong>
      </p>
      <v-btn color="primary" style="width:200px; mb-5" to="/"
        >Go back Home</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Error-404",
  metaInfo() {
    return {
      title: "Error 404 | Antrumengineering.com"
    };
  }
};
</script>

<style lang="scss" scoped>
.error404 {
  position: absolute;
  padding: 2em 0 2em 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>