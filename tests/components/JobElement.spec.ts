import { describe, expect, it } from 'vitest'
import { fireEvent } from '@testing-library/dom'
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
  // const findCloseButton = (tag: string) => within(findTag(tag)).getByLabelText('Close');
  // const findChipButton = () => wrapper.findAllByText()
  it('renders nothing if no tags are passed as prop', () => {
    createComponent(job, [])
    expect(findElement(job.company)).toBeVisible()
    expect(findElement(job.tags[0])).toBeVisible()
  })
  it('emit event click tag from tags list', () => {
    createComponent(job, [])
    expect(findElement(job.tags[0]))
    fireEvent.click(findElement(job.tags[0]))
    expect(wrapper).toHaveEmitted('update:filters', ['Frontend'])
  })
})
