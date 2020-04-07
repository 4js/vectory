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
            @click="addModalVisible=true"
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
      </div>
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :columns="columns"
        :dataSource="data"
      >
         <span slot="level" slot-scope="text, record">
            <a v-if="record.level===1">4F</a>
            <a v-if="record.level===2">4E</a>
            <a v-if="record.level===3">4D</a>
            <a v-if="record.level===4">3D</a>
        </span>
      </a-table>
        <a-modal title="新增城市" cancelText="取消" okText="确定" v-model="addModalVisible" @ok="addModalHandleOk" @cancel="addModalVisible=false">
            <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-form-item label="城市" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['city_name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
								<a-form-item label="三字码" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['city_iata', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
								<a-form-item label="机场" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['city_airport', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="级别" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-select
											v-decorator="[
											'level',
											{ rules: [{ required: true, message: 'Please select your gender!' }] },
											]"
											placeholder="Select a option and change input text above"
									>
											<a-select-option value="1">4F</a-select-option>
											<a-select-option value="2">4E</a-select-option>
											<a-select-option value="3">4D</a-select-option>
											<a-select-option value="4">3D</a-select-option>
									</a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
  </div>
</template>

<script>
import { queryCity, addCity } from '@/api/api'

import ASearch from "./components/search";
const columns = [
  {
    title: "ID",
    key: 'city_id',
    dataIndex: "city_id"
  },
  {
    title: "城市",
    key: 'city_name',
    dataIndex: "city_name"
  },
  {
    title: "三字码",
    key: 'city_iata',
    dataIndex: "city_iata"
  },
  {
    title: "机场全称",
    key: 'city_airport',
    dataIndex: "city_airport"
  },
  {
    title: "级别",
    dataIndex: "level",
    key: 'level',
    scopedSlots: { customRender: 'level' }
  }
];

export default {
  name: "airlineCity",
  data() {
    return {
      columns,
      data: [],
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      showSearch: false,
      addModalVisible: false,
			formLayout: 'horizontal',
			labelCol: {span: 4},
			wrapperCol: {span: 20},
      form: this.$form.createForm(this, { name: 'coordinated' })
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
  created(){
    this.getAllCity()
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
		},
		getAllCity(){
			queryCity().then(res => {
				res.forEach(item => item.key = item.city_id) // table组件加key
				this.data = res
			})
		},
    addModalHandleOk(e){
			let _this = this
			e.preventDefault();
      this.form.validateFields((error, values) => {
				if(!error){
					// level要转成数字
					addCity(Object.assign(values, { level: Number(values.level) })).then(res => {
						_this.$message.success('添加成功');
						_this.getAllCity();
						_this.addModalVisible = false;
					})
				}
      });
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
