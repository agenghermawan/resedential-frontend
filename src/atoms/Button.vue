<template>
  <button :class="buttonType">{{ titleButton }}</button>
</template>
<script>
export default {
  name: "Button-Item",
  props: ["buttonType", "titleButton"],
};
</script>
<style scoped>
.button-primary {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background: #6f4a9e;
  border-radius: 10px;
  padding: 16px 32px;
  color: white;
  border: none;
}

.button-secondary {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  color: #6f4a9e;
  background-color: white;
}
</style>
