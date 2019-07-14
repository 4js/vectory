<template>
    <v-chart :loading="loading" :force-fit="true" :height="260" :data="pieData" :scale="pieScale">
        <v-tooltip :showTitle="false" dataKey="item*percent" />
        <v-axis />
        <!-- position="right" :offsetX="-140" -->
        <v-legend dataKey="item"/>
        <v-pie position="percent" color="item" :vStyle="pieStyle" />
        <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
</template>

<script>
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '在飞', count: 32 },
  { item: '停场', count: 21 },
  { item: '维修', count: 17 },
  { item: '训练', count: 10 },
]
const pieScale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]
const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const pieData = dv.rows
export default {
    name: 'Airplane',
    data() {
        return {
            pieData,
            pieScale,
            loading: true,
            height: 280,
            pieStyle: {
                stroke: '#fff',
                lineWidth: 1
            },
            labelConfig: ['percent', {
                formatter: (val, item) => {
                return item.point.item + ': ' + val;
                }
            }],
        }
    },
    created () {
        setTimeout(() => {
        this.loading = !this.loading
        }, 1000)
    }
}
</script>

<style lang="less" scoped>

</style>
