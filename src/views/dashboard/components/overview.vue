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
              <p>源系统总数</p>
              <h2>543</h2>
              <p>接入表 <span>974</span></p>
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
              <p>接入总量</p>
              <h2>1,233,524,000</h2>
              <p>昨日新增 <span>332,344,974</span></p>
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
              <p>数据交换总量</p>
              <h2>843,732,000</h2>
              <p>昨日新增 <span>3,764</span></p>
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
              <p>订单总量</p>
              <h2>76,233,524,000</h2>
              <p>昨日新增 <span>2,984,874</span></p>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>

export default {
  name: 'Overview',
}
</script>

<style lang="scss" scoped>
.overview-wrapper .gutter-box{
    height: 150px;
    background: #fff;
    padding: 25px;
    .icon-bg{
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
