<template lang="pug">
  v-card(elevation="0").background#time-rep
    v-card-text
      v-row(no-gutters)
        v-col(cols="12", md="6", offset-md="3")
          v-text-field(clearable, label="Repetitions", type="number", name="repetition", v-model="rep", :disabled="apply", :rules="repRules", ref="rep", @input="repNegative(rep)" @keyup.enter="setConfig")
        v-col(cols="12", md="10", offset-md="1", align="center")
          v-time-picker(use-seconds, format="24hr", scrollable, :allowed-seconds="allowedStep", v-model='time', :disabled="apply" color='primary')
    v-card-actions
      v-hover(v-slot:default="{hover}")
        v-btn(@click="setConfig", :disabled="valideData", :elevation="hover ? 12 : 0").primary {{apply ? "edit": "apply"}}
</template>

<script>
export default {
  data() {
    return {
      rep: '',
      time: '',
      apply: false,
      valideData: true,
      allowedStep: s => s % 5 === 0,
      repRules: [value => !!value || 'Required']
    }
  },
  mounted() {
    const config = this.getConfig
    if (config.rep == 0) {
      return
    }
    this.rep = config.rep
    this.time = config.timer
    this.apply = true
  },
  methods: {
    setConfig() {
      if (this.apply == true) {
        this.apply = false
        return
      }
      if (!this.$refs.rep.validate()) return
      this.apply = true
      const config = { rep: this.rep, timer: this.time }
      this.$store.dispatch('setConfig', config)
    },
    repNegative: function(value) {
      if (value < 1) {
        this.rep = ''
        this.$refs.rep.lazyValue = this.rep
      }
    }
  },
  computed: {
    getConfig() {
      return this.$store.getters.config
    }
  },
  watch: {
    rep: function(a) {
      if (Number.isInteger(Number(a))) {
        this.valideData = false
      }
    }
  }
}
</script>

<style>
.v-picker {
  box-shadow: none;
}
</style>
