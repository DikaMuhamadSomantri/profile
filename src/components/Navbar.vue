<!-- Header Start -->
<template>
  <!-- Header Start -->
  <header
    class="fixed top-0 left-0 z-50 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <router-link
            to="/"
            class="flex items-center py-6 text-lg font-bold animate-color-change"
          >
            <!-- Ikon PNG Kecil -->
            <!-- <img
              src="/images/logo-hero-section.png"
              alt="Icon"
              class="w-12 h-12 mr-0"
            /> -->
            Rujak Asam
          </router-link>
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block lg:hidden"
          >
            <span
              class="hamburger-line origin-top-left transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group">
                <router-link
                  to="/"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                  >Beranda</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/about"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                  >Tentang Saya</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/portofolio"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                  >Portfolio</router-link
                >
              </li>
              <li class="group">
                <router-link
                  to="/Contact"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                  >Contact</router-link
                >
              </li>
              <li class="mt-3 flex items-center pl-8 lg:mt-0">
                <div class="flex items-center">
                  <!-- Your header content here -->
                  <button
                    id="dark-toggle"
                    type="button"
                    class="inline-flex items-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <!-- SVG for light mode -->
                    <svg
                      id="light-icon"
                      class="w-6 h-6 dark:hidden hover:fill-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>

                    <!-- SVG for dark mode -->
                    <svg
                      id="dark-icon"
                      class="hidden w-6 h-6 dark:block hover:fill-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
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
      const header = document.querySelector("header") as HTMLElement;
      const toTop = document.querySelector("#to-top") as HTMLElement;

      // Dark mode initialization
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        html.classList.add("dark");
        if (darkToggle) darkToggle.classList.add("dark-mode");
      } else {
        html.classList.remove("dark");
        if (darkToggle) darkToggle.classList.remove("dark-mode");
      }

      // Hamburger menu toggle
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("hamburger-active");
          navMenu.classList.toggle("hidden");
        });

        // Click outside hamburger menu to close
        window.addEventListener("click", (e: MouseEvent) => {
          if (e.target !== hamburger && !navMenu.contains(e.target as Node)) {
            hamburger.classList.remove("hamburger-active");
            navMenu.classList.add("hidden");
          }
        });
      }

      // Dark mode toggle
      if (darkToggle) {
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
      }

      // Navbar fixed on scroll
      if (header) {
        window.addEventListener("scroll", () => {
          const fixedNav = header.offsetTop;
          if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
            if (toTop) {
              toTop.classList.remove("hidden");
              toTop.classList.add("flex");
            }
          } else {
            header.classList.remove("navbar-fixed");
            if (toTop) {
              toTop.classList.remove("flex");
              toTop.classList.add("hidden");
            }
          }
        });
      }
    });
  },
});
</script>

<style scoped>
header {
  background-color: white; /* Light mode */
}

.dark header {
  background-color: #0f172a; /* Dark mode */
}

/* Kelas yang digunakan saat header menjadi fixed */
.navbar-fixed {
  @apply fixed top-0 left-0 z-[9999] bg-white bg-opacity-70 backdrop-blur-sm dark:bg-dark dark:bg-opacity-50;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.2);
}

.hamburger-line {
  @apply my-2 block h-[2px] w-[30px] bg-dark dark:bg-white;
}

.hamburger-active > span:nth-child(1) {
  @apply rotate-45;
}

.hamburger-active > span:nth-child(2) {
  @apply scale-0;
}

.hamburger-active > span:nth-child(3) {
  @apply -rotate-45;
}

/* Tambahkan gaya untuk font semi-bold */
.nav-menu a {
  font-weight: 600; /* Semi-bold */
}

/* Gaya untuk mode gelap tombol toggle */
.dark-mode {
  /* Tambahkan gaya jika tombol digunakan */
}
</style>
