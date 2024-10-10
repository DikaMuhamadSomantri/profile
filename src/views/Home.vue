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
            2D | Programming | Editing Video
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
          <h2 class="text-3xl font-bold text-dark dark:text-white lg:text-4xl">
            Kami Membuat Dan Menghasilkan Karya Asli Dengan Menekankan Konten
            Berkualitas Tinggi
          </h2>

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

  <!-- About Section End -->
  <section id="about"><About /></section>
  <!-- End   About -->

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
  <!-- Logo WhatsApp di pojok kanan bawah -->
  <section>
    <a
      href="https://wa.me/6289646431803"
      class="fixed bottom-4 right-4 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"
        />
      </svg>
    </a>
  </section>
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
