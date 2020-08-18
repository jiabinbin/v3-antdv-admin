<template>
  <a-card
    title="创建表单"
  >
    <a-form
      :labelCol="layout"
      @onFinish="onFinish"
      @onFinishFailed="onFinishFailed"
      layout="inline"
    >
      <a-form-item
        label="Field1"
        name="filed1"
        :rules="{ required: true, message: 'Please input Field1!' }"
      >
        <a-input
          placeholder="请输入"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="Field2"
        name="filed2"
        :rules="{ required: true, message: 'Please input Field2!' }"
      >
        <a-input
          placeholder="请输入"
        ></a-input>
      </a-form-item>
      <a-form-item
        label="Field3"
        name="filed3"
        :rules="{ required: true, message: 'Please select Field2!' }"
      >
        <a-select
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
import { markRaw } from '@vue/reactivity'

export default {
  name: 'CreateForm',
  setup (props, context) {
    // const { ctx } = getCurrentInstance()

    const state = markRaw({
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      }
    })

    const onFinish = values => {
      console.log(values)
    }
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }

    return {
      ...state,
      onFinish,
      onFinishFailed
    }
  }
}
</script>

<style scoped>

</style>
