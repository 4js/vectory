<template>
    <a-row :gutter="16" class="ticket-wrapper">
      <a-col class="gutter-row" :span="8">
          <div class="left-ticket">
              <div class="total"></div>
              <div class="other"></div>
          </div>
      </a-col>
      <a-col class="gutter-row" :span="16">
            <div class="right-ticket">
                <a-row :gutter="16" style="margin-bottom: 20px">
                    <a-col :span="18"><div>18</div></a-col>
                    <a-col :span="6"><div>6</div></a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12"><div>12</div></a-col>
                    <a-col :span="12"><div>12</div></a-col>
                </a-row>
            </div>
      </a-col>
    </a-row>
</template>

<script>
// import Aoverview from './components/overview.vue'

export default {
  name: 'Ticket',
}
</script>

<style lang="less" scoped>
.ticket-wrapper{
    margin-top: 20px;
    height: 400px;
    // .left-ticket,.right-ticket{
    //     padding: 20px;
    // }
    .left-ticket{
        .total{
            margin-bottom: 20px;
        }
        .total,.other{
            height: 260px;
            background: #fff;
        }
    }
    .right-ticket {
        .right-top{
            margin-bottom: 20px;
        }
        .ant-col-18>div,.ant-col-6>div{
            background: #fff;
            height: 300px;
            padding: 20px;
        }
        .ant-col-12>div{
            background: #fff;
            height: 220px;
            padding: 20px;
        }
    }
}
</style>
