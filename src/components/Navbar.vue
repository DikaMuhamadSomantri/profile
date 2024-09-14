<template>
  <!-- Header Start -->
  <header
    class="fixed top-0 left-0 z-50 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a
            href="/#hero"
            class="flex items-center py-6 text-lg font-bold animate-color-change"
          >
            Rujak Asam
          </a>
        </div>
        <div class="flex items-center px-4">
          <!-- Hamburger Button -->
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block lg:hidden z-[100] w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              class="hamburger-line transform transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transform transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transform transition duration-300 ease-in-out"
            ></span>
          </button>

          <!-- Navigation Menu -->
          <nav
            id="nav-menu"
            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <router-link
                  to="/"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Beranda
                </router-link>
              </li>
              <li class="group">
                <router-link
                  to="/about"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Tentang Saya
                </router-link>
              </li>
              <li class="group">
                <router-link
                  to="/portofolio"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Portfolio
                </router-link>
              </li>
              <li class="group">
                <a
                  href="/#contact"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Contact
                </a>
              </li>
              <li class="mt-3 flex items-center pl-8 lg:mt-0">
                <div class="flex items-center">
                  <button
                    id="dark-toggle"
                    type="button"
                    class="inline-flex items-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <!-- Light mode SVG -->
                    <svg
                      id="light-icon"
                      class="w-6 h-6 dark:hidden hover:fill-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>

                    <!-- Dark mode SVG -->
                    <svg
                      id="dark-icon"
                      class="hidden w-6 h-6 dark:block hover:fill-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    onMounted(() => {
      const hamburger = document.querySelector("#hamburger") as HTMLElement;
      const navMenu = document.querySelector("#nav-menu") as HTMLElement;
      const darkToggle = document.querySelector(
        "#dark-toggle"
      ) as HTMLButtonElement;
      const html = document.documentElement;

      // Dark mode initialization
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        html.classList.add("dark");
        darkToggle.classList.add("dark-mode");
      } else {
        html.classList.remove("dark");
        darkToggle.classList.remove("dark-mode");
      }

      // Hamburger menu toggle
      hamburger.addEventListener("click", (e: MouseEvent) => {
        e.stopPropagation(); // Prevent immediate closing
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      });

      // Close menu when clicking outside
      window.addEventListener("click", (e: MouseEvent) => {
        if (
          !hamburger.contains(e.target as Node) &&
          !navMenu.contains(e.target as Node)
        ) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      });

      // Dark mode toggle
      darkToggle.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
          darkToggle.classList.remove("dark-mode");
        } else {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
          darkToggle.classList.add("dark-mode");
        }
      });
    });
  },
});
</script>

<style scoped>
header {
  background-color: white;
}

.dark header {
  background-color: #0f172a;
}

.hamburger-line {
  /* Mengatur tinggi garis dan membuatnya lebih panjang */
  @apply block h-[2px] w-8 my-1 bg-dark dark:bg-white transition-all duration-300 ease-in-out;
}

.hamburger-active > .hamburger-line:nth-child(1) {
  @apply rotate-45 translate-y-[10px]; /* Mengatur rotasi dan jarak */
}

.hamburger-active > .hamburger-line:nth-child(2) {
  @apply opacity-0; /* Menghilangkan garis kedua */
}

.hamburger-active > .hamburger-line:nth-child(3) {
  @apply -rotate-45 -translate-y-[10px]; /* Mengatur rotasi dan jarak */
}
</style>
