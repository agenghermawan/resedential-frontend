<template>
  <div class="information">
    <ImageAtom altImage="User 1" sourceImage="user-1.png" classImage="list" />
    <ImageAtom altImage="User 1" sourceImage="user-2.png" classImage="list" />
    <ImageAtom altImage="User 1" sourceImage="user-3.png" classImage="list" />
    <ImageAtom altImage="User 1" sourceImage="user-4.png" classImage="list" />
    <p class="text-information">100+ people have ordered units</p>
  </div>
</template>
<script>
import ImageAtom from "@/atoms/Image.vue";

export default {
  name: "Information-Component",
  components: {
    ImageAtom,
  },
};
</script>
<style scoped>
.information {
  display: flex;
  margin-top: 32px;
}
.information .list {
  text-align: center;
  text-decoration: none;
  margin: 0px -7px;
}

@media screen and (max-width: 450px) {
  .information .list {
    width: 40px;
    height: 40px;
  }
}
.text-information {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  justify-content: center;
  align-self: center;
  align-items: center;
  display: flex;
  margin-left: 12px;
  margin-top: 12px;
  color: #161932;
}
</style>
