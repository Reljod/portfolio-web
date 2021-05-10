<template>
  <div class="bg-gray-600 w-full">
    <section class="h-screen px-12 sm:px-24 flex items-center relative">
        <div class="grid grid-cols-12 gap-6 ">
            <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                <div class="w-full">
                    <h1 class="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">
                        Hello, I'm <span class="inline text-red-400">Reljod Oreta</span>.<br>
                    </h1>
                    <p class="text-4xl text-white font-semibold ">A Software Engineer with experience mostly in Backend Development.</p>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 py-6 px-6">
                <div class="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-white font-semibold">Explore</p>
                </div>
            </div>
            <div class="absolute bottom-0 py-6 px-6 right-0">
                <div class="flex space-x-6">
                    <i class="fa fa-dribbble text-white fa-lg"></i>
                    <i class="fa fa-twitter text-white fa-lg"></i>
                    <i class="fa fa-facebook text-white fa-lg"></i>
                    <i class="fa fa-instagram text-white fa-lg"></i>
                </div>

            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>