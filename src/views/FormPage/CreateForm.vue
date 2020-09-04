<template>
  <PageWrapper
    title="创建表单-template"
    sub-title="template"
  >
    <template v-slot:extra>
      <a-button key="3">
        Operation
      </a-button>
      <a-button key="2">
        Operation
      </a-button>
      <a-button key="1" type="primary">
        Primary
      </a-button>
    </template>
    <template v-slot:contentExtra>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="Created">
          Lili Qu
        </a-descriptions-item>
        <a-descriptions-item label="Association">
          <a>421421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Creation Time">
          2017-01-10
        </a-descriptions-item>
        <a-descriptions-item label="Effective Time">
          2017-10-10
        </a-descriptions-item>
        <a-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
      </a-descriptions>
    </template>
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
  </PageWrapper>
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
