import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useFetch } from '@/composables/fetch'

export const jobsStore = defineStore('jobs', () => {
  const { execute: fetchData, data: jobs, loading } = useFetch({
    url: 'jobs',
    mapResponse: (jobs: JobSearchString[]) => jobs.map(job => ({
      ...job,
      logo: job.logo.replace('./', './src/'),
      searchText: [job.company, job.position, job.location, ...job.tools, ...job.languages, job.level]
        .join('').replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll(',', '').toLowerCase(),
      tags: [job.role, job.level, ...job.tools, ...job.languages],
    })),
  })

  // const jobs = ref(jobsResponse.map(job => ({
  //   ...job,
  //   logo: job.logo.replace('./', './src/'),
  //   searchText: [job.company, job.position, job.location, ...job.tools, ...job.languages, job.level]
  //     .join('').replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll(',', '').toLowerCase(),
  //   tags: [job.role, job.level, ...job.tools, ...job.languages],
  // })))
  // const filters = ref<string[]>([])
  const filters: any = computed(() => {
    return Array.from(new Set(jobs.value?.map(job => [job.level, ...job.tools, ...job.languages])
      .reduce((accum: any, el: any) => accum.concat(el), [])))
  })
  // // const requestState: RequestState = {
  // //     isLoading: true,
  // //     error: null,
  // // };
  // // async getMe(): Promise<{ data: User; requestState: RequestState }> {
  // async function fetchData() {
  //   //   try {
  //   // const data = await AuthService.getMe();
  //   //     requestState.loading = false;
  //   //     return { data, requestState };
  //   //   } catch (error) {
  //   //     requestState.loading = false;
  //   //     requestState.error = error;
  //   //     return { data: {} as User, requestState };
  //   //   }
  //   // console.log('re', requestState.isLoading);
  //   setTimeout(() => {
  //     // console.log('re', requestState.isLoading);
  //     isLoading.value = false
  //   }, 5000)
  //   // requestState.isLoading = false
  //   // return { data: [], requestState }
  //   // const response = await fetch('https://cat-fact.herokuapp.com/facts', {});
  //   // const data = await response.json();
  //   // console.log(data[0].text);
  // }
  return { jobs, fetchData, filters, loading }
})

export interface JobSearchString {
  id: number
  company: string
  position: string
  new: boolean
  featured: boolean
  contract: string
  location: string
  tools: string[]
  languages: string[]
  level: string
  postedAt?: string
  logo: string
  role: string
  searchText?: string
  tags?: string[]
}
