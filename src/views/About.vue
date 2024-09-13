<template>
  <section class="bg-white dark:bg-dark">
    <div id="about" class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white dark:bg-dark sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-dark transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div class="pt-1"></div>
          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl"
              >
                Tentang Saya
              </h2>

              <p
                class="max-w-xl text-base font-medium text-secondary lg:text-lg"
              >
                Kami menawarkan layanan video editing yang menghasilkan video
                berkualitas tinggi dengan kreativitas dan detail yang luar
                biasa, cocok untuk promosi bisnis, media sosial, dan film
                pendek. Layanan desain 2D kami mencakup pembuatan grafis
                menarik, dari ilustrasi digital hingga desain logo dan branding,
                yang mencerminkan identitas klien. Kami juga menyediakan solusi
                programming inovatif untuk pengembangan perangkat lunak dan
                aplikasi web, dengan fokus pada kode berkualitas dan teknologi
                terbaru. Karya komik kami menawarkan cerita visual yang
                menghibur dengan ilustrasi dan narasi yang menarik, untuk
                pengalaman membaca yang unik.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
        <img
          class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
          src="/images/Hiu-project.png"
          alt=""
        />
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
