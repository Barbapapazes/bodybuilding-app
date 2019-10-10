<template lang="pug">
  v-footer(inset, app)
    v-row(no-gutters)
      v-col(cols="6", align="center")
        v-btn(text, x-small, to="/about/privacy-cookies").font-weight-light privacy &amp; cookies
      v-col(cols="6", align="center")
        v-btn(text, x-small, to="/about/terms-of-use").font-weight-light terms of use
</template>

<script>
export default {}
</script>
