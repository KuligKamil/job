<script setup lang="ts">
import { jobsStore, type JobModel } from '@/stores/jobs';
import { computed, ref } from 'vue';
const props = defineProps<{
  job: JobModel
  filters: string[]
}>()
const selectedTags = ref([])
let selectedBefore = []
const selectedTags2 = computed(() => props.job.informations.filter(info => selectedTags.value.includes(props.job.informations.indexOf(info))))
const selectTag = () => {
  // console.log(value)
  // let selectedNow = props.job.informations.filter(info => selectedTags.value.includes(props.job.informations.indexOf(info)))
  // // selectedBefore =
  // console.log(selectedNow)
  // console.log(props.filters)
  // props.filters.push(selectedNow[0])
  // props.filters.filter(t => !selectedNow.includes(t)).concat(aaaa)
}
const isSelected = (info) => {
  // color=""
  console.log(info)
  // let a = props.filters.find(filter => filter === info) ? '#5ba4a4' : '#64B9BC';
  let a = props.filters.find(filter => filter === info) ? 'black' : '#64B9BC';
  console.log(a)
  return a
}

const chooseInfo = (info: string) => {
  // console.log(info)
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
    <div class="job elevation-6" :class="{ featured: job.featured }">
      <!-- <div class="img">
        <v-img class="image ma-4 d-sm-none d-md-block" :src="job.logo"></v-img>
      </div> -->
      <header> 
        <div class="img ma-sm-2">
          <v-img class="image" :src="job.logo"></v-img>
          <!-- <v-img class="image ma-4 d-none d-sm-flex d-md-none" :src="job.logo"></v-img> -->
        </div>
        <div>
          <div class="title">
            <div>
              <span class="font-weight-black">{{ job.company }}</span>
              <!-- <v-chip-group> -->
              <v-chip class="ma-2 new font-weight-bold" v-if="job.new"> NEW! </v-chip>
              <v-chip class="ma-2 tag-featured font-weight-bold" v-if="job.featured"> FEATURED </v-chip>
              <!-- </v-chip-group> -->

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
      <!-- <v-chip-group class="font-weight-bold" multiple v-model="selectedTags" @update:model-value="selectTag()"> -->
      <!-- active-class="#5ba4a4" selected-class="active" color="#5ba4a4"-->
      <div class="tags">
        <!-- <v-btn v-if="!chip" v-for="info in job.informations" class="font-weight-bold ma-2" color="#5ba4a4"
          @click="chip = true">
          {{ info }}
        </v-btn> -->
        <v-chip class="font-weight-bold ma-2" :color="isSelected(info)" v-for="info in job.informations"
          @click="chooseInfo(info)" @update:modelValue="selectTag()" label>{{
  info
          }}</v-chip>
      </div>
      <!-- </v-chip-group> -->
    </div>
    <!-- <v-card elevation="24" outlined :class="{ featured: job.featured }">
      <v-img width="50" class="image ma-4" :src="job.logo"></v-img>
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

        <v-divider class="mt-3 mb-3 d-sm-none" insert></v-divider>
        <v-chip-group multiple v-model="selectedTags" @update:model-value="selectTag()">
          <v-chip v-for="info in job.informations">{{ info }}</v-chip>
        </v-chip-group>
        {{ selectedTags }}
        {{ selectedTags2 }}
      </v-card-text>
    </v-card> -->
    <!-- <v-list-item :title="job.company" :subtitle="job.position">
      <template v-slot:title="{ title }">
        <v-img width="50" class="image ma-4" :src="job.logo"></v-img>
        <p v-html="title"></p>
        <v-chip class="ma-2" color="font-weight-bold" v-if="job.new"> NEW! </v-chip>
        <v-chip class="ma-2" color="font-weight-bold" v-if="job.featured"> FEATURED </v-chip>

      </template>
      <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
        {{ job.postedAt }}
        <p class="dot"></p>
        {{ job.contract }}
        <p class="dot"></p>
        {{ job.location }}

        <v-divider class="mt-3 mb-3 d-sm-none" insert></v-divider>
        <v-chip-group multiple v-model="selectedTags" @update:model-value="selectTag()">
          <v-chip v-for="info in job.informations">{{ info }}</v-chip>
        </v-chip-group>
      </template>
    </v-list-item>

   -->
    <!-- selected-class="blue" -->
  </v-col>
</template>
<style scoped>
.divider {
  max-width: calc(100% - 20px);
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
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  z-index: 0;
  /* border-color: rgba(var(--v-border-color), var(--v-border-opacity)); */
  border-style: solid;
  border-width: 0;
  border-radius: 4px;
  /* background: rgb(var(--v-theme-surface)); */
  background: white;
  margin: 16px 16px;
}

/* .job :hover {} */

.title {
  padding: 30px 16px 10px;
  /* color: var(--v-primary-base); */
  color: #64B9BC;
}

/* 5ba4a4 */
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


header {
  display: flex;
  align-items: center;
}

.title {
  /* display: flex; */

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

/* @media (min-width: 376px) { */
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


/* 
.one {
        flex: 1 1 0;
    }

    .two {
        flex: 1 1 0;
    }

    .three {
        flex: 2 1 0;
    }
   */
</style>