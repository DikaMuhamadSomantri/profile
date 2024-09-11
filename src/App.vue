<template>
  <!-- Header Start -->
  <header
    class="fixed top-0 left-0 z-10 w-full bg-white dark:bg-gray-900 shadow-md"
  >
    <div class="container mx-auto flex items-center justify-between p-4">
      <a href="#home" class="text-lg font-bold text-primary dark:text-white"
        >Rujak Asam</a
      >
      <div class="flex items-center space-x-4">
        <button
          id="hamburger"
          type="button"
          class="lg:hidden p-2 text-gray-500 dark:text-white hover:text-primary focus:outline-none"
          @click="toggleMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          id="nav-menu"
          :class="{
            block: isMenuOpen,
            hidden: !isMenuOpen,
            'lg:flex': true,
            absolute: true,
            'top-full': true,
            'right-0': true,
            'w-full': true,
            'max-w-xs': true,
            'bg-white': !isDarkMode,
            'dark:bg-gray-800': isDarkMode,
            'shadow-lg': !isDarkMode,
            'dark:shadow-gray-600': isDarkMode,
            'lg:static': true,
            'lg:max-w-full': true,
            'lg:bg-transparent': true,
            'lg:shadow-none': true,
          }"
          class="lg:flex lg:items-center lg:space-x-4"
        >
          <ul class="flex flex-col lg:flex-row">
            <li class="group">
              <a
                href="#home"
                class="block py-2 px-4 text-base text-dark dark:text-white hover:text-primary"
                >Beranda</a
              >
            </li>
            <li class="group">
              <a
                href="#about"
                class="block py-2 px-4 text-base text-dark dark:text-white hover:text-primary"
                >Tentang Saya</a
              >
            </li>
            <li class="group">
              <a
                href="#portfolio"
                class="block py-2 px-4 text-base text-dark dark:text-white hover:text-primary"
                >Portfolio</a
              >
            </li>
            <li class="group">
              <a
                href="#clients"
                class="block py-2 px-4 text-base text-dark dark:text-white hover:text-primary"
                >Clients</a
              >
            </li>
            <li class="group">
              <a
                href="#contact"
                class="block py-2 px-4 text-base text-dark dark:text-white hover:text-primary"
                >Contact</a
              >
            </li>
            <li class="flex items-center pl-4 lg:pl-0">
              <span class="text-sm text-gray-500 dark:text-gray-400"
                >light</span
              >
              <input
                type="checkbox"
                class="hidden"
                id="dark-toggle"
                v-model="isDarkMode"
              />
              <label
                for="dark-toggle"
                class="flex items-center cursor-pointer ml-2"
              >
                <div
                  class="relative w-9 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"
                >
                  <div
                    class="absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out"
                    :class="{ 'translate-x-4': isDarkMode }"
                  ></div>
                </div>
                <span class="text-sm text-gray-500 dark:text-gray-400 ml-2"
                  >dark</span
                >
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <!-- Header End -->

  <div :class="{ dark: isDarkMode }">
    <ThemeToggle />
    <!-- Konten aplikasi lainnya -->
  </div>

  <!-- Hero Section Start -->
  <section id="home" class="pt-36 dark:bg-dark">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold text-primary md:text-xl">
            Halo Semua 👋, saya
            <span
              class="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl"
            >
              Rujak Asam
            </span>
          </h1>
          <h2 class="mb-5 text-lg font-medium text-secondary lg:text-2xl">
            Lecturer &
            <span class="text-dark dark:text-white">Content Creator</span>
          </h2>
          <p class="mb-10 font-medium leading-relaxed text-secondary">
            Belajar web programming itu mudah dan menyenangkan bukan.
            <span class="font-bold text-dark dark:text-white">bukan!</span>
          </p>
          <a
            href="#"
            class="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >Hubungi Saya</a
          >
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-10 lg:right-0 lg:mt-9">
            <img
              src=""
              alt="Sandhika Galih"
              class="relative z-10 mx-auto max-w-full"
            />
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125"
            >
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- Portfolio Section Start -->
  <section id="portfolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
          <h2
            class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
          >
            Project Terbaru
          </h2>
          <p class="text-md font-medium text-secondary md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
            ipsam obcaecati? Assumenda, ipsam?
          </p>
        </div>
      </div>
      <div
        class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div class="mb-12 p-4 md:w-1/2">
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="" alt="Landing Page" class="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Landing Page Sandhika Galih
          </h3>
          <p class="text-base font-medium text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            iusto! Aliquam, corporis.
          </p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="" alt="E-Commerce" class="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            E-Commerce
          </h3>
          <p class="text-base font-medium text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            iusto! Aliquam, corporis.
          </p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="" alt="Technical Documentation" class="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Technical Documentation
          </h3>
          <p class="text-base font-medium text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            iusto! Aliquam, corporis.
          </p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="" alt="Landing Page" class="w-full" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
            Landing Page
          </h3>
          <p class="text-base font-medium text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            iusto! Aliquam, corporis.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Portfolio Section End -->

  <!-- Contact Section Start -->
  <section id="contact" class="py-36 dark:bg-dark">
    <div class="container">
      <div class="w-full px-4">
        <div class="mx-auto mb-16 max-w-xl text-center">
          <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
          <h2
            class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
          >
            Hubungi Saya
          </h2>
          <p class="text-md font-medium text-secondary md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
            ipsam obcaecati? Assumenda, ipsam?
          </p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center px-4">
        <form
          action="#"
          method="POST"
          class="w-full max-w-2xl space-y-5 rounded-lg border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
          <div>
            <label
              for="name"
              class="mb-2 block text-sm font-semibold text-primary dark:text-white"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              class="w-full rounded-lg border border-slate-300 p-3 text-base text-dark shadow-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-semibold text-primary dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              class="w-full rounded-lg border border-slate-300 p-3 text-base text-dark shadow-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>
          <div>
            <label
              for="message"
              class="mb-2 block text-sm font-semibold text-primary dark:text-white"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              class="w-full rounded-lg border border-slate-300 p-3 text-base text-dark shadow-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-lg border border-transparent bg-primary py-3 px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- Contact Section End -->
</template>

<script setup>
import { ref, watchEffect } from "vue";

const isDarkMode = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watchEffect(() => {
  if (isDarkMode.value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
</script>
