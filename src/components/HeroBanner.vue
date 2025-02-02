<script setup>
import allperso from "@assets/img/allperso.webp";
import allperso_responsive from "@assets/img/allperso_responsive.webp";
</script>

<template>
	<section class="flex justify-center items-center gap-12 flex-col">
	      <h1
	        class="text-4xl md:text-6xl xl:text-9xl font-primary text-[var(--white)]"
	      >
	        DITTOBASK
	      </h1>
	      <a
	        href="https://www.opensea.io/"
	        title="Visit in Opensea"
	        class="text-[var(--white)] px-4 py-2 rounded-full font-primary uppercase border-4 transition-all hover:opacity-45 text-sm md:text-base xl:text-xl"
	        >visit in opensea</a
	      >
	      <img
	        :src="allperso"
	        :srcset="allperso_responsive + ' 480w, ' + allperso + ' 800w'"
	        sizes="(max-width: 600px) 480px,
	                800px"
	        width="1920"
	        height="864"
	        alt="See All Characters"
	      />
	    </section>
</template>
