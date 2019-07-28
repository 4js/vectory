<template>
  <div class="overview-wrapper">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-row>
            <a-col :span="7">
              <div class="icon-bg" style="background: #1890ff;">
                <a-icon type="pie-chart" />
              </div>
            </a-col>
            <a-col :span="17">
              <p>机队总数</p>
              <h2>152</h2>
              <p>
                本月新引进
                <span>3</span> 架
              </p>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-row>
            <a-col :span="7">
              <div class="icon-bg" style="background: #13c2c2;">
                <a-icon type="bar-chart" />
              </div>
            </a-col>
            <a-col :span="17">
              <p>开通航线</p>
              <h2>223</h2>
              <p>
                本月新开
                <span>8</span> 条
              </p>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-row>
            <a-col :span="7">
              <div class="icon-bg" style="background: #52c41a;">
                <a-icon type="dot-chart" />
              </div>
            </a-col>
            <a-col :span="17">
              <p>本年度运送旅客量</p>
              <h2>8,132,000</h2>
              <p>
                昨日运送
                <span>23,764</span> 人次
              </p>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-row>
            <a-col :span="7">
              <div class="icon-bg" style="background: #eb2f96;">
                <a-icon type="line-chart" />
              </div>
            </a-col>
            <a-col :span="17">
              <p>本年度订单总量</p>
              <h2>33,524,000</h2>
              <p>
                昨日新增
                <span>4,874</span> 单
              </p>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Overview"
};
</script>

<style lang="less" scoped>
.overview-wrapper .gutter-box {
  height: 150px;
  background: #fff;
  padding: 25px;
  .icon-bg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    color: #fff;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
