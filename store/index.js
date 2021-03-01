// new Vuex.Store( {
//
//   state: {
//     pools: []
//   },
//   mutations: {
//     SET_POOLS_TO_STATE: (state, pools) => {
//       state.pools = pools
//     }
//   },
//   actions: {
//     GET_POOLS_FROM_API({commit}) {
//       return axios('https://greenoffice.in.ua/api/pools', {
//         method: "GET"
//       })
//         .then((pools) => {
//           return pools
//           commit('SET_POOLS_TO_STATE', pools.data)
//         })
//         .catch((error) => {
//           console.log(error)
//           return error
//         })
//     }
//   },
//   getters: {
//     POOLS(state) {
//       return state.pools
//     }
//   }
// })
//
