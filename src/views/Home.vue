<template>
  <div class="container mx-auto bg-gray-800">
    <Introduction />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Introduction,
  },
};
</script>
