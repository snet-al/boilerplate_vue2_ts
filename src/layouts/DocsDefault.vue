<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Vue Boilerplate" />
        <nav>
          <router-link to="/"> Index </router-link>
          <router-link to="/docs"> Docs </router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "DocsDefault",
  components: {
    HelloWorld,
  },
});
</script>
