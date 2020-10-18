<template>
  <div class="ma-2 pa-5">
    <v-autocomplete
        v-model="values"
        :items="items"
        outlined
        dense
        chips
        small-chips
        label="Outlined"
        multiple
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "MainCompetences",
  data: () => ({
    items: ['java', 'php', 'js', 'webmethods'],
    values: ['java', 'webmethods'],
    value: null,
  }),
}
</script>
