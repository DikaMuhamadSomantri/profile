<template>
  <!-- Gallery Section -->
  <section class="bg-primary dark:bg-dark">
    <div class="text-center px-4 py-5">
      <h2
        class="text-3xl font-bold text-dark dark:text-white lg:text-4xl text-center py-5"
      >
        Portofolio
      </h2>
    </div>

    <div class="w-full h-full select-none">
      <div class="container mx-auto px-4">
        <!-- Galeri -->
        <ul
          class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 py-5 sm:py-5 lg:py-10"
        >
          <li v-for="(image, index) in images" :key="index">
            <img
              @click="currentIndex = index"
              :src="image.src"
              class="w-full h-auto max-w-[250px] max-h-[250px] object-cover mx-auto cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg"
              :alt="'Gallery image ' + (index + 1)"
            />
          </li>
        </ul>
      </div>
    </div>

    <!-- Image Modal -->
    <div
      v-if="currentIndex !== null"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      @click="currentIndex = null"
    >
      <div class="relative w-full h-full max-w-3xl max-h-[90%]">
        <img
          class="object-contain w-full h-full"
          :src="images[currentIndex].src"
          alt="Gallery Image"
        />

        <!-- Tombol Close -->
        <button
          @click.stop="currentIndex = null"
          class="absolute top-4 right-4 bg-white/30 text-white p-2 rounded-full"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Tombol Navigasi Kiri -->
        <button
          v-if="currentIndex !== null"
          @click.stop="prevImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <!-- Tombol Navigasi Kanan -->
        <button
          v-if="currentIndex !== null"
          @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Our Project WEB -->
  <section id="wkwk" class="bg-primary dark:bg-dark">
    <div class="text-center px-4 py-5">
      <h2
        class="text-3xl font-bold text-dark dark:text-white lg:text-4xl text-center py-5"
      >
        Portofolio Web
      </h2>
    </div>
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="card card-compact bg-base-100 w-full shadow-xl">
          <figure>
            <img
              src="/images/web-porto.png"
              alt="Shoes"
              class="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Web Portofolio</h2>
            <p>Component - vite-vue + tailwwind</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card card-compact bg-base-100 w-full shadow-xl">
          <figure>
            <img
              src="/images/web-porto.png"
              alt="Shoes"
              class="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Web Portofolio</h2>
            <p>Component - vite-vue + tailwwind</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card card-compact bg-base-100 w-full shadow-xl">
          <figure>
            <img
              src="/images/web-porto.png"
              alt="Shoes"
              class="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Web Portofolio</h2>
            <p>Component - vite-vue + tailwwind</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Project WEB-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const currentIndex = ref<number | null>(null);

    const images = ref([
      { src: "/images/telepon-project.png" },
      { src: "/images/Hiu-project.png" },
      { src: "/images/arlec-project.png" },
      { src: "/images/asa-project.png" },
      { src: "/images/cerdas-project.png" },
      { src: "/images/kobo-project.png" },
      { src: "/images/lebaran-project.png" },
      { src: "/images/logo-hero-section.png" },
      { src: "/images/about-me.png" },
      { src: "/images/arlec-project.png" },
    ]);

    const nextImage = () => {
      if (currentIndex.value !== null) {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
      }
    };

    const prevImage = () => {
      if (currentIndex.value !== null) {
        currentIndex.value =
          (currentIndex.value - 1 + images.value.length) % images.value.length;
      }
    };

    return {
      currentIndex,
      images,
      nextImage,
      prevImage,
    };
  },
});
</script>
