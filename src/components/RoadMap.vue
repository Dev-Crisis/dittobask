<script setup>
import discord from "@assets/img/discord.webp";
import discord_responsive from "@assets/img/discord_responsive.webp";
</script>

<template>
	<section
	      id="roadmap"
	      class="bg-[var(--white)] flex justify-center items-center flex-col py-6 md:py-16 gap-10 md:gap-20"
	    >
	      <h3
	        class="uppercase font-primary text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-bold"
	      >
	        roadmap
	      </h3>
	      <div class="flex items-center justify-around flex-wrap gap-10 w-[80%]">
	        <div
	          class="bg-[var(--black)] pl-2 md:w-auto rounded-md shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-4 h-[480px] flex justify-start items-center"
	        >
	          <h4
	            class="uppercase font-primary font-bold text-[var(--white)] w-full text-center text-7xl"
	            style="writing-mode: vertical-lr"
	          >
	            phase 1
	          </h4>
	          <div class="p-20">
	            <p class="font-secondary text-[var(--white)]">test</p>
	            <p class="font-secondary text-[var(--white)]">test</p>
	            <p class="font-secondary text-[var(--white)]">test</p>
	            <p class="font-secondary text-[var(--white)]">test</p>
	            <p class="font-secondary text-[var(--white)]">test</p>
	          </div>
	        </div>
	        <div
	          class="bg-[var(--black)] pl-2 md:w-auto rounded-md shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-4 h-[480px] flex justify-start items-center"
	        >
	          <h4
	            class="uppercase font-primary font-bold text-[var(--blue)] w-full text-center text-7xl"
	            style="writing-mode: vertical-lr"
	          >
	            phase 2
	          </h4>
	          <div class="p-20">
	            <p class="font-secondary text-[var(--blue)]">test</p>
	            <p class="font-secondary text-[var(--blue)]">test</p>
	            <p class="font-secondary text-[var(--blue)]">test</p>
	            <p class="font-secondary text-[var(--blue)]">test</p>
	            <p class="font-secondary text-[var(--blue)]">test</p>
	          </div>
	        </div>
	        <div
	          class="bg-[var(--black)] pl-2 md:w-auto rounded-md shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-4 h-[480px] flex justify-start items-center"
	        >
	          <h4
	            class="uppercase font-primary font-bold text-[var(--orange)] w-full text-center text-7xl"
	            style="writing-mode: vertical-lr"
	          >
	            phase 3
	          </h4>
	          <div class="p-20">
	            <p class="font-secondary text-[var(--orange)]">test</p>
	            <p class="font-secondary text-[var(--orange)]">test</p>
	            <p class="font-secondary text-[var(--orange)]">test</p>
	            <p class="font-secondary text-[var(--orange)]">test</p>
	            <p class="font-secondary text-[var(--orange)]">test</p>
	          </div>
	        </div>
	      </div>
	      <img
	        :src="discord"
	        alt="Join Our Discord"
	        class="w-[80vw] md:w-[40%] animate-heartbeat"
			width="560px" height="180px"
	        :srcset="discord_responsive + ' 480w, ' + discord + ' 800w'"
	        sizes="(max-width: 600px) 480px,
	                800px"
	      />
	    </section>
</template>
