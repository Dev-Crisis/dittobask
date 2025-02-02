<script setup>
import violet from "@assets/img/violet.webp";
import violet_responsive from "@assets/img/violet_responsive.webp";
import red from "@assets/img/red.webp";
import red_responsive from "@assets/img/red_responsive.webp";
import yellow from "@assets/img/yellow.webp";
import yellow_responsive from "@assets/img/yellow_responsive.webp";
</script>

<template>
  <section>
    <!-- ROOT 1 -->
    <div
      class="bg-[var(--black)] px-5 md:pl-14 gap-14 pt-5 flex items-center xl:items-center justify-center md:justify-between flex-col xl:flex-row"
    >
      <div
        class="flex xl:items-start items-center justify-center gap-14 md:gap-8 xl:gap-16 flex-col"
      >
        <h3
          class="uppercase font-primary text-[var(--white)] text-center font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          the roots
        </h3>
        <div class="box-shadow-1 bg-[var(--violet)] rounded-md px-8 py-3">
          <h4
            class="uppercase font-primary text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[var(--white)]"
          >
            supply
          </h4>
          <h5
            class="text-[var(--darkviolet)] text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-primary"
          >
            3333
          </h5>
        </div>
        <div
          class="flex justify-center items-center flex-col gap-8 xl:items-start"
        >
          <p
            class="uppercase text-[var(--white)] font-secondary text-base text-center xl:text-left w-[80%] md:w-[60%] leading-7"
          >
            the roots exist to provide sustenance and a strong foundation for
            the rest of it's body.
          </p>
          <p
            class="uppercase text-[var(--white)] font-secondary text-base text-center xl:text-left w-[80%] md:w-[60%] leading-7"
          >
            a tree is mire than it's colorful leaves and sturdy bark: a tree is
            grounded by it's roots.
          </p>
        </div>
      </div>
      <img
        width="770"
        height="839"
        :src="violet"
        alt="Violet Character"
        class="md:w-[45%] xl:self-end"
        :srcset="violet_responsive + ' 480w, ' + violet + ' 800w'"
        sizes="(max-width: 600px) 480px,
	                800px"
      />
    </div>
    <!-- ROOT 2 -->
    <div
      class="bg-[var(--white)] px-5 md:pl-14 gap-14 pt-5 flex items-center xl:items-center justify-center md:justify-between flex-col xl:flex-row"
    >
      <div
        class="flex xl:items-start items-center justify-center gap-14 md:gap-8 xl:gap-16 flex-col order-1 xl:order-2"
      >
        <h3
          class="uppercase font-primary text-black text-center font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          the roots
        </h3>
        <div class="box-shadow-3 bg-[var(--red)] rounded-md px-8 py-3">
          <h4
            class="uppercase font-primary text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[var(--black)]"
          >
            supply
          </h4>
          <h5
            class="text-[var(--darkred)] text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-primary"
          >
            3333
          </h5>
        </div>
      </div>
      <img
        width="805"
        height="876"
        :src="red"
        alt="Red Character"
        class="xl:order-2 order-3 md:w-[40%] xl:self-end"
        :srcset="red_responsive + ' 480w, ' + red + ' 800w'"
        sizes="(max-width: 600px) 480px,
	                800px"
      />
      <div
        class="flex justify-center items-center flex-col gap-8 xl:items-start order-2 xl:order-3"
      >
        <p
          class="uppercase text-black font-secondary text-base text-center xl:text-left w-[80%] md:w-full leading-7"
        >
          the roots exist to provide sustenance and a strong foundation for the
          rest of it's body.
        </p>
        <p
          class="uppercase text-black font-secondary text-base text-center xl:text-left w-[80%] md:w-full leading-7"
        >
          a tree is mire than it's colorful leaves and sturdy bark: a tree is
          grounded by it's roots.
        </p>
        <p
          class="uppercase text-black font-secondary text-base text-center xl:text-left w-[80%] md:w-full leading-7"
        >
          a tree is mire than it's colorful leaves and sturdy bark: a tree is
          grounded by it's roots.
        </p>
      </div>
    </div>
    <!-- ROOT 3 -->
    <div
      class="bg-[var(--orange)] px-5 md:pr-14 gap-14 pt-5 flex items-center xl:items-center justify-center md:justify-between flex-col xl:flex-row"
    >
      <img
        width="767"
        height="835"
        :src="yellow"
        alt="Yellow Character"
        class="xl:order-1 order-2 md:w-[45%] xl:self-end"
        :srcset="yellow_responsive + ' 480w, ' + yellow + ' 800w'"
        sizes="(max-width: 600px) 480px,
	                800px"
      />
      <div
        class="flex xl:items-end items-center justify-center gap-14 md:gap-8 xl:gap-16 flex-col order-1 xl:order-2"
      >
        <h3
          class="uppercase font-primary text-black text-center font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          the roots
        </h3>
        <div class="box-shadow-2 bg-[var(--darkgrey)] rounded-md px-8 py-3">
          <h4
            class="uppercase font-primary text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[var(--orange)]"
          >
            supply
          </h4>
          <h5
            class="text-[var(--darkviolet)] text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-primary"
          >
            3333
          </h5>
        </div>
        <div
          class="flex justify-center items-center flex-col gap-8 xl:items-end"
        >
          <p
            class="uppercase text-black font-secondary text-base text-center xl:text-left w-[80%] md:w-[60%] leading-7"
          >
            the roots exist to provide sustenance and a strong foundation for
            the rest of it's body.
          </p>
          <p
            class="uppercase text-black font-secondary text-base text-center xl:text-left w-[80%] md:w-[60%] leading-7"
          >
            a tree is mire than it's colorful leaves and sturdy bark: a tree is
            grounded by it's roots.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
