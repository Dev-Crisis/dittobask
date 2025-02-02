<script setup>
import logo from "@assets/img/logo.webp";
import { onMounted, useTemplateRef } from "vue";

const navMobile = useTemplateRef("nav-mobile");

onMounted(() => {
  const navToggles = document.querySelectorAll(".nav-toggle");
  navToggles.forEach((e, i) => {
    e.addEventListener(
      "click",
      () => {
        navMobile.value.classList.toggle("right-0");
        navMobile.value.classList.toggle("right-full");
      },
      { passive: true }
    );
  });
});
</script>

<template>
  <!-- HEADER -->
  <header
    class="flex right-0 justify-between items-center py-2 px-6 xl:py-5 xl:px-10"
  >
    <a href="" title="Back To Home" class="transition-all hover:opacity-45"
      ><img
        :src="logo"
        alt="Dittobask Logo"
        width="118"
        height="118"
        class="w-[80px] h-[80px]"
    /></a>
    <svg
      class="nav-toggle md:hidden cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="30"
      height="30"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 448 512"
    >
      <path
        class="fill-[var(--white)]"
        d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"
      ></path>
    </svg>
    <!-- NAV -->
    <nav class="hidden md:block">
      <ul class="flex justify-center gap-8 items-center w-full">
        <li>
          <a
            href="#roadmap"
            title="Go To Roadmap"
            class="uppercase text-[var(--white)] md:text-sm xl:text-xl font-primary transition-all hover:opacity-45"
            >roadmap</a
          >
        </li>
        <li>
          <a
            href="#faqs"
            title="Go To Faqs"
            class="uppercase text-[var(--white)] md:text-sm xl:text-xl font-primary transition-all hover:opacity-45"
            >faqs</a
          >
        </li>
        <li>
          <a
            href="#team"
            title="Go To Team"
            class="uppercase text-[var(--white)] md:text-sm xl:text-xl font-primary transition-all hover:opacity-45"
            >team</a
          >
        </li>
        <li>
          <a
            href="#about"
            title="Go To About"
            class="uppercase text-[var(--white)] md:text-sm xl:text-xl font-primary transition-all hover:opacity-45"
            >about</a
          >
        </li>
        <li>
          <a
            href="https://www.mint.store/"
            title="Go To Mint Store"
            target="_blank"
            class="bg-[var(--white)] text-xs uppercase rounded-sm px-6 py-3 font-primary transition-all hover:opacity-45"
            >mint</a
          >
        </li>
      </ul>
    </nav>
    <!-- NAV MOBILE -->
    <nav
      ref="nav-mobile"
      class="md:hidden nav bg-[var(--black)] py-4 px-5 w-[57.5%] absolute top-0 flex justify-center items-start flex-col gap-5 right-full"
    >
      <div class="w-full flex items-center justify-between p-1">
        <a
          href="https://www.mint.store/"
          title="Go To Mint Store"
          target="_blank"
          class="bg-[var(--white)] text-xs uppercase rounded-sm px-6 py-3 font-primary transition-all focus:opacity-45"
          >mint</a
        >
        <svg
          ref="nav-toggle"
          class="nav-toggle cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="30"
          height="30"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 15 15"
        >
          <path
            class="fill-[var(--white)]"
            d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
          ></path>
        </svg>
      </div>
      <div class="flex items-start justify-center flex-col gap-5">
        <ul class="flex justify-center items-start flex-col gap-6">
          <li class="flex flex-col items-start justify-center gap-4">
            <span class="uppercase text-[var(--lightgrey)] font-bold"
              >menu</span
            >
            <a
              href="#roadmap"
              title="Go To Roadmap"
              class="uppercase text-[var(--white)] text-sm font-primary"
              >roadmap</a
            >
          </li>
          <li>
            <a
              href="#faqs"
              title="Go To Faqs"
              class="uppercase text-[var(--white)] text-sm font-primary"
              >faqs</a
            >
          </li>
          <li>
            <a
              href="#team"
              title="Go To Team"
              class="uppercase text-[var(--white)] text-sm font-primary"
              >team</a
            >
          </li>
          <li>
            <a
              href="#about"
              title="Go To About"
              class="uppercase text-[var(--white)] text-sm font-primary"
              >about</a
            >
          </li>
        </ul>
        <div class="flex items-center justify-center gap-5">
          <a href="" title="Go To Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                class="fill-[var(--white)]"
                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9"
              ></path>
            </svg>
          </a>
          <a href="" title="Go To X">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                class="fill-[var(--white)]"
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z"
              ></path>
            </svg>
          </a>
          <a href="" title="Go To Discord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                class="fill-[var(--white)]"
                d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026a13.83 13.83 0 0 0 1.226-1.963a.074.074 0 0 0-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
