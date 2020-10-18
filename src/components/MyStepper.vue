<template>
  <v-container>
    <v-card class="primary white--text pa-6">
      <v-card-title class="justify-center mb-4">
        <h2>Szybki kreator. Krok {{ currentStep }}/{{ steps }}</h2>
      </v-card-title>

      <v-stepper v-model="currentStep" vertical>

        <v-stepper-step color="secondary" :complete="currentStep > 1" step="1">Informacje podstawowe</v-stepper-step>
        <v-stepper-content step="1">
          <MainInfo/>
        </v-stepper-content>
        <v-stepper-step color="secondary" :complete="currentStep > 2" step="2">Stanowiska</v-stepper-step>
        <v-stepper-content step="2">
          <Roles/>
        </v-stepper-content>
        <v-stepper-step color="secondary" :complete="currentStep > 3" step="3">Główne kompetnecje</v-stepper-step>
        <v-stepper-content step="3">
          <MainCompetences/>
        </v-stepper-content>

      </v-stepper>

      <v-card-actions class="justify-center mt-4">
        <v-btn
            @click="prev"
            color="secondary"
            elevation="5"
        >
          <v-icon left>mdi-step-backward</v-icon>
          Wróć
        </v-btn>
        <v-btn
            @click="next"
            color="secondary"
            elevation="5"
        >Dalej
          <v-icon right>mdi-step-forward</v-icon>
        </v-btn>
        <v-btn v-if="currentStep===steps"
               @click="dialog = false"
               color="secondary"
               elevation="5"
        >Zapisz
          <v-icon right>mdi-content-save-all-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import MainInfo from "@/components/steps/MainInfo";
import Roles from "@/components/steps/Roles";
import MainCompetences from "@/components/steps/MainCompetences";

export default {
  components: {
    MainCompetences,
    MainInfo,
    Roles
  },

  data: () => ({
    currentStep: 1,
    steps: 3
  }),
  methods: {
    next() {
      if (this.currentStep < this.steps) {
        this.currentStep++;
      }
    },
    prev() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    }
  }
};
</script>

<style>

</style>