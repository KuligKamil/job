import { ref } from 'vue'
import { defineStore } from 'pinia'
import jobsResponse from '@/stores/data.json'
// interface RequestState {
//     isLoading: boolean;
//     error: Error | null;
// }
export const jobsStore = defineStore('jobs', () => {
  const isLoading = ref(true)
  const jobs = ref(jobsResponse.map(job => ({
    ...job,
    logo: job.logo.replace('./', './src/'),
    searchText: [job.company, job.position, job.location, ...job.tools, ...job.languages, job.level]
      .join('').replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll(',', '').toLowerCase(),
    informations: [job.role, job.level, ...job.tools, ...job.languages],
  })))
  // const requestState: RequestState = {
  //     isLoading: true,
  //     error: null,
  // };
  // async getMe(): Promise<{ data: User; requestState: RequestState }> {
  async function fetchData() {
    //   try {
    // const data = await AuthService.getMe();
    //     requestState.loading = false;
    //     return { data, requestState };
    //   } catch (error) {
    //     requestState.loading = false;
    //     requestState.error = error;
    //     return { data: {} as User, requestState };
    //   }
    // console.log('re', requestState.isLoading);
    setTimeout(() => {
      // console.log('re', requestState.isLoading);
      isLoading.value = false
    }, 5000)
    // requestState.isLoading = false
    // return { data: [], requestState }
    // const response = await fetch('https://cat-fact.herokuapp.com/facts', {});
    // const data = await response.json();
    // console.log(data[0].text);
  }
  return { jobs, fetchData, isLoading }
})

export interface JobSearchString {
  id: number
  company: string
  position: boolean
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
  informations?: string[]
}
