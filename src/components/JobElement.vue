<script setup lang="ts">
import { jobsStore, type JobModel } from '@/stores/jobs';
import { computed, ref } from 'vue';
const props = defineProps<{
  job: JobModel
  filters: string[]
}>()
const selectedTags = ref([])
const selectedTags2 = computed(() => props.job.informations.filter(info => selectedTags.value.includes(props.job.informations.indexOf(info))))
const selectTag = () => {
  // console.log(value)
  let aaaa = props.job.informations.filter(info => selectedTags.value.includes(props.job.informations.indexOf(info)))
  console.log(aaaa)
  console.log(props.filters)
  props.filters.push(aaaa[0])
  props.filters.filter(t => !aaaa.includes(t)).concat(aaaa)
}
</script>

<template>
  <v-col cols="12">

    <v-card elevation="24" outlined :class="{ featured: job.featured }">
      <v-img width="50" class="image ma-4" :src="job.logo">
      </v-img>
      <!-- {{ job.searchText }} -->
      <v-card-title>{{ job.company }}
        <v-chip class="ma-2" color="font-weight-bold" v-if="job.new"> NEW! </v-chip>
        <v-chip class="ma-2" color="font-weight-bold" v-if="job.featured"> FEATURED </v-chip>
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
        <v-chip-group multiple v-model="selectedTags" @update:model-value="selectTag()">
          <v-chip v-for="info in job.informations">{{ info }}</v-chip>
          <!-- <v-chip label> {{ job.level }}</v-chip>
          <v-chip label v-for="tool in job.tools">{{ tool }}</v-chip>
          <v-chip label v-for="language in job.languages">{{ language }}</v-chip> -->
        </v-chip-group>
        {{ selectedTags }}
        {{ selectedTags2 }}
      </v-card-text>
    </v-card>
  </v-col>
</template>
<style scoped>
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

.featured {
  border-left: 5px solid #5CA4A4;
}

.v-chip-group {
  flex-wrap: wrap;
}
</style>