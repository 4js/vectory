<template>
    <a-row :gutter="16" class="ticket-wrapper">
      <a-col class="gutter-row" :span="8">
          <div class="left-ticket">
              <div class="total">
                  <h3>飞机利用率</h3>
                  <a-airplane></a-airplane>
              </div>
              <div class="other">
                  <h3>实时订单数量</h3>
                  <a-order></a-order>
              </div>
          </div>
      </a-col>
      <a-col class="gutter-row" :span="16">
            <div class="right-ticket">
                <a-row style="margin-bottom: 20px;">
                    <a-col :span="24">
                        <div>
                            <h3>周运送客数据</h3>
                            <a-passenger></a-passenger>
                        </div>
                    </a-col>
                    <!-- <a-col :span="6">
                        <div><h3>机队分布</h3></div>
                    </a-col> -->
                </a-row>
                <div style="background: #fff;">
                    <h3>集群监控</h3>
                    <a-row :gutter="10" style="padding: 10px 20px;text-align: center;">
                        <a-col :span="6">
                            <a-jiqun name="航班延误率" icon="bar-chart" num="30" color="#fa541c" key="1">
                                <span slot="left">平均延误 <b>23</b> min</span>
                                <span slot="right">周同比 <b>20</b>% <a-icon type="caret-down" /></span>
                            </a-jiqun>
                        </a-col>
                        <a-col :span="6">
                            <a-jiqun name="航班靠桥率" icon="radar-chart" num="89" color="#1890ff" key="2">
                                <span slot="left">周同比 <b>3</b>% <a-icon type="caret-up" /></span>
                            </a-jiqun>
                        </a-col>
                        <a-col :span="6">
                            <a-jiqun name="航班取消率" icon="fund" num="3" color="#eb2f96" key="3">
                                <span slot="left">周同比 <b>3</b>% <a-icon type="caret-down" /></span>
                            </a-jiqun>
                        </a-col>
                        <a-col :span="6">
                            <a-jiqun name="网上值机率" icon="rise" num="64" color="#13c2c2" key="4">
                                <span slot="left">周同比 <b>1</b>% <a-icon type="caret-up" /></span>
                            </a-jiqun>
                        </a-col>
                    </a-row>
                </div>
            </div>
      </a-col>
    </a-row>
</template>

<script>
import AAirplane from './airplane'
import AOrder from './order'
import APassenger from './passenger'
import AJiqun from './jiqun'
export default {
  name: 'Ticket',
  components: {
      AAirplane,
      AOrder,
      APassenger,
      AJiqun
  }
}
</script>

<style lang="less" scoped>
.ticket-wrapper{
    margin-top: 20px;
    height: 400px;
    // .left-ticket,.right-ticket{
    //     padding: 20px;
    // }
    h3{
        font-size: 14px;
        color: #2c3e50;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
    }
    .left-ticket{
        .total{
            margin-bottom: 20px;
        }
        .total,.other{
            height: 300px;
            background: #fff;
        }
    }
    .right-ticket {
        .right-top{
            margin-bottom: 20px;
        }
        .ant-col-24>div{
            background: #fff;
            height: 400px;
            // padding: 20px;
        }
    }
}
</style>
