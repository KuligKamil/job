import { describe, expect, it } from 'vitest'
// import { within, fireEvent } from '@testing-library/dom';
import { type RenderResult, render } from '@/../tests/utils'
import JobElement from '@/components/JobElement.vue'
import job from '@/../tests/__mocks/job.json'
import type { JobSearchString } from '@/stores/jobs'

describe('@/components/JobElement.vue', () => {
  let wrapper: RenderResult
  const createComponent = (job: JobSearchString, filters: string[]) => {
    wrapper = render(JobElement, {
      props: { job, filters },
    })
  }
  const findElement = (name: string) => wrapper.getByText(name)
  it('renders nothing if no tags are passed as prop', () => {
    createComponent(job, [])
    expect(findElement(job.company)).toBeVisible()
    // expect(wrapper.container).toBeEmptyDOMElement()
  })
})
