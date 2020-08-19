<template>
  <a-card
    title="创建表单"
  >
    <a-form
      :labelCol="layout"
      :model="formState"
      @submit="onSubmit"
      layout="inline"
      :rules="formRules"
    >
      <a-form-item
        label="Field1"
        name="field1"
      >
        <a-input
          v-model:value="formState.field1"
          placeholder="请输入"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="Field2"
        name="field2"
      >
        <a-input
          v-model:value="formState.field2"
          placeholder="请输入"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="Field3"
        name="field3"
      >
        <a-select
          v-model:value="formState.field3"
          style="width: 120px"
          placeholder="请请选"
        >
          <a-select-option value="1">成功</a-select-option>
          <a-select-option value="2">失败</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" htmlType="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { defineComponent, markRaw, reactive } from 'vue'

export default defineComponent({
  name: 'CreateForm',
  setup (props, context) {
    // const { ctx } = getCurrentInstance()

    const state = markRaw({
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      }
    })

    const formState = reactive({
      field1: '',
      field2: '',
      field3: ''
    })

    const formRules = markRaw({
      field1: [
        { required: true, message: '请输入' }
      ],
      field2: [
        { required: true, message: '请输入' }
      ],
      field3: [
        { required: true, message: '请选择', trigger: 'change' }
      ]
    })

    const onFinish = values => {
      console.log(values)
    }
    const onSubmit = errorInfo => {
      console.log(formState)
    }
    return {
      ...state,
      formState,
      formRules,
      onFinish,
      onSubmit
    }
  }
})
</script>

<style scoped>

</style>
