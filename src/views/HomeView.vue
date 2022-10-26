<template>
  <div class="home">
    <NavbarComponent />
    <HeroComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/Header.vue";
import HeroComponent from "@/components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent,
  },
};
</script>
