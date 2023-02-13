<script setup lang="ts">
import { type JobModel } from '@/stores/jobs';

const props = defineProps<{
  job: JobModel
  filters: string[]
}>()
const isSelected = (info) => {
  return props.filters.find(filter => filter === info) ? 'black' : '#64B9BC';
}

const chooseInfo = (info: string) => {
  if (props.filters.find(filter => filter === info)) {
    const index = props.filters.indexOf(info);
    const x = props.filters.splice(index, 1);
  } else {
    props.filters.push(info)
  }

}
</script>

<template>
  <v-col cols="12 font-weight-black">
    <div class="job d-flex elevation-6" :class="{ featured: job.featured }">
      <header class="d-flex align-center">
        <div class="img ma-sm-2">
          <v-img class="image" :src="job.logo"></v-img>
        </div>
        <div>
          <div class="title">
            <div>
              <span class="font-weight-black">{{ job.company }}</span>
              <v-chip class="ma-2 new font-weight-bold" v-if="job.new"> NEW! </v-chip>
              <v-chip class="ma-2 tag-featured font-weight-bold" v-if="job.featured"> FEATURED </v-chip>
            </div>
          </div>
          <div class="sub-title font-weight-black"> {{ job.position }}</div>

          <div class="informations font-weight-regular mb-lg-4">
            {{ job.postedAt }}
            <p class="dot"></p>
            {{ job.contract }}
            <p class="dot"></p>
            {{ job.location }}
          </div>
        </div>
      </header>
      <v-divider class="mt-3 mb-3 d-sm-none divider"></v-divider>
      <div class="tags">
        <v-chip class="font-weight-bold ma-2" :color="isSelected(info)" v-for="info in job.informations"
          @click="chooseInfo(info)" @update:modelValue="selectTag()" label>
          {{ info }}
        </v-chip>
      </div>
    </div>
  </v-col>
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
  padding: 30px 16px 10px;
  color: #64B9BC;
}

.sub-title {
  padding: 0 16px;
}

.informations {
  color: gray;
  padding: 8px 16px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 16px;
}

.tag {
  background-color: #64B9BC;
  color: #5ba4a4;
}

/* v-chip {} */

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

  /* header  */
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