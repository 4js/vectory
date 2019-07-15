<template>
  <div class="cluster-wrapper">
    <a-form :form="form" @submit="handleSubmit" layout="horizontal">
            <a-form-item label="拥有权限">
              <a-row :gutter="16" v-for="(permission, index) in permissions" :key="index">
                <a-col :xl="4" :lg="24">
                  {{ permission.name }}：
                </a-col>
                <a-col :xl="20" :lg="24">
                  <a-checkbox
                    v-if="permission.actionsOptions.length > 0"
                    :indeterminate="permission.indeterminate"
                    :checked="permission.checkedAll"
                    @change="onChangeCheckAll($event, permission)">
                    全选
                  </a-checkbox>
                  <a-checkbox-group :options="permission.actionsOptions" v-model="permission.selected" @change="onChangeCheck(permission)" />
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item>
               <a-button
                type="primary"
                html-type="submit"
              >
                Submit
              </a-button>
            </a-form-item>
          </a-form>
  </div>
</template>

<script>
// import APie from './components/pie'
// import ALine from './components/line'
// import APoint from './components/point'
export default {
  name: 'cluster',
  components: {
    //   APie,
    //   ALine,
    //   APoint
  },
  data () {
    return {
      form: this.$form.createForm(this),
      permissions: []
    }
  },
  created () {
    this.loadPermissions();
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let _this = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', _this.permissions);
        }
      });
    },
    onChangeCheck (permission) {
      permission.indeterminate = !!permission.selected.length && (permission.selected.length < permission.actionsOptions.length)
      permission.checkedAll = permission.selected.length === permission.actionsOptions.length
    },
    onChangeCheckAll (e, permission) {
      console.log('permission:', permission)
      Object.assign(permission, {
        selected: e.target.checked ? permission.actionsOptions.map(obj => obj.value) : [],
        indeterminate: false,
        checkedAll: e.target.checked
      })
    },
    loadPermissions () {
      // getPermissions().then(res => {
        const result = [
          {
            name: '权限1',
            actionData: [
              {
                describe: '新增',
                action: 'add'
              },
              {
                describe: '删除',
                action: 'delete'
              },
            ]
          },
          {
            name: '权限2',
            actionData: [
              {
                describe: '新增',
                action: 'add'
              },
              {
                describe: '删除',
                action: 'delete'
              },
            ]
          },
        ];
        this.permissions = result.map(permission => {
          const options = permission.actionData;
          permission.checkedAll = false
          permission.selected = []
          permission.indeterminate = false
          console.log('options', options);
          permission.actionsOptions = options.map(option => {
            return {
              label: option.describe,
              value: option.action
            }
          })
          console.log('permission', permission);
          return permission
        })
      // })
    }
  }
}
</script>

<style>
</style>
