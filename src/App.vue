<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import Job from './components/JobElement.vue'
import { jobsStore } from '@/stores/jobs'

const { fetchData } = jobsStore()
const { jobs, isLoading } = storeToRefs(jobsStore())

const searchText = ref('')
const filters = computed(() => {
  return Array.from(new Set(jobs.value.map(job => [job.level, ...job.tools, ...job.languages])
    .reduce((accum, el) => accum.concat(el), [])))
})
const selectedFilters = ref([])
const filterData = computed(() => {
  return (jobs.value && searchText.value !== null)
    ? jobs.value.filter(job => job.searchText.includes(searchText.value.toLowerCase())
      && selectedFilters.value.every(tag => job.tags.includes(tag)))
    : jobs.value
})
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
      <div v-if="isLoading" class="d-flex justify-center">
        <v-progress-circular indeterminate :size="56" />
      </div>
      <div v-if="!isLoading">
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
