<template>
    <div class="flex flex-row items-center">
        <div class="flex grow">
            <router-link :to="{ 'name' : 'Home'}" class="inline-block">
                <img src="../assets/roreta-icon.png" class="w-20">
            </router-link>
        </div>
        <div class="flex flex-row-reversed grow px-4
            text-gray-300 text-2xl sm:text-2xl lg:text-2xl xl:text-3xl">
            <router-link :to="{ 'name' : 'Home' }" class="inline-block mx-4">Home</router-link>
            <p>|</p>
            <router-link :to="{ 'name' : 'About' }" class="inline-block mx-4">About</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>