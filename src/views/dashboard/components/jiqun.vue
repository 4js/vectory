<template>
  <div>
    <a-icon :style="styles" :type="icon" />
    <p>{{name}}</p>
    <h3>{{num}}%</h3>
    <hr style="border: 0.5px solid #e8e8e8;" />
    <p class="bottom-text">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </p>
  </div>
</template>

<script>
import { maxHeaderSize } from "http";

export default {
  data() {
    return {
      styles: {
        "font-size": "34px",
        color: this.color
      }
    };
  },
  props: ["name", "icon", "num", "color"]
};
</script>

<style lang="less" scoped>
.bottom-text {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  .anticon-caret-down {
    color: #52c41a;
  }
  .anticon-caret-up {
    color: #f5222d;
  }
}
</style>