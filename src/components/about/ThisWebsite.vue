<template lang="pug">
#this_website
  v-container
    v-row(no-gutters)
    
      v-col(cols="12", md="8", offset-md="2")
        h1.title.text-uppercase
          span.secondary--text.font-weight-bold Sport
          span.font-weight-thin Companion
        div.grey--text.text--darken-1.subtitle-1.font-italic.font-weight-bold.mb-8#subtitle A web application to help you during your workout!

        v-divider.background.lighten-2.mb-8

        div.body-1.text-justify
          p#content During a sport session, it is not uncommon to have a stopwatch, to count the series, and the recovery time. But you also have to think about concentrating to be efficient, and sometimes you forget about the number of sets or even the remaining recovery time.#[br]
          p#content That's why "#[span.text-uppercase.font-weight-bold.secondary--text#app-name-1 sport]#[span.text-uppercase.font-weight-thin#app-name-2 companion]" is made, it counts for you, and lets you focus on your exercises!

          div.body-1.mb-8 Find more information on the operation of this application #[a(href="https://github.com/Barbapapazes/bodybuilding-app/wiki", title="app wiki") here].

        v-divider.background.lighten-2.mb-8

        div.caption.font-weight-thin.text-right This web app is made with ❤ by Barbapapazes (#[a(href="https://github.com/barbapapazes", title="Github of Barbapapazes").primary--text My Github Repository]) and hosted by #[a(href="https://pages.github.com/", title="Github pages").primary--text Github Pages]!
  </template>

<style lang="scss">
#content,
#subtitle {
  text-indent: 20px;
}
</style>
