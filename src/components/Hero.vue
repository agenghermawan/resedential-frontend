<template>
  <div class="hero">
    <div class="row align-items-center">
      <div class="col-md-6 left-hero order-md-first order-sm-last order-last">
        <Typography />
        <div class="hero-button">
          <Button buttonType="button-primary" titleButton="Download Brochure" />
          <Button buttonType="button-secondary" titleButton="View Unit" />
        </div>
      </div>
      <div class="col-md-6 order-md-last order-sm-first order-first right-hero">
        <ImageHero
          sourceImage="house-with-background.png"
          altImage="Hero Background"
          classImage="hero-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/atoms/Button.vue";
import ImageHero from "@/atoms/Image.vue";
import Typography from "@/atoms/Typography.vue";

export default {
  name: "Hero-Component",
  components: {
    Button,
    ImageHero,
    Typography,
  },
};
</script>
<style scoped>
.hero {
  padding: 48px 72px 0 72px;
}

.hero-button {
  margin-top: 32px;
  display: flex;
  gap: 24px;
}
.right-hero img {
  border-radius: 300px 300px 48px 48px;
  background-color: #6f4a9e;
  max-width: 100%;
  height: auto;
}

@media screen and (min-width: 992px) {
  .left-hero {
    width: 40% !important;
  }
  .right-hero {
    width: 60% !important;
  }
}

@media screen and (min-width: 1400px) {
  .hero-image {
    width: 100%;
    height: auto;
  }
}
</style>
