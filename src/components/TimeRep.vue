<template lang="pug">
  v-card#time-rep
    v-card-title
    v-card-text
      v-row
        v-col(cols="12", md="6", offset-md="3")
          v-text-field(clearable, label="Repetitions", type="number", name="repetition", v-model="rep", :disabled="apply")
        v-col(cols="12", md="10", offset-md="1", align="center")
          v-time-picker(use-seconds, format="24hr", scrollable, :allowed-seconds="allowedStep", :disabled="apply")
      p  {{ rep }}
    v-card-actions
      v-btn(@click="apply = !apply") {{apply ? "edit": "apply"}}
</template>

<script>
export default {
  data() {
    return {
      rep: '',
      apply: false,
      allowedStep: s => s % 5 === 0
    }
  }
}
</script>
