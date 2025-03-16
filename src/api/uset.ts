import API from './index'

export function list() {
  return API.Get('/mock/user/list')
}

const UserApi = {
  list,
}

export default UserApi
