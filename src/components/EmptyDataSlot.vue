<template lang="pug">
.data-empty
  v-row(justify="center")
    v-col(cols="6", align="center")
      v-divider.primary
    v-col(cols="12", align="center") 
      h4.text-capitalize.title.font-weight-black
        slot
    v-col(cols="6")
      v-divider.primary
</template>