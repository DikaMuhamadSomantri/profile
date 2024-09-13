<template>
  <div>
    <!-- Hero Section -->

    <!-- Gallery Section -->
    <section class="bg-white dark:bg-dark">
      <div class="text-center px-4 py-20">
        <h1
          class="text-4xl font-extrabold text-gray-900 md:text-6xl bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text"
        >
          Portofolio
        </h1>
      </div>
      <div class="w-full h-full select-none">
        <div class="max-w-6xl mx-auto opacity-100 ease animate-fade-in-view">
          <ul class="grid grid-cols-2 gap-5 lg:grid-cols-5">
            <li v-for="(image, index) in images" :key="index">
              <img
                @click="openImageGallery(index)"
                :src="image.src"
                class="gallery-image cursor-zoom-in transition-transform duration-300 hover:scale-105"
                :alt="'Gallery image ' + (index + 1)"
              />
            </li>
          </ul>
        </div>

        <!-- Image Modal -->
        <template v-if="imageGalleryOpened">
          <div
            class="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 cursor-zoom-out"
            @click="closeImageGallery"
          >
            <div class="relative w-full h-full max-w-3xl max-h-[90%]">
              <img
                class="object-contain w-full h-full"
                :src="imageGalleryActiveUrl"
                alt=""
              />
              <button
                @click.stop="prevImage"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                @click.stop="nextImage"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
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
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Portfolio",
  setup() {
    const imageGalleryOpened = ref(false);
    const imageGalleryActiveUrl = ref<string>(""); // Mengganti null dengan string kosong
    const imageGalleryImageIndex = ref(0);

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
    ]);

    const openImageGallery = (index: number) => {
      imageGalleryImageIndex.value = index;
      imageGalleryActiveUrl.value = images.value[index].src;
      imageGalleryOpened.value = true;
    };

    const closeImageGallery = () => {
      imageGalleryOpened.value = false;
      // Hapus URL gambar setelah animasi selesai
      setTimeout(() => (imageGalleryActiveUrl.value = ""), 300);
    };

    const nextImage = () => {
      imageGalleryImageIndex.value =
        (imageGalleryImageIndex.value + 1) % images.value.length;
      imageGalleryActiveUrl.value =
        images.value[imageGalleryImageIndex.value].src;
    };

    const prevImage = () => {
      imageGalleryImageIndex.value =
        (imageGalleryImageIndex.value - 1 + images.value.length) %
        images.value.length;
      imageGalleryActiveUrl.value =
        images.value[imageGalleryImageIndex.value].src;
    };

    return {
      imageGalleryOpened,
      imageGalleryActiveUrl,
      imageGalleryImageIndex,
      images,
      openImageGallery,
      closeImageGallery,
      nextImage,
      prevImage,
    };
  },
});
</script>

<style scoped>
/* Style untuk gambar di galeri */
.gallery-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Efek hover */
.gallery-image:hover {
  transform: scale(1.05);
}

/* Modal style */
.modal img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}
</style>
