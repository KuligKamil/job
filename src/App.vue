<script setup lang="ts">
import Job from "./components/JobElement.vue";
import { jobsStore } from '@/stores/jobs';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { jobs } = storeToRefs(jobsStore())
const searchText = ref("")
const filters = computed(() => {
  let filtersSet = new Set<string>([]);
  jobs.value.map(job => {
    filtersSet.add(job.level)
    job.tools.forEach(item => filtersSet.add(item))
    job.languages.forEach(item => filtersSet.add(item))
  })
  return Array.from(filtersSet)
})
const selectedFilters = ref([])
const filterData = computed(() => {
  return jobs.value
    ? jobs.value.filter(job => job.searchText.includes(searchText.value.toLowerCase())
      && selectedFilters.value.every(info => job.informations.includes(info)))
    : jobs.value
})
</script>

<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="6">
          <v-text-field bg-color="white" clearable v-model="searchText" label="search 🔍">
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-select bg-color="white" clearable v-model="selectedFilters" :items="filters" label="filters" chips closable
            multiple></v-select>
        </v-col>
      </v-row>
      <div>
        <Job v-for="job in filterData" key="job.id" v-model:filters="selectedFilters" :job="job"></Job>
      </div>
    </v-container>
  </v-app>
</template>

<style scoped>
body {
  font-size: 15px;
}
</style>
