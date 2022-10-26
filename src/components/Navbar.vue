<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <ImageLogo altImage="Logo Navbar" sourceImage="logo.png" />
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <ul class="navbar-nav">
        <List title="Unit Types" />
        <List title="Facilities" />
        <List title="Location" />
        <List title="Developer" />
        <List withButton>
          <Button buttonType="button-primary" titleButton="Contact Us" />
        </List>
      </ul>
    </div>
  </nav>
</template>
<script>
import Button from "@/atoms/Button.vue";
import List from "@/atoms/List.vue";
import ImageLogo from "@/atoms/Image.vue";

export default {
  name: "Navbar-Component",
  components: {
    Button,
    List,
    ImageLogo,
  },
};
</script>
<style scoped>
.navbar {
  padding: 28px 72px;
}
</style>
