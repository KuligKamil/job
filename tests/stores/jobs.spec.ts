import { describe, expect, it } from 'vitest'
import { jobsStore } from '@/stores/jobs'
import { createStore } from '@/../tests/utils'
import allJobs from '@/../tests/__mocks/jobs.json'

describe('@/stores/jobs', () => {
  const createJobsStore = createStore(jobsStore)

  //   it('action "addTag" adds new filter', () => {
  //     const jobsStore = createJobsStore()
  //     expect(jobsStore.filters).toEqual([])
  //     jobsStore.addTag('Frontend')
  //     expect(jobsStore.filters).toEqual(['Frontend'])
  //   })

  //   it('action "removeTag" removes filter', () => {
  //     const jobsStore = createJobsStore({ filters: ['Backend', 'Frontend'] })
  //     expect(jobsStore.filters).toEqual(['Backend', 'Frontend'])
  //     jobsStore.removeTag('Frontend')
  //     expect(jobsStore.filters).toEqual(['Backend'])
  //   })

  //   it('action "removeAll" removes all filters', () => {
  //     const jobsStore = createJobsStore({ filters: ['Backend', 'Frontend'] })
  //     expect(jobsStore.filters).toEqual(['Backend', 'Frontend'])
  //     jobsStore.removeAll()
  //     expect(jobsStore.filters).toEqual([])
  //   })
  // it('getter "jobs" without filters', () => {
  //   const jobsStore = createJobsStore({
  //     filters: [],
  //     allJobs,
  //   })
  //   // console.log(jobsStore.filterData)
  //   expect(jobsStore.filterData).toEqual([allJobs[1]])
  // })
  it('getter "jobs" filters out all jobs based on selected filters', () => {
    const jobsStore = createJobsStore({
      selectedFilters: ['Midweight'],
      allJobs,
    })
    console.log(jobsStore.filterData)
    console.log([allJobs[1]])
    expect(jobsStore.filterData).toEqual([allJobs[1]])
  })
})
