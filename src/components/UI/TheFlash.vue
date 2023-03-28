<template>
  <div
    :class="classes"
    class="flash"
    role="alert"
    v-show="show"
    v-text="body"
  ></div>
</template>

<script>
export default {
  props: ["message", "data"],
  data() {
    return {
      body: this.message,
      level: "success",
      show: false,
    };
  },
  computed: {
    classes() {
      const defaults = ["fixed", "p-4", "border", "text-white"];
      if (this.level === "success") {
        defaults.push("bg-green", "border-green-dark");
      } else if (this.level === "warning") {
        defaults.push("bg-yellow", "border-yellow-dark");
      } else if (this.level === "error") {
        defaults.push("bg-red", "border-red-dark");
      } else if (this.level === "info") {
        defaults.push("bg-blue-300", "border-blue");
      }

      return defaults;
    },
  },
  created() {
    if (this.message) {
      this.flash();
    }
    if (this.data) {
      this.flash(this.data);
    }
    window.events.$on("flash", (data) => this.flash(data));
  },
  methods: {
    flash(data) {
      if (data) {
        this.body = data.message;
        this.level = data.type;
      }
      this.show = true;
      this.hide();
    },
    hide() {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.flash {
  right: 25px;
  bottom: 25px;
  z-index: 999;
}
</style>
