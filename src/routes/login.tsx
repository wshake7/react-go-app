import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components'
import { createFileRoute } from '@tanstack/react-router'
import { Button, theme } from 'antd'
import { useState } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const { token } = theme.useToken()
  const [isRegister, setIsRegister] = useState(false)

  const loginHander = () => {
    console.warn('login')
  }
  const registerHander = () => {
    console.warn('register')
  }

  return (
    // grid布局 在屏幕顶部1/3处
    <div className="h-screen pt-32">
      <ProConfigProvider hashed={false}>
        <div style={{ backgroundColor: token.colorBgContainer }}>
          <LoginForm
            title="Go-app"
            subTitle="react-go"
            submitter={{
              searchConfig: {
                submitText: isRegister ? '注册' : '登录',
              },
              render(props, dom) {
                return [
                  !isRegister && (
                    <Button type="primary" className="w-full" key="login" onClick={loginHander}>
                      登录
                    </Button>
                  ),
                  isRegister && (
                    <div className="flex-1 space-y-4">
                      <Button type="primary" className="w-full" key="register" onClick={registerHander}>
                        注册
                      </Button>
                      <Button className="w-full" onClick={() => { setIsRegister(false) }}>
                        返回
                      </Button>
                    </div>
                  ),
                ]
              },
            }}
          >
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className="prefixIcon" />,
              }}
              placeholder="用户名: admin or user"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className="prefixIcon" />,
                strengthText:
                  'Password should contain numbers, letters and special characters, at least 8 characters long.',
                statusRender: (value) => {
                  const getStatus = () => {
                    if (value && value.length > 12) {
                      return 'ok'
                    }
                    if (value && value.length > 6) {
                      return 'pass'
                    }
                    return 'poor'
                  }
                  const status = getStatus()
                  if (status === 'pass') {
                    return (
                      <div style={{ color: token.colorWarning }}>
                        强度：中
                      </div>
                    )
                  }
                  if (status === 'ok') {
                    return (
                      <div style={{ color: token.colorSuccess }}>
                        强度：强
                      </div>
                    )
                  }
                  return (
                    <div style={{ color: token.colorError }}>强度：弱</div>
                  )
                },
              }}
              placeholder="密码: ant.design"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            {!isRegister && (
              <div
                style={{
                  marginBlockEnd: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  自动登录
                </ProFormCheckbox>
                <a
                  style={{
                    float: 'right',
                  }}
                  onClick={() => { setIsRegister(true) }}
                >
                  注册
                </a>
              </div>
            )}
          </LoginForm>
        </div>
      </ProConfigProvider>
    </div>
  )
};
