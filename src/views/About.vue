<template>
  <section id="tentang-saya">
    <div class="py-5 bg-white dark:bg-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Row 1 -->
        <div
          class="flex flex-col-reverse lg:grid lg:grid-cols-2 xl:gap-16 items-center"
        >
          <div class="text-gray-500 sm:text-lg dark:text-gray-400 lg:pr-8">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Tentang Saya
            </h2>
            <p class="max-w-xl text-base font-medium text-secondary lg:text-lg">
              Kami menawarkan layanan video editing yang menghasilkan video
              berkualitas tinggi dengan kreativitas dan detail yang luar biasa,
              cocok untuk promosi bisnis, media sosial, dan film pendek. Layanan
              desain 2D kami mencakup pembuatan grafis menarik, dari ilustrasi
              digital hingga desain logo dan branding, yang mencerminkan
              identitas klien. Kami juga menyediakan solusi programming inovatif
              untuk pengembangan perangkat lunak dan aplikasi web, dengan fokus
              pada kode berkualitas dan teknologi terbaru. Karya komik kami
              menawarkan cerita visual yang menghibur dengan ilustrasi dan
              narasi yang menarik, untuk pengalaman membaca yang unik.
            </p>
          </div>
          <div class="relative overflow-hidden">
            <img
              class="w-full rounded-lg mb-4 lg:mb-0 mask mask-parallelogram-3 transition-transform duration-300 ease-in-out transform hover:scale-110"
              src="/images/Hiu-project.png"
              alt="dashboard feature image"
            />
          </div>
        </div>

        <!-- Row 2 -->
        <div
          class="flex flex-col lg:grid lg:grid-cols-2 xl:gap-16 items-center py-10"
        >
          <div class="relative overflow-hidden">
            <img
              class="w-full rounded-lg mb-4 lg:mb-0 mask mask-parallelogram-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
              src="/images/arlec-project.png"
              alt="feature image 2"
            />
          </div>
          <div class="text-gray-500 sm:text-lg dark:text-gray-400 lg:pl-8">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Harga
            </h2>
            <p class="max-w-xl text-base font-medium text-secondary lg:text-lg">
              Berikut adalah harga untuk jasa pembuatan 2d Karakter.
            </p>
            <!-- List -->
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Kepala - Rp.50.000 s/d Rp.125.000</span
                >
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Kepala dan badan - Rp.50.000 s/d Rp.125.000</span
                >
              </li>
              <li class="flex space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                  >Full Body - Rp.100.000 s/d Rp.250.000</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>
