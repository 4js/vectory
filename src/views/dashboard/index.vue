<template>
  <div class="dashboard-wrapper">
    <Aoverview></Aoverview>
    <Aticket></Aticket>
  </div>
</template>

<script>
import Aoverview from "./components/overview.vue";
import Aticket from "./components/ticket.vue";
export default {
  name: "dashboard",
  components: {
    Aoverview,
    Aticket
  }
};
</script>

<style lang="less" scoped>
.dashboard-wrapper {
}
</style>
