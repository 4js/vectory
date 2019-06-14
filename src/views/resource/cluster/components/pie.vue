<template>
  <div id="mountNode">
  </div>
</template>

<script>
import G2 from '@antv/g2'
import {data} from '../constant'
export default {
  name: "pie",
  methods: {
      initCharts () {
        var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            animate: true,
            padding: 40
        });
        chart.source(data, {
            percent: {
                formatter: function formatter(val) {
                    val = val * 100 + '%';
                    return val;
                }
            }
        });
        // 设置图例居中显示
        chart.legend({
            align: 'center',
            itemWidth: null // 图例项按照实际宽度渲染
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });
        chart.tooltip({
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        // 辅助文本
        chart.guide().html({
            position: ['50%', '50%'],
            html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
            alignX: 'middle',
            alignY: 'middle'
        });
        var interval = chart.intervalStack().position('percent').color('item').label('percent', {
            formatter: function formatter(val, item) {
            return item.point.item + ': ' + val;
            }
        }).tooltip('item*percent', function(item, percent) {
            percent = percent * 100 + '%';
            return {
            name: item,
            value: percent
            };
        }).style({
            lineWidth: 1,
            stroke: '#fff'
        });
        chart.render();
        interval.setSelected(data[0]);
      }
  },
  mounted () {
      this.initCharts()
  }
};
</script>

<style>
</style>