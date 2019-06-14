<template>
  <div class="cluster-wrapper">
    <a-tabs type="card">
      <a-tab-pane tab="卷" key="1"><a-volume /></a-tab-pane>
      <a-tab-pane tab="目标器" key="2"><a-target /></a-tab-pane>
      <a-tab-pane tab="客户端" key="3"><a-starter /></a-tab-pane>
      <a-tab-pane tab="客户端组" key="4"><a-clients /></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import AVolume from './volume.vue'
import AStarter from './starter.vue'
import ATarget from './target.vue'
import AClients from './clients.vue'

export default {
  name: "block",
  components: {
    AVolume,
    AStarter,
    ATarget,
    AClients
  }
};
</script>

<style>
</style>
