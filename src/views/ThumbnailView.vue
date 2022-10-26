<template>
  <div class="thumnail">
    <NavbarComponent />
    <div class="hero-thumbnail">
      <div class="row align-items-center">
        <div class="col-md-6 left-hero order-md-first order-sm-last order-last">
          <Typography />
          <div class="hero-button">
            <Button
              buttonType="button-primary"
              titleButton="Download Brochure"
            />
            <Button buttonType="button-secondary" titleButton="View Unit" />
          </div>
          <div class="hero-information">
            <InformationComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/Header.vue";
import InformationComponent from "@/components/Information.vue";

import Typography from "@/atoms/Typography.vue";
import Button from "@/atoms/Button.vue";

export default {
  name: "Thumbnail-View",
  components: {
    NavbarComponent,
    Typography,
    Button,
    InformationComponent,
  },
};
</script>

<style scoped>
.hero-thumbnail {
  background-image: url("../assets/house-background.png");
  background-size: 100% 100%;
  object-fit: cover;
  height: 100vh;
  background-repeat: no-repeat;
}

.hero-thumbnail {
  padding: 48px 72px 0 72px;
}

.hero-button {
  margin-top: 32px;
  display: flex;
  gap: 24px;
}
</style>
