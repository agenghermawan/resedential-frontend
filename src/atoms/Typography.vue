<template>
  <div>
    <h1 class="hero-title-primary" style="font-weight: 800">
      Find your <br />
      <span class="special-text"> dream </span> house
    </h1>
    <p class="hero-title-secondary">
      Aven Residence provides several houses with <br />
      strategic locations and affordable prices.
    </p>
  </div>
</template>
<script>
export default {
  name: "Typography-Item",
  props: ["primary", "secondary"],
};
</script>
<style scoped>
.hero-title-primary {
  font-style: normal;
  font-weight: ExtraBold;
  font-size: 72px;
  line-height: 84px;
  color: #161932;
}

.special-text {
  background: linear-gradient(90deg, #e81894 0%, #ff8a11 43.33%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title-secondary {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: rgba(22, 25, 50, 0.6);
}

@media only screen and (max-width: 992px) {
  .hero-title-primary {
    margin-top: 20px;
    font-weight: 800;
    line-height: 34px;
    font-size: 32px;
  }

  .hero-title-secondary {
    font-size: 16px;
    line-height: 24px;
    color: rgba(22, 25, 50, 0.6);
  }
}
</style>
