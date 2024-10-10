<template>
  <!-- Hero Section Start -->
  <section id="hero" class="pt-20 sm:pt-10">
    <div
      class="relative bg-gradient-to-background from-white via-transparent to-primary"
    >
      <div
        class="container mx-auto flex flex-wrap items-center justify-center min-h-[50vh] sm:min-h-screen h-full"
      >
        <div
          class="w-full flex flex-col items-center lg:w-1/2 px-4 animate-fade-in-up mt-24 sm:mt-0"
        >
          <h1
            class="font-semibold text-3xl sm:text-4xl mb-4 text-center text-dark dark:text-white animate-fade-in-up"
          >
            AYO, buat seni visual dan teknologi untuk menciptakan karya unik dan
            inovatif Bersama
            <span
              class="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-500 text-transparent bg-clip-text"
            >
              Rujak Asam
            </span>
          </h1>

          <h2
            class="font-medium text-slate-500 text-base sm:text-lg mb-5 text-center animate-fade-in-up"
          >
            Konten Kreator | 2D Artist | Programming
          </h2>
          <a
            href="#contact"
            class="text-base font-semibold text-white bg-primary py-3 px-8 hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out animate-fade-in-up"
          >
            Hubungi Saya
          </a>
        </div>
        <div
          class="w-full flex justify-center lg:w-1/2 px-4 mt-10 lg:mt-0 relative animate-fade-in-up"
        >
          <img
            src="/images/kuasa-project.png"
            alt="Hero"
            class="max-w-full max-h-full sm:mt-[-8vh] mt-[-4vh] lg:relative lg:bottom-auto lg:right-auto lg:mt-10 lg:w-auto lg:h-auto object-cover animate-fade-in-up"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Hero Section End -->

  <!-- Fitur -->
  <section id="fitur">
    <div class="py-12 bg-white dark:bg-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Kami Membuat Dan Menghasilkan Karya Asli Dengan Menekankan Konten
            Berkualitas Tinggi
          </p>
          <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">🖐</p>
        </div>

        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
                >
                  <img src="https://www.svgrepo.com/show/530392/picture.svg" />
                </div>
                <p
                  class="font-heading ml-16 text-lg leading-6 font-bold text-primary"
                >
                  Video Editing
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Kami menawarkan layanan video editing profesional yang
                menghasilkan video berkualitas tinggi dengan kreativitas dan
                detail yang luar biasa. Tim kami ahli dalam mengedit video untuk
                berbagai keperluan, termasuk promosi bisnis, konten media
                sosial, dan film pendek.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
                >
                  <img src="https://www.svgrepo.com/show/530384/food.svg" />
                </div>
                <p
                  class="font-heading ml-16 text-lg leading-6 font-bold text-primary"
                >
                  Design-2D
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Layanan desain 2D kami mencakup pembuatan grafis yang menarik
                dan estetis untuk berbagai kebutuhan. Dari ilustrasi digital
                hingga desain logo dan branding, kami memastikan setiap desain
                mencerminkan identitas dan nilai-nilai klien kami.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
                >
                  <img
                    src="https://www.svgrepo.com/show/530379/pencil-revision.svg"
                  />
                </div>
                <p
                  class="font-heading ml-16 text-lg leading-6 font-bold text-primary"
                >
                  Programming
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Kami menyediakan solusi pemrograman yang inovatif dan efisien,
                mencakup pengembangan perangkat lunak dan aplikasi web. Tim
                pengembang kami berkomitmen untuk menciptakan kode berkualitas
                tinggi yang memenuhi kebutuhan bisnis Anda dengan teknologi
                terbaru.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white"
                >
                  <img
                    src="https://www.svgrepo.com/show/530379/pencil-revision.svg"
                  />
                </div>
                <p
                  class="font-heading ml-16 text-lg leading-6 font-bold text-primary"
                >
                  Komik
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Karya komik kami menawarkan cerita visual yang menghibur dan
                mendalam, dirancang untuk menarik berbagai audiens. Kami
                berfokus pada penciptaan komik dengan ilustrasi yang menawan dan
                narasi yang menarik, menciptakan pengalaman membaca yang unik.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
  <!-- Fitur End-->

  <!-- Start tentang saya -->
  <!-- About Section End -->
  <section id="about"><About /></section>
  <!-- End   About -->

  <!-- Star -->
  <section class="bg-white dark:bg-dark overflow-hidden">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 xl:gap-24 max-w-7xl px-6 md:px-9 py-8 mx-auto lg:py-10"
    >
      <!-- Kolom 1 -->
      <div class="mb-8 lg:mb-0">
        <h4 class="mb-3 text-lg font-bold uppercase text-primary">
          Tentang Saya
        </h4>
        <h2
          class="mt-3 mb-4 text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Yuk, Tunggu apa lagi
        </h2>
        <p
          class="max-w-xl text-base font-medium text-secondary lg:text-lg dark:text-secondary"
        >
          Jangan lewatkan kesempatan untuk memanfaatkan layanan kami yang
          berkualitas tinggi! Kami menawarkan solusi kreatif dan teknis yang
          dirancang untuk memenuhi berbagai kebutuhan Anda dengan hasil yang
          memuaskan dan profesional.
        </p>
      </div>

      <!-- Kolom 2 -->
      <div class="max-w-md px-0 md:px-4 mx-auto lg:ml-auto lg:pl-16">
        <div class="stats shadow bg-white dark:bg-dark">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title text-gray-900 dark:text-white">
              Total Pengikut
            </div>
            <div class="stat-value text-primary">41.2K</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title text-gray-900 dark:text-white">
              Page Views
            </div>
            <div class="stat-value text-secondary">1M++</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- End -->

  <!-- Our Project -->
  <section id="portofolio"><Portofolio /></section>
  <!-- Our Project End-->

  <!-- Client Section -->
  <section id="client-section" class="pt-10 dark:bg-dark">
    <div class="container">
      <h2
        class="text-3xl font-bold text-dark dark:text-white lg:text-4xl text-center py-12"
      >
        Our Clients
      </h2>
      <!-- Scrolling Container -->
      <div id="scroll-container" class="flex animate-scroll">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="p-4 grayscale transition duration-200 hover:grayscale-0 flex-shrink-0"
        >
          <img
            :src="client.logo"
            class="h-12 w-auto mx-auto"
            loading="lazy"
            alt="client logo"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Client Section End -->
  <section id="contact"><Contact /></section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Portofolio from "./Portofolio.vue";
import Contact from "./Contact.vue";
import About from "./About.vue";

interface Client {
  logo: string;
}

const clients: Client[] = [
  { logo: "/images/netfix.png" },
  { logo: "/images/netfix.png" },
  { logo: "/images/netfix.png" },
  { logo: "/images/netfix.png" },
  { logo: "/images/netfix.png" },
  { logo: "/images/netfix.png" },
];

onMounted(() => {
  const container = document.getElementById("scroll-container");
  if (container) {
    const cardElements = Array.from(container.children) as HTMLElement[];

    // Duplicate elements to create loop effect
    cardElements.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      container.appendChild(clone);
    });
  }
});
</script>

<style scoped>
/* Mode Dark */
.dark #hero {
  background-color: #0f172a;
}
/* End Dark */

/* Libear  Hero*/
/* Gradient untuk layar besar (desktop) */
.bg-gradient-to-background {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 5%,
    rgba(228, 228, 228, 0) 45%,
    #f43f5e 100%
  );
}

/* Gradient untuk layar kecil (mobile) */
@media (max-width: 640px) {
  /* Ganti dengan breakpoint mobile yang sesuai */
  .bg-gradient-to-background {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 5%,
      rgba(228, 228, 228, 0) 45%,
      #f43f5e 100%
    );
  }
}

/* Pastikan animasi slideshow */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

#client-section {
  overflow: hidden; /* Pastikan scroll bar tidak muncul */
}
.animate-scroll {
  display: flex;
  animation: scroll 20s linear infinite;
}
</style>
