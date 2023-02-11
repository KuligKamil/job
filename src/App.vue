<script setup lang="ts">
import Job from "./components/JobElement.vue";
import { jobsStore } from '@/stores/jobs';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { jobs } = storeToRefs(jobsStore())
const searchText = ref("")
const filters = computed(() => {
  let a = new Set<string>([]);
  jobs.value.map(job => {
    a.add(job.level)
    job.tools.forEach(item => a.add(item))
    job.languages.forEach(item => a.add(item))
  })
  return Array.from(a)
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
  <v-container>
    <v-row dense>
      <v-text-field clearable v-model="searchText" label="search"></v-text-field>
      <v-select clearable v-model="selectedFilters" :items="filters" label="filters" chips closable multiple></v-select>
      <br>
      <br>
      <Job v-for="job in filterData" key="job.id" v-model:filters="selectedFilters" :job="job"></Job>
    </v-row>
  </v-container>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
