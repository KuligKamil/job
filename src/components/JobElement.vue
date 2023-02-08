<script setup lang="ts">
// import JobModel from 
import type { JobModel } from '@/stores/jobs';
const props = defineProps<{
  job: JobModel
}>()
</script>

<template>
    <div>{{ job.company }}</div>
</template>
