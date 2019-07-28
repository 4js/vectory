<template>
  <div class="cluster-wrapper">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="服务器的状态统计" style="width: 100%">
          <!-- <a-pie></a-pie> -->
        </a-card>
      </a-col>
      <a-col :span="16">
        <a-card title="接口交互次数统计" style="width: 100%">
          <!-- <a-line></a-line> -->
        </a-card>
      </a-col>
    </a-row>
    <div style="height: 50px"></div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="扰动点图" style="width: 100%">
          <!-- <a-point></a-point> -->
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="仪表图" style="width: 100%">
          <!-- <a-line></a-line> -->
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="面积图" style="width: 100%">
          <!-- <a-line></a-line> -->
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import APie from './components/pie'
// import ALine from './components/line'
// import APoint from './components/point'
export default {
  name: "vipCustom",
  components: {
    //   APie,
    //   ALine,
    //   APoint
  }
};
</script>

<style>
</style>
