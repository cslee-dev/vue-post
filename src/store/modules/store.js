import actions from '@/store/modules/actions'
import getters from '@/store/modules/getters'
import mutations from '@/store/modules/mutations'
import state from '@/store/modules/state'

const Post = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
}
export default Post
