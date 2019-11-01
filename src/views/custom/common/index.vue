<template>
  <div>
    <transition name="search-fade">
      <a-search v-if="showSearch"></a-search>
    </transition>
    <div class="main-box">
      <div style="margin-bottom: 16px;display:flex;justify-content:space-between;">
        <div class="left-operate">
          <a-button
            class="btn-operate"
            type="primary"
            @click="start"
            :loading="loading"
          >新增</a-button>
          <a-button
            class="btn-operate"
            type="primary"
            @click="start"
            :loading="loading"
          >修改</a-button>
          <a-button
            class="btn-operate"
            type="primary"
            @click="start"
            :loading="loading"
          >删除</a-button>
          <a-button
            class="btn-operate"
            type="primary"
            @click="start"
            :loading="loading"
          >导入</a-button>
          <a-button
            class="btn-operate"
            type="primary"
            @click="start"
            :loading="loading"
          >导出</a-button>
        </div>
        <div class="right-operate" style="text-align:right;">
          <a-button-group>
            <a-button icon="search" @click="handleChangeSearch" />
            <a-button icon="reload" />
            <!-- <a-button icon="table" /> -->
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <a-icon type="user" />1st menu item
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="user" />2nd menu item
                </a-menu-item>
                <a-menu-item key="3">
                  <a-icon type="user" />3rd item
                </a-menu-item>
              </a-menu>
              <a-button>
                <a-icon type="table" />
                <!-- <a-icon type="caret-down" /> -->
              </a-button>
            </a-dropdown>
          </a-button-group>
        </div>
        <!-- <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{`Selected ${selectedRowKeys.length} items`}}
        </template>
        </!-->
      </div>
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :columns="columns"
        :dataSource="data"
      />
    </div>
  </div>
</template>

<script>
import ASearch from "./components/search";
const columns = [
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "年龄",
    dataIndex: "age"
  },
  {
    title: "联系地址",
    dataIndex: "address"
  },
  {
    title: "联系电话",
    dataIndex: "telephone"
  },
  {
    title: "客户级别",
    dataIndex: "level"
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}
export default {
  name: "commonCustom",
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      showSearch: false
    };
  },
  components: {
    ASearch
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    handleChangeSearch() {
      this.showSearch = !this.showSearch;
    },
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    }
  }
};
</script>

<style lang="less" scoped>
.btn-operate {
  margin-right: 10px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.search-fade-enter-active {
  transition: all 0.3s ease;
}
.search-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.search-fade-enter, .search-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
