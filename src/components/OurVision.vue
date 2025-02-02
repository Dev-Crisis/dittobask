<script setup>
import versus from "@assets/img/versus.webp";
import versus_responsive from "@assets/img/versus_responsive.webp";
import { onMounted } from "vue";
onMounted(() => {
  let fireworks = document.querySelectorAll(".firework");
  setTimeout(() => {
    fireworks.forEach((e, i) => {
      e.classList.add("hidden");
    });
  }, 5000);
})
</script>

<template>
  <!-- FIREWORKS -->
  <div class="firework firework-2"></div>
  <div class="firework firework-1"></div>
  <section
    class="bg-[var(--beige)] flex justify-center items-center flex-col w-full"
  >
    <!-- COUNTER -->
    <div
      class="flex justify-around md:justify-center md:gap-12 items-center bg-[var(--beige)] w-full px-4"
    >
      <div class="flex justify-center gap-4 items-center flex-col w-[18%]">
        <div
          class="bg-[var(--black)] py-4 px-8 md:py-8 md:px-10 xl:py-10 xl:px-14 2xl:py-14 2xl:px-20 text-[var(--white)] flex items-center justify-center font-primary text-xl md:text-2xl xl:text-5xl shadow-2xl"
        >
          0
        </div>
        <span
          class="font-primary font-bold text-xs md:text-sm xl:text-base 2xl:text-xl"
          >DAYS</span
        >
      </div>
      <div class="flex justify-center gap-4 items-center flex-col w-[18%]">
        <div
          class="bg-[var(--black)] py-4 px-8 md:py-8 md:px-10 xl:py-10 xl:px-14 2xl:py-14 2xl:px-20 text-[var(--white)] flex items-center justify-center font-primary text-xl md:text-2xl xl:text-5xl shadow-2xl"
        >
          0
        </div>
        <span
          class="font-primary font-bold text-xs md:text-sm xl:text-base 2xl:text-xl"
          >HOURS</span
        >
      </div>
      <div class="flex justify-center gap-4 items-center flex-col w-[18%]">
        <div
          class="bg-[var(--black)] py-4 px-8 md:py-8 md:px-10 xl:py-10 xl:px-14 2xl:py-14 2xl:px-20 text-[var(--white)] flex items-center justify-center font-primary text-xl md:text-2xl xl:text-5xl shadow-2xl"
        >
          0
        </div>
        <span
          class="font-primary font-bold text-xs md:text-sm xl:text-base 2xl:text-xl"
          >MINUTES</span
        >
      </div>
    </div>
    <div class="firework firework-4"></div>
    <div class="firework firework-5"></div>
    <div class="firework firework-3"></div>
    <div
      class="flex justify-center items-center flex-col gap-6 md:gap-24 pt-8 pb-8 md:pb-32"
    >
      <h2
        class="uppercase font-primary text-shadow-1 text-4xl md:text-6xl xl:text-9xl 2xl:text-[165px] text-center"
      >
        our vision
      </h2>
      <h3
        class="uppercase font-primary text-center text-sm md:text-base xl:text-xl w-[80%] md:w-[50%]"
      >
        Internet made is both a brand and a movement bringing artists, creators,
        and fashion designers together to use technology to express themselves
        in a new way.
      </h3>
    </div>
    <img
      :src="versus"
      alt="Two characters"
      width="1924"
      height="1050"
      :srcset="versus_responsive + ' 480w, ' + versus + ' 800w'"
      sizes="(max-width: 600px) 480px,
	                800px"
    />
    <div class="marquee bg-[var(--beige)] w-full py-2">
      <div class="marquee__group">
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
      </div>

      <div aria-hidden="true" class="marquee__group">
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
        <span class="text-black font-primary text-sm font-bold md:text-3xl">
          DITTOBASK
        </span>
      </div>
    </div>
  </section>
</template>
