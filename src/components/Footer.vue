<template lang="pug">
#footer
  v-footer(inset, app)
    v-container.pa-0
      v-row(no-gutters)

        v-col(cols="6", align="center")

          v-btn(text, x-small, :to="{name: 'privacy-cookies'}").font-weight-light privacy &amp; cookies
        v-col(cols="6", align="center")

          v-btn(text, x-small, :to="{name: 'terms-of-use'}").font-weight-light terms of use
</template>