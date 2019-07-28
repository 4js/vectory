<template>
  <div>
    <div v-for="(item,index) in listObj" :key="index">
      <p>{{ item.name }}</p>
      <el-checkbox v-model="item.checkAll" :indeterminate="item.isIndeterminate" @change="checked => handleCheckAllChange(checked,item, index)">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="item.checkedCities" @change="checked => handleCheckedCitiesChange(checked,item, index)">
        <el-checkbox v-for="city in item.osds" :key="city.name" :label="city.name">{{ city.name }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-button @click="postForm">确定</el-button>
  </div>
</template>
<script>
import request from '@/utils/request';
export default {
  data() {
    return {
      listObj: [
        {
          isIndeterminate: false,
          checkAll: false,
          name: '选项一',
          cities: [
            {
              name: '北京',
              value: 'beijing',
            }, {
              name: '上海',
              value: 'shanghai',
            }, {
              name: '广州',
              value: 'guangzhou',
            }, {
              name: '深圳',
              value: 'shenzhen',
            },
          ],
          checkedCities: [],
        },
        {
          isIndeterminate: false,
          checkAll: false,
          name: '选项二',
          cities: [{
            name: '上海',
            value: 'shanghai',
          }, {
            name: '广州',
            value: 'guangzhou',
          }, {
            name: '深圳',
            value: 'shenzhen',
          }],
          checkedCities: [],
        },
      ],
    };
  },
  mounted() {
    request({
      url: '/api/devicegroups/shebeizu',
      method: 'get',
    }).then(res => {
      const list = res.data.hosts;
      const result = list.map(item => {
        return {
          isIndeterminate: false,
          checkAll: false,
          checkedCities: [],
          ...item,
        };
      });
      this.listObj = result;
    });
  },
  methods: {
    handleCheckAllChange(val, item, index) {
      const all = item.osds.map(item => item.name);
      this.listObj[index].checkedCities = val ? all : [];
      this.listObj[index].isIndeterminate = false;
    },
    handleCheckedCitiesChange(val, item, index) {
      const maxLength = this.listObj[index].osds.length;
      const checkedCount = val.length;
      this.listObj[index].checkAll = checkedCount === maxLength;
      this.listObj[index].isIndeterminate = checkedCount > 0 && checkedCount < maxLength;
    },
    postForm() {
      const arr = [];
      this.listObj.map((item) => {
        if (item.checkedCities.length) {
          arr.push({
            name: item.name,
            osds: item.checkedCities,
          });
        }
      });
      console.log(arr);
    },
  },
};
</script>
