import * as React from 'react'
import { Accordion } from '../src'
// import mdx from './button.mdx'

export default {
  title: 'Components/Accordion',
  parameters: {
    tags: ['accordion', 'uspk', 'react'],
    // docs: {
    //   page: mdx,
    // },
  },
}

export const Default = () => {
  return (
    <Accordion>
      <Accordion.Row title="Hello world">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          animi adipisci, iste, aperiam fugiat eum corporis distinctio autem vel
          facere iure eligendi eos ad recusandae sapiente molestiae illum quasi!
          Reprehenderit?
        </p>
      </Accordion.Row>

      <Accordion.Row title="Hello world 2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          animi adipisci, iste, aperiam fugiat eum corporis distinctio autem vel
          facere iure eligendi eos ad recusandae sapiente molestiae illum quasi!
          Reprehenderit?
        </p>
      </Accordion.Row>

      <Accordion.Row title="Hello world 3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          animi adipisci, iste, aperiam fugiat eum corporis distinctio autem vel
          facere iure eligendi eos ad recusandae sapiente molestiae illum quasi!
          Reprehenderit?
        </p>
      </Accordion.Row>
    </Accordion>
  )
}
