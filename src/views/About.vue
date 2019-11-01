<template lang="pug">
#about
  v-container
    v-row(v-if="$vuetify.breakpoint.smAndUp")

      v-col(cols="4", align="center")
        v-btn(:to="{name: 'this-website'}", depressed) this website

      v-col(cols="4", align="center")
        v-btn(:to="{name: 'privacy-cookies'}", depressed) privacy &amp; cookies

      v-col(cols="4", align="center")
        v-btn(:to="{name: 'terms-of-use'}", depressed) terms of use

    v-row(v-else)

      v-col(cols="12", align="end")
        v-menu(offset-y)
          template(v-slot:activator="{ on }")
            v-btn(depressed, v-on="on") choose a page
          v-list(flat).primary--text.text-capitalize
            v-list-item(:to="{name: 'this-website'}")
              v-list-item-title this website
            v-list-item(:to="{name: 'privacy-cookies'}")
              v-list-item-title privacy &amp; cookies
            v-list-item(:to="{name: 'terms-of-use'}")
              v-list-item-title terms of use
  router-view
</template>