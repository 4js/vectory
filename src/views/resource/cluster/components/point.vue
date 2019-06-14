<template>
  <div id="pointNode"></div>
</template>

<script>
import G2 from "@antv/g2";
import { pointData } from "../constant";

var colorMap = {
    'Asia': G2.Global.colors[0],
    'Americas': G2.Global.colors[1],
    'Europe': G2.Global.colors[2],
    'Oceania': G2.Global.colors[3]
  };
export default {
  name: "point",
  methods: {
    initChart() {
      var chart = new G2.Chart({
        container: "pointNode",
        forceFit: true,
        animate: true,
        padding: 40
      });
      chart.source(pointData);
      // 为各个字段设置别名
      chart.scale({
        LifeExpectancy: {
          alias: "人均寿命（年）"
        },
        Population: {
          type: "pow",
          alias: "人口总数"
        },
        GDP: {
          alias: "人均国内生产总值($)"
        },
        Country: {
          alias: "国家/地区"
        }
      });
      chart.axis("GDP", {
        label: {
          formatter: function formatter(value) {
            return (value / 1000).toFixed(0) + "k";
          } // 格式化坐标轴的显示
        }
      });
      chart.tooltip({
        showTitle: false // 不显示默认标题
      });
      chart.legend("Population", false); // 该图表默认会生成多个图例，设置不展示 Population 和 Country 两个维度的图例
      chart
        .point()
        .position("GDP*LifeExpectancy")
        .size("Population", [4, 65])
        .color("continent", function(val) {
          return colorMap[val];
        })
        .shape("circle")
        .tooltip("Country*Population*GDP*LifeExpectancy")
        .style("continent", {
          lineWidth: 1,
          strokeOpacity: 1,
          fillOpacity: 0.3,
          opacity: 0.65,
          stroke: function stroke(val) {
            return colorMap[val];
          }
        });
      chart.render();
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style>
</style>
