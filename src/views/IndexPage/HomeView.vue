<script setup lang="ts">
import ItemsList from "./ItemsListView.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import SupportIcon from "@/components/icons/IconSupport.vue";
</script>

<template>
  <div style="margin-left: 20px">
    <ItemsList>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Official Site</template>

      Vue’s
      <a target="_blank" href="https://v2.vuejs.org/">official site</a>
      provides you with all information you need to get started.
    </ItemsList>

    <ItemsList>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>

      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
      The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
      <a
        href="https://docs.cypress.io/guides/component-testing/introduction"
        target="_blank"
        >Cypress Component Testing</a
      >.

      <br />

      More instructions are available in <code>README.md</code>.
    </ItemsList>

    <ItemsList>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
      <a target="_blank" href="https://v3.router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://vue-test-utils.vuejs.org/"
        >Vue Test Utils</a
      >, and
      <a target="_blank" href="https://github.com/vuejs/devtools"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a target="_blank" href="https://github.com/vuejs/awesome-vue"
        >Awesome Vue</a
      >
      a visit.
    </ItemsList>

    <ItemsList>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our
      official Discord server, or
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/tagged/vue.js"
        >StackOverflow</a
      >. You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org">our mailing list</a>
      and follow the official
      <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
      twitter account for latest news in the Vue world.
    </ItemsList>

    <ItemsList>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its
      sustainability. You can help us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a
      >.
    </ItemsList>
  </div>
</template>
