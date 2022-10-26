<template>
  <li class="nav-item">
    <div v-if="withButton">
      <slot></slot>
    </div>
    <div v-else>
      <a href="#" class="nav-link"> {{ title }} </a>
    </div>
  </li>
</template>
<script>
export default {
  name: "List-Atom",
  props: {
    title: String,
    withButton: Boolean,
  },
};
</script>
<style scoped>
.nav-item {
  margin-right: 32px;
  display: flex;
  align-items: center;
}
.nav-item a {
  text-align: center;
  color: #161932;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
</style>
