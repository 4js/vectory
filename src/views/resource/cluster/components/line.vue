<template>
  <div id="lineNode"></div>
</template>

<script>
import G2 from "@antv/g2";
import { lineData } from "../constant";
export default {
  name: "line1",
  methods: {
    initChart() {
      var lineChart = new G2.Chart({
        container: "lineNode",
        forceFit: true,
        animate: true,
        padding: 40
      });

      lineChart.axis("date", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        }
      });
      lineChart.axis("blockchain", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        }
      });
      lineChart.axis("nlp", false);
      lineChart.tooltip({
        crosshairs: false
      });
      lineChart.legend({
        position: "top-center"
      });

      lineChart.source(lineData, {
        nlp: {
          min: 0,
          max: 100
        },
        blockchain: {
          min: 0,
          max: 100
        }
      });
      lineChart
        .line()
        .position("date*blockchain")
        .color("#1890ff");
      lineChart
        .line()
        .position("date*nlp")
        .color("#2fc25b");
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style>
</style>
