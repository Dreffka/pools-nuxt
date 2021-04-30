
  export const actions = {
    async fetchPremiumPools(ctx) {
      const res = await fetch('https://admin.greenoffice.in.ua/api/pools/2')
      const premiumPools = await res.json()

      ctx.commit('updatePremiumPools', premiumPools)
    },
  async fetchStandartPools(ctx) {
    const res = await fetch('https://admin.greenoffice.in.ua/api/pools/1')
    const standartPools = await res.json()

    ctx.commit('updateStandartPools', standartPools)
    },

    async GET_SINGLE_POOL_FROM_API(ctx, id) {
      const res = await fetch('https://admin.greenoffice.in.ua/api/pool/'+id)
      const pool = await res.json()

      ctx.commit('UPDATE_SINGLE_POOL', pool)
    }
  }

  export const mutations = {
    updatePremiumPools(state, premiumPools) {
      state.premiumPools = premiumPools
    },
    updateStandartPools(state, standartPools) {
      state.standartPools = standartPools
    },

    UPDATE_SINGLE_POOL(state, pool) {
      state.pool = pool
    }
  }

  export const state = () => ({
    premiumPools: [],
    standartPools: [],
    pool: {}
  })

  export const getters = {
    allPremiumPools(state) {
      return state.premiumPools
    },

    allStandartPools(state) {
      return state.standartPools
    },

    SINGLE_POOL(state) {
      return state.pool
    }
  }
