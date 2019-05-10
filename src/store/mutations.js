// https://vuex.vuejs.org/en/mutations.html

export default {
  //
  GET_USERS(state, payload) {
    state.usersState = payload
    console.log(state.usersState)
  }
}
