<template>
  <div class="search-box">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item
        label="用户名"
        :validate-status="userNameError() ? 'error' : ''"
        :help="userNameError() || ''"
      >
        <a-input
          v-decorator="[
            'userName',
            {rules: [{ required: true, message: 'Please input your username!' }]}
          ]"
          placeholder="Username"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="状态"
        :validate-status="passwordError() ? 'error' : ''"
        :help="passwordError() || ''"
      >
        <a-input
          v-decorator="[
            'password',
            {rules: [{ required: true, message: 'Please input your Password!' }]}
          ]"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">搜索</a-button>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" :disabled="hasErrors(form.getFieldsError())">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "search",
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this)
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.search-box {
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
}
</style>