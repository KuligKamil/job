<script setup lang="ts">
import { jobsStore, type JobModel } from '@/stores/jobs';
const props = defineProps<{
  job: JobModel
}>()
</script>

<template>
  <v-col cols="12">

    <v-card elevation="24" outlined>
      <v-img width="50" class="image ma-4" :src="job.logo">
      </v-img>
      {{ job.searchText }}
      <v-card-title>{{ job.company }}
        <v-chip class="ma-2" color=" text-uppercase" v-if="job.new"> new! </v-chip>
        <v-chip class="ma-2" color=" text-uppercase" v-if="job.featured"> featured </v-chip>
      </v-card-title>
      <v-card-subtitle>
        {{ job.position }}
      </v-card-subtitle>

      <v-card-text>
        {{ job.postedAt }}
        <p class="dot"></p>
        {{ job.contract }}
        <p class="dot"></p>
        {{ job.location }}

        <v-divider class="mt-3 mb-3" insert></v-divider>
        <v-chip-group>
          <v-chip label> {{ job.level }}</v-chip>
          <v-chip label v-for="tool in job.tools">{{ tool }}</v-chip>
          <v-chip label v-for="language in job.languages">{{ language }}</v-chip>
        </v-chip-group>
      </v-card-text>



    </v-card>
  </v-col>
  <!-- <div> -->

  <!-- <div>{{ job.company }} </div> -->
  <!-- <div v-if="job.new"> {{ job.new }}</div> -->
  <!-- <div> {{ job.position }}</div> -->

  <!-- <div>{{ job.position }} </div> -->
  <!-- </div> -->
</template>
<style>
.image {
  border-radius: 50%;
}

.dot {
  height: 5px;
  width: 5px;
  margin: 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>