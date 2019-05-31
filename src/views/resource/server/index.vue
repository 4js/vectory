<template>
  <div class="cluster-wrapper">
    <a-tabs type="card">
        <a-tab-pane tab="主机" key="1">
            <a-host />
        </a-tab-pane>
        <a-tab-pane tab="网络" key="2">
            <a-network />
        </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import AHost from './host.vue'
import ANetwork from './network.vue'

export default {
  name: 'server',
  components: { AHost, ANetwork }
}
</script>

<style>
</style>
