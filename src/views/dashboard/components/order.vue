<template>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-line position="year*value" />
      <v-point position="year*value" shape="circle" />
    </v-chart>
</template>

<script>
const data = [
  { year: '0', value: 45 },
  { year: '4:00', value: 22 },
  { year: '8:00', value: 335 },
  { year: '12:00', value:  459},
  { year: '16:00', value: 540 },
  { year: '20:00', value: 620 },
  { year: '24:00', value: 123 },
];

const scale = [{
  dataKey: 'value',
  min: 0,
},{
  dataKey: 'year',
  min: 0,
  max: 1,
}];

export default {
    name: 'Order',
    data() {
        return {
        data,
        scale,
        height: 270,
        };
    }
};
</script>

<style lang="less" scoped>

</style>
