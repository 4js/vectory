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
        :pagination="{pageSize: 20}"
      >
        <span slot="model" slot-scope="text, record">
          <a v-if="record.model===1">波音</a>
          <a v-if="record.model===2">空客</a>
          <a v-if="record.model===3">中国商飞</a>
          <a v-if="record.model===4">庞巴迪</a>
          <a v-if="record.model===5">新舟</a>
        </span>
        <span slot="level" slot-scope="text, record">
          <a v-if="record.level===1">宽体机</a>
          <a v-if="record.level===2">中型机</a>
          <a v-if="record.level===3">小型机</a>
        </span>
      </a-table>
        <a-modal title="新增客机" cancelText="取消" okText="确定" v-model="addModalVisible" @ok="addModalHandleOk" @cancel="addModalVisible=false">
            <a-form :form="form">
                <a-form-item label="编号" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['serial', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="品牌" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-select
											v-decorator="[
											'model',
											{ rules: [{ required: true, message: 'Please select your gender!' }] },
											]"
											placeholder="Select a option and change input text above"
									>
											<a-select-option value="1">波音</a-select-option>
											<a-select-option value="2">空客</a-select-option>
											<a-select-option value="3">中国商飞</a-select-option>
											<a-select-option value="4">庞巴迪</a-select-option>
											<a-select-option value="5">新舟</a-select-option>
									</a-select>
                </a-form-item>
                <a-form-item label="型号" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['type', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="座位数" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['seats', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
								<a-form-item label="商务舱" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['seats_business', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="经济舱" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['seats_economy', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="等级" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-select
											v-decorator="[
											'level',
											{ rules: [{ required: true, message: 'Please select your gender!' }] },
											]"
											placeholder="Select a option and change input text above"
									>
											<a-select-option value="1">宽体机</a-select-option>
											<a-select-option value="2">中型机</a-select-option>
											<a-select-option value="3">小型机</a-select-option>
									</a-select>
                </a-form-item>
								<a-form-item label="航程" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-input
											v-decorator="['mileage', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
                <a-form-item label="出厂日期" :label-col="labelCol" :wrapper-col="wrapperCol">
									<a-date-picker
                    format="YYYY-MM-DD"
										v-decorator="['birth', { rules: [{ required: true, message: 'Please input your note!' }] }]"
									/>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
  </div>
</template>

<script>
import { queryPlane, addPlane } from '@/api/api'

import ASearch from "./components/search";
const columns = [
  {
    title: "ID",
    key: 'plane_id',
    dataIndex: "plane_id"
  },
  {
    title: "编号",
    key: 'serial',
    dataIndex: "serial"
  },
  {
    title: "品牌",
    key: 'model',
    dataIndex: "model",
    scopedSlots: { customRender: 'model' }
  },
  {
    title: "型号",
    dataIndex: "type",
    key: 'type'
  },
  {
    title: "座位数",
    key: 'seats',
    dataIndex: "seats"
  },
  {
    title: "商务舱",
    key: 'seats_business',
    dataIndex: "seats_business"
  },
  {
    title: "经济舱",
    key: 'seats_economy',
    dataIndex: "seats_economy"
  },
  {
    title: "客机等级",
    key: 'level',
    dataIndex: "level",
    scopedSlots: { customRender: 'level' }
  },
  {
    title: "航程",
    key: 'mileage',
    dataIndex: "mileage"
  },
  {
    title: "出厂日期",
    key: 'birth',
    dataIndex: "birth"
  },
];

export default {
  name: "visitorPlane",
  data() {
    return {
      columns,
      data: [],
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      showSearch: false,
      addModalVisible: false,
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
			queryPlane().then(res => {
				res.forEach(item => item.key = item.plane_id) // table组件加key
				this.data = res
			})
		},
    addModalHandleOk(e){
			let _this = this
			e.preventDefault();
      this.form.validateFields((error, values) => {
				if(!error){
          console.log(values)
					// level要转成数字
					// addPlane(Object.assign(values, { level: Number(values.level) })).then(res => {
					// 	_this.$message.success('添加成功');
					// 	_this.getAllCity();
					// 	_this.addModalVisible = false;
					// })
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

