<template lang="pug">
  v-card#time-rep
    v-card-text
      v-row(no-gutters)
        v-col(cols="12", md="6", offset-md="3")
          v-text-field(clearable, label="Repetitions", type="number", name="repetition", v-model="rep", :disabled="apply", :rules="repRules", ref="rep", @input="repNegative(rep)")
        v-col(cols="12", md="10", offset-md="1", align="center")
          v-time-picker(use-seconds, format="24hr", scrollable, :allowed-seconds="allowedStep", v-model='time', :disabled="apply" color='primary', elevation-0)
    v-card-actions
      v-btn(@click="applyConfig", :disabled="valideData") {{apply ? "edit": "apply"}}
</template>

<script>
export default {
  data() {
    return {
      rep: '',
      apply: false,
      time: '',
      valideData: true,
      allowedStep: s => s % 5 === 0,
      repRules: [value => !!value || 'Required']
    }
  },
  methods: {
    applyConfig() {
      if (this.apply == true) {
        this.apply = false
        return
      }
      if (!this.$refs.rep.validate()) return
      this.apply = true
      this.$store.dispatch('changeConfig', { rep: this.rep, timer: this.time })
    },
    repNegative: function(value) {
      if (value < 1) {
        this.rep = 1
        this.$refs.rep.lazyValue = this.rep
      }
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
