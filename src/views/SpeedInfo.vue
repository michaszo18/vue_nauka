<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        max-width="1000px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <MyStepper/>
    </v-dialog>
  </v-row>
</template>


<script>
import MyStepper from "@/components/MyStepper";
export default {
  name: "SpeedInfo",
  components: {MyStepper}
}
</script>

<style scoped>

</style>