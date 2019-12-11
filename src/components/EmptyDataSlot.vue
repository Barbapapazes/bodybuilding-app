<template lang="pug">
.data-empty
  v-row(justify="center", no-gutters)
    v-col(cols="6", align="center")
      v-divider.primary
    v-col(cols="12", align="center") 
      h4.text-capitalize.title.font-weight-black.mx-0.px-0.py-5
        slot
    v-col(cols="6", align="center")
      v-divider.primary
</template>