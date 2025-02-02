<script setup>
import violet from "@assets/img/violet.webp";
import violet_responsive from "@assets/img/violet_responsive.webp";
</script>

<template>
  <section
    id="about"
    class="bg-[var(--white)] px-5 md:pl-14 gap-14 pt-10 flex items-center xl:items-center justify-center md:justify-between flex-col xl:flex-row"
  >
    <div
      class="w-full flex xl:items-start items-center justify-center gap-6 md:gap-8 xl:gap-10 flex-col pb-10"
    >
      <h2
        class="font-primary uppercase text-3xl xl:text-4xl font-bold text-center xl:text-left"
      >
        how it started
      </h2>
      <p class="font-secondary text-center xl:text-left">
        IT WAS IN JUNE 2021 WHEN WE MET IN REAL LIFE FOR THE FIRST TIME. WHAT
        WAS FIRST MEANT TO BE A QUICK CHAT TURNED INTO US TALKING FOR HOURS
        ABOUT WEB3. WE WANTED TO MAKE SOMETHING BIGGER THAN JUST THE TWO OF US.
        AFTER ALL, WE WERE ENTERING A NEW ERA, FULL OF OPPORTUNITIES AND
        POSSIBILITIES, SO THE TIMING WAS PERFECT.
      </p>
      <p class="font-secondary text-center xl:text-left">
        WE BOTH HAD A STREETWEAR BRAND IN THE PAST. SOME PEOPLE LOVED IT, SOME
        DIDN’T, BUT TO US IT WAS EVERYTHING WE EVER WANTED IT TO BE - A
        REFLECTION OF OUR IMAGINATION, A WAY TO EXPRESS OURSELVES.
      </p>

      <p class="font-secondary text-center xl:text-left">
        IN THAT MEETING, WE BOTH REALIZED THAT WE HAD A SHARED VISION TO BRING
        OUR FASHION KNOWLEDGE TO THE NEW FRONTIER. WE WANTED TO DO SOMETHING
        THAT HAD NEVER BEEN DONE BEFORE IN OUR OWN WAY.
      </p>

      <p class="font-secondary text-center xl:text-left">
        FAST FORWARD FOUR MONTHS LATER, AND WE WERE READY. WE FOUND OUR
        INVESTORS WHO LOVED THE IDEA, OUR PLAN, AND WHO BELIEVED IN US. THANK
        YOU TO ANDREJ AND MIRAN FOR MAKING ALL OF THIS POSSIBLE.
      </p>

      <p class="font-secondary text-center xl:text-left">
        WITH OUR VISION AND OUR INVESTORS, IT WAS TIME TO FORM OUR A-TEAM. WE
        ASSEMBLED THE SUPERSTARS FROM OUR NETWORK AND PAST PROJECTS, INCLUDING
        FIVE TALENTED DESIGNERS: OUR LEAD DESIGNER NIK PRESTON, OUR 3D MODEL
        DESIGNER KRISTIAN IVANSEK, AND OUR THREE FASHION DESIGNERS: LARA
        PONEBSEK, HUGO SUKLJE, AND LARA PIKOVNIK.
      </p>
      <p class="font-secondary text-center xl:text-left">
        FAST FORWARD TO FOUR MONTHS LATER: WE WERE READY TO BEGIN.
      </p>
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
  </section>
</template>
