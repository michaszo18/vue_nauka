<template>
  <v-app>
      <SpeedInfo/>
  </v-app>
</template>

<script>
import SpeedInfo from "@/views/SpeedInfo";

export default {
  name: 'App',

  components: {
    SpeedInfo,

  },

  data: () => ({
    //
  }),
};
</script>
