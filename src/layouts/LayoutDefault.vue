<template>
  <div class="app">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/style/assets/logo.svg"
        width="125"
        height="125"
      />
      <div class="wrapper">
        <HelloWorld msg="App Name" />
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>
