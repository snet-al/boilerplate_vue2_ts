<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Vue Boilerplate" />
        <nav>
          <a href="/"> Index </a>
          <a href="/docs.html"> Docs </a>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>
