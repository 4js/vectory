const loading = {
  data () {
    return {
      spinning: false
    }
  },
  methods: {
    loadingStart () {
      this.spinning = true
    },
    loadingEnd () {
      this.spinning = false
    },
  }
}

export default loading