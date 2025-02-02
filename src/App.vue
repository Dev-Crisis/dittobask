<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HeroBanner from "./components/HeroBanner.vue";
import OurVision from "./components/OurVision.vue";
import Roots from "./components/Roots.vue";
import RoadMap from "./components/RoadMap.vue";
import Faqs from "./components/Faqs.vue";
import Team from "./components/Team.vue";
import HowItStarted from "./components/HowItStarted.vue";
</script>

<template>
  <Header />
  <!-- MAIN -->
  <main class="pt-4 md:pt-6">
    <!-- HERO BANNER -->
    <HeroBanner />

    <!-- OUR VISION -->
    <OurVision />

    <!-- ROOTS -->
    <Roots />

    <!-- ROADMAP -->
    <RoadMap />

    <!-- FAQS -->
    <Faqs />

    <!-- TEAMS -->
    <Team />

    <!-- HOW IT STARTED -->
    <HowItStarted />
  </main>
  <Footer />
</template>
