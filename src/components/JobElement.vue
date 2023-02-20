<script setup lang="ts">
import type { JobSearchString } from '@/stores/jobs'

const props = defineProps<{
  job: JobSearchString
  filters: string[]
}>()
const emit = defineEmits<{
  (event: 'update:filters', filters: string[]): void
}>()

const isSelected = (tag: string) => {
  return props.filters.find(filter => filter === tag) ? 'black' : '#64B9BC'
}
const chooseInfo = (tag: string) => {
  const index = props.filters.indexOf(tag)
  if (index === -1)
    emit('update:filters', [...props.filters, tag])
  else
    emit('update:filters', props.filters.filter(filter => filter !== tag))
}
</script>

<template>
  <div class="job d-flex elevation-6 mb-10" :class="{ featured: job.featured }">
    <header class="d-flex align-center ml-4 mt-8">
      <div class="img ma-sm-2">
        <v-img class="image" :src="job.logo" />
      </div>
      <div>
        <div class="title">
          <div>
            <span class="font-weight-black">{{ job.company }}</span>
            <v-chip v-if="job.new" class="ma-2 new font-weight-bold">
              NEW!
            </v-chip>
            <v-chip v-if="job.featured" class="ma-2 tag-featured font-weight-bold">
              FEATURED
            </v-chip>
          </div>
        </div>
        <div class="sub-title font-weight-black">
          {{ job.position }}
        </div>

        <div class="informations font-weight-regular mb-lg-4">
          {{ job.postedAt }}
          <p class="dot" />
          {{ job.contract }}
          <p class="dot" />
          {{ job.location }}
        </div>
      </div>
    </header>
    <v-divider class="mt-3 mb-3 d-sm-none divider" />
    <div class="tags ml-4">
      <v-chip
        v-for="tag in job.tags" :key="tag" class="font-weight-bold mr-2 mt-2 mb-2" :color="isSelected(tag)"
        label @click="chooseInfo(tag)"
      >
        {{ tag }}
      </v-chip>
    </div>
  </div>
</template>

<style scoped>
.divider {
  max-width: calc(100% - 40px);
  margin-inline-start: 20px;
}

.image {
  width: 50px;
  border-radius: 50%;
  position: absolute;
  top: -25px;
  left: 15px;
}

.job {
  flex-direction: column;
  position: relative;
  padding: 0;
  z-index: 0;
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
  background: white;
  margin: 16px 16px;
}

.title {
  /* padding: 30px 16px 10px; */
  color: #64B9BC;
}

/* .sub-title {
  padding: 0 16px;
} */

.informations {
  color: gray;
  /* padding: 8px 16px; */
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* padding: 8px 16px; */
}

.tag {
  background-color: #64B9BC;
  color: #5ba4a4;
}

.new {
  background-color: #5ba4a4;
  color: white
}

.tag-featured {
  background-color: black;
  color: white
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
  border-left: 5px solid #5ba4a4;
}

.v-chip-group {
  flex-wrap: wrap;
}

@media (min-width: 600px) {

  .image {
    width: 75px;
    border-radius: 50%;
    position: sticky;
  }

  .job {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
