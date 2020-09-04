import { defineComponent, reactive, markRaw } from 'vue'

export default defineComponent({
  name: 'FormJsx',
  setup (props, content) {
    const formState = reactive({
      userName: '',
      password: '',
      email: '',
      qq: '',
      mobile: ''
    })

    const formRules = markRaw({
      userName: [
        {
          required: true,
          message: 'UserName is required'
        }
      ],
      password: [
        {
          required: true,
          message: 'password is required'
        }
      ],
      email: [
        {
          required: true,
          message: 'email is required'
        }
      ]
    })

    const onSubmit = e => {
      console.log('submit', formState)
    }

    return () => (
      <PageWrapper>
        <a-card
          title="JSX Form"
        >
          <a-form
            model={formState}
            rules={formRules}
            onSubmit={onSubmit}
          >
            <a-form-item
              label="UserName"
              name="userName"
            >
              <a-input
                placeholder="please input UserName"
                v-model={[formState.userName, 'value']}
              ></a-input>
            </a-form-item>
            <a-form-item
              label="Password"
              name="password"
            >
              <a-input-password
                placeholder="please input Password"
                v-model={[formState.password, 'value']}
              ></a-input-password>
            </a-form-item>
            <a-form-item
              label="Email"
              name="email"
            >
              <a-input
                placeholder="please input Email"
                v-model={[formState.email, 'value']}
              ></a-input>
            </a-form-item>
            <a-form-item
              label="QQ"
              name="qq"
            >
              <a-input
                placeholder="please input QQ"
                v-model={[formState.qq, 'value']}
              ></a-input>
            </a-form-item>
            <a-form-item
              label="Mobile"
              name="mobile"
            >
              <a-input
                placeholder="please input Mobile"
                v-model={[formState.mobile, 'value']}
              ></a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" htmlType="submit">提交</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </PageWrapper>
    )
  }
})
