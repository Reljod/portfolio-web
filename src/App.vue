<template>
  <div class="bg-gray-800 text-gray-200">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
