<template>
  <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip />
    <v-axis />
    <v-bar position="year*sales" />
  </v-chart>
</template>

<script>
const data = [
  { year: "星期一", sales: 12334 },
  { year: "星期二", sales: 11023 },
  { year: "星期三", sales: 9653 },
  { year: "星期四", sales: 10654 },
  { year: "星期五", sales: 13987 },
  { year: "星期六", sales: 12764 },
  { year: "星期日", sales: 11987 }
];

const scale = [
  {
    dataKey: "sales"
    // ticks: [8000, 9000, 10000, 11000, 12000, 13000, 14000],
    // tickInterval: 1000,
  }
];

export default {
  data() {
    return {
      data,
      scale,
      height: 400
    };
  }
};
</script>

<style lang="less" scoped>
</style>