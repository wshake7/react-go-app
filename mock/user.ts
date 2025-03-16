import type { MockMethod } from 'vite-plugin-mock'

const list: MockMethod = {
  url: '/mock/user/list',
  method: 'get',
  response: async () => {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    return {
      code: 200,
      message: 'success',
      data: {
        list: [
          {
            id: 1,
            name: '张三',
          },
        ],
      },
    }
  },
}

export default [
  list,
] as MockMethod[]
