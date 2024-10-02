<template>
  <!-- Header Start -->
  <header
    class="fixed top-0 left-0 z-50 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a
            href="/#"
            class="flex items-center py-6 text-lg font-bold animate-color-change"
          >
            <!-- <img
              src="/images/Illustration.png"
              class="w-12 h-auto max-w-full"
            /> -->
            <span
              class="ml-2 bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text"
              >Rujak Asam</span
            >
          </a>
        </div>

        <div class="flex items-center px-4">
          <!-- Hamburger Button -->
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 lg:hidden z-[100] w-8 h-8 flex flex-col justify-center items-center"
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
                <a
                  href="/#about"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Tentang Saya
                </a>
              </li>
              <li class="group">
                <a
                  href="/#portofolio"
                  class="mx-8 flex py-2 text-base text-dark font-semibold group-hover:text-primary dark:text-white"
                >
                  Portfolio
                </a>
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
                <label class="swap swap-rotate">
                  <!-- Hidden checkbox untuk kontrol tema -->
                  <input type="checkbox" class="theme-controller" />

                  <!-- Ikon matahari (Light mode) -->
                  <svg
                    class="swap-off h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                    />
                  </svg>

                  <!-- Ikon bulan (Dark mode) -->
                  <svg
                    class="swap-on h-6 w-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                    />
                  </svg>
                </label>
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
      const themeController = document.querySelector(
        ".theme-controller"
      ) as HTMLInputElement;
      const html = document.documentElement;

      // Inisialisasi Tema (Light/Dark Mode)
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        html.classList.add("dark");
        themeController.checked = true;
      } else {
        html.classList.remove("dark");
        themeController.checked = false;
      }

      // Event Listener Toggle Tema
      themeController.addEventListener("change", () => {
        if (themeController.checked) {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      });

      // Hamburger Menu Toggle
      hamburger.addEventListener("click", (e: MouseEvent) => {
        e.stopPropagation();
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      });

      // Close menu saat klik di luar menu
      window.addEventListener("click", (e: MouseEvent) => {
        if (
          !hamburger.contains(e.target as Node) &&
          !navMenu.contains(e.target as Node)
        ) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
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
