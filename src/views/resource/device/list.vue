<template>
  <div class="device-list-wrapper">
    <div class="table-operator">
      <router-link to="/resource/device/add">
        <a-button type="primary" icon="plus">新建</a-button>
      </router-link>
      <a-button
        type="dashed"
        @click="tableOption"
        style="margin-left: 8px"
      >{{ optionAlertShow && '关闭' || '开启' }} alert</a-button>
      <a-dropdown v-action:edit v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1">
            <a-icon type="delete"/>删除
          </a-menu-item>
          <!-- lock | unlock -->
          <a-menu-item key="2">
            <a-icon type="lock"/>锁定
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down"/>
        </a-button>
      </a-dropdown>
    </div>
    <a-alert type="info" showIcon>
      <div slot="message">已选择: {{selectedRowKeys.length}} 服务调用次数总计 4861 次</div>
    </a-alert>
    <a-table
      :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :dataSource="data"
    >
      <a-table-column title="名称" data-index="name" key="name"/>
      <a-table-column title="状态" data-index="status" key="status"/>
      <a-table-column title="类型" data-index="type" key="type"/>
      <a-table-column title="主机名" data-index="host" key="host"/>
      <a-table-column title="存储池" data-index="pools" key="pools"/>
      <a-table-column title="Action" key="action">
        <template slot-scope="text, record">
          <span>
            <a href="javascript:;">Action 一 {{record.firstName}}</a>
            <a-divider type="vertical"/>
            <a href="javascript:;">Delete</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
const data = [
  {
    key: "1",
    name: "John",
    status: "online",
    type: "VirtualBox",
    host: "innotek GmbH",
    pools: "dsafsd"
  },
  {
    key: "2",
    name: "John",
    status: "online",
    type: "VirtualBox",
    host: "innotek GmbH",
    pools: "dsfasa"
  },
  {
    key: "3",
    name: "John",
    status: "online",
    type: "VirtualBox",
    host: "innotek GmbH",
    pools: "dsfasa"
  }
];

export default {
  name: "deviceList",
  data() {
    return {
      data,
      optionAlertShow: false,
      selectedRowKeys: []
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    tableOption() {
      if (!this.optionAlertShow) {
        this.options = {
          alert: {
            show: true,
            clear: () => {
              this.selectedRowKeys = [];
            }
          },
          rowSelection: {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange,
            getCheckboxProps: record => ({
              props: {
                disabled: record.no === "No 2", // Column configuration not to be checked
                name: record.no
              }
            })
          }
        };
        this.optionAlertShow = true;
      } else {
        this.options = {
          alert: false,
          rowSelection: null
        };
        this.optionAlertShow = false;
      }
    },
    onSelectChange(selectedRowKeys) {
      /* eslint-disable */
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    }
  }
};
</script>

<style>
.ant-alert{
  margin: 30px 0;
}
</style>
