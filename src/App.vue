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
  <v-app>
    <v-container>

      <v-row dense>
        <!-- <v-card> -->
        <v-text-field bg-color="white" clearable v-model="searchText" label="search" style="border-radius: 50%;">
        </v-text-field>
        <v-select bg-color="white" clearable v-model="selectedFilters" :items="filters" label="filters" chips closable
          multiple style="border-radius: 50%;"></v-select>
        <!-- </v-card> -->
      </v-row>
      <br>
      <br>
      <v-row dense>
        <!-- <v-list lines="three"> -->
        <Job v-for="job in filterData" key="job.id" v-model:filters="selectedFilters" :job="job"></Job>
        <!-- </v-list> -->

      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
body {
  font-size: 15px;
}

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

/* Light Grayish Cyan (Background): hsl(180, 52%, 96%) */
/* - Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%) */
/* - Dark Grayish Cyan: hsl(180, 8%, 52%) */
/* - Very Dark Grayish Cyan: hsl(180, 14%, 20%) */
</style>
