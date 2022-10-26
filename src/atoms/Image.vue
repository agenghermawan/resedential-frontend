<template>
  <img
    :src="require(`../assets/${sourceImage}`)"
    :alt="altImage"
    :class="classImage"
  />
</template>
<script>
export default {
  name: "Image-Atom",
  props: {
    sourceImage: {
      type: String,
    },
    altImage: {
      type: String,
    },
    classImage: {
      type: String,
    },
  },
};
</script>
<style scoped></style>
