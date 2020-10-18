<template>
  <div class="ma-2 pa-5">
    <v-autocomplete
        color="#e67e22"
        v-model="values"
        :items="items"
        outlined
        dense
        chips
        small-chips
        label=""
        multiple
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "roles",
  data: () => ({
    items: ['web developer', 'java developer', 'webmethods developer',],
    values: ['java developer'],
    value: null,
  }),
}
</script>
