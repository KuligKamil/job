<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Job from './components/JobElement.vue'
import { jobsStore } from '@/stores/jobs'

const { fetchData } = jobsStore()
const { selectedFilters, searchText, filterData, loading, filters } = storeToRefs(jobsStore())

fetchData()
</script>

<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="6">
          <v-text-field v-model="searchText" bg-color="white" clearable label="search 🔍" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-select
            v-model="selectedFilters" bg-color="white" clearable :items="filters" label="filters" chips closable
            multiple
          />
        </v-col>
      </v-row>
      <div v-if="loading" class="d-flex justify-center">
        <v-progress-circular indeterminate :size="56" />
      </div>
      <div v-if="!loading">
        <Job v-for="job in filterData" :key="job.id" v-model:filters="selectedFilters" :job="job" />
      </div>
    </v-container>
  </v-app>
</template>

<style scoped>
body {
  font-size: 15px;
}
</style>
