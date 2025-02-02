<script setup>
import pp1 from "@assets/img/pp-1.webp";
import pp2 from "@assets/img/pp-2.webp";
import pp3 from "@assets/img/pp-3.webp";
import pph1 from "@assets/img/pph-1.webp";
import pph2 from "@assets/img/pph-2.webp";
import pph3 from "@assets/img/pph-3.webp";
import helper from "@assets/img/helper.webp";
import founder1 from "@assets/img/founder-1.webp";
import founder2 from "@assets/img/founder-2.webp";
import founder3 from "@assets/img/founder-3.webp";
import { useTemplateRef } from "vue";

const cards = useTemplateRef("cards");
const list = [
  {
    id: 1,
    pp: pp1,
    image: founder1,
    name: "Founder of Dittobask",
    at: "@iamtralden",
    ethPrice: "575.07",
    dollarsPrice: "971,5860.33",
    code: "#FDT001",
    type: "founders",
  },
  {
    id: 2,
    pp: pp2,
    image: founder2,
    name: "Founder of Dittobask",
    at: "@devcrisis",
    ethPrice: "438.31",
    dollarsPrice: "740,057.61",
    code: "#FDT002",
    type: "founders",
  },
  {
    id: 3,
    pp: pp3,
    image: founder3,
    name: "Founder of Dittobask",
    at: "@wizy",
    ethPrice: "358.24",
    dollarsPrice: "605,2048.95",
    code: "#FDT003",
    type: "founders",
  },
  {
    id: 4,
    pp: pph1,
    image: helper,
    name: "Helper of Dittobask",
    at: "@betatesteur",
    ethPrice: "100.00",
    dollarsPrice: "234,291.88",
    code: "#HDT003",
    type: "helpers",
  },
  {
    id: 5,
    pp: pph2,
    image: helper,
    name: "Helper of Dittobask",
    at: "@betatesteur",
    ethPrice: "100.00",
    dollarsPrice: "234,291.88",
    code: "#HDT002",
    type: "helpers",
  },
  {
    id: 6,
    pp: pph3,
    image: helper,
    name: "Helper of Dittobask",
    at: "@betatesteur",
    ethPrice: "100.00",
    dollarsPrice: "234,291.88",
    code: "#HDT003",
    type: "helpers",
  },
];
const selectByType = (type) => {
  console.log(cards.value);

  cards.value.forEach((e, i) => {
    if (type === "all") {
      e.classList.remove("hidden");
    } else {
      e.classList.contains(type)
        ? e.classList.remove("hidden")
        : e.classList.add("hidden");
    }
  });
};
</script>

<template>
  <section id="team">
    <div
      class="flex flex-col justify-center items-center py-5 bg-[var(--white)] overflow-hidden"
    >
      <h3
        class="uppercase font-primary text-[14.5vw] -ml-12 md:-ml-24 xl:-ml-36 2xl:-ml-48"
      >
        ourteam
      </h3>
      <h3
        class="uppercase font-primary text-[14.5vw] text-shadow-2 text-shadow-bold text-[var(--white)]"
      >
        ourteam
      </h3>
      <h3
        class="uppercase font-primary text-[14.5vw] ml-12 md:ml-24 xl:ml-36 2xl:ml-48"
      >
        ourteam
      </h3>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <div class="flex justify-around items-center w-full flex-wrap p-10 gap-6">
        <button
          @click.passive="selectByType('all')"
          class="capitalize font-primary bg-[var(--white)] w-[85%] md:w-1/4 py-3 transition-all focus:opacity-45"
        >
          all
        </button>
        <button
          @click.passive="selectByType('founders')"
          class="capitalize font-primary bg-[var(--white)] w-[85%] md:w-1/4 py-3 transition-all focus:opacity-45"
        >
          only founders
        </button>
        <button
          @click.passive="selectByType('helpers')"
          class="capitalize font-primary bg-[var(--white)] w-[85%] md:w-1/4 py-3 transition-all focus:opacity-45"
        >
          only helpers
        </button>
      </div>
      <div
        class="flex justify-around md:justify-center items-center py-8 flex-wrap gap-8 md:gap-x-64 md:gap-y-16"
      >
        <div
          v-for="item in list"
          ref="cards"
          :key="item.id"
          :class="item.type"
          class="flex flex-col items-start justify-between overflow-hidden gap-6 pt-4 border-4 border-[var(--lightgrey)] rounded-3xl max-w-[350px] md:max-w-[380px] xl:max-w-[400px]"
        >
          <img :src="item.image" alt="Helper 1" class="w-[90%] self-center" />
          <div class="flex gap-6 items-center justify-start px-3">
            <img
              :src="item.pp"
              width="53"
              height="53"
              alt="Profile Picture 1"
            />
            <span class="font-secondary text-[var(--lightgrey)] text-base">{{
              item.at
            }}</span>
          </div>
          <h6 class="font-secondary text-[var(--white)] text-sm px-3">
            {{ item.name }}
          </h6>
          <div class="flex flex-col justify-center gap-2 px-3">
            <span class="font-secondary text-[var(--lightgrey)] text-sm"
              >Current bio</span
            >
            <span class="font-secondary uppercase text-[var(--white)] text-sm"
              >{{ item.ethPrice }} ETH</span
            >
            <span
              class="font-secondary uppercase text-[var(--lightgrey)] text-sm"
              >${{ item.dollarsPrice }}</span
            >
          </div>
          <div
            class="py-6 flex justify-center items-center bg-[var(--white)] w-full"
          >
            <span
              class="font-secondary uppercase text-[var(--black)] text-shadow-1"
              >{{ item.code }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
