import * as React from 'react'
import { Card } from '../src'
import mdx from './card.mdx'
import { Link } from '../../link/src/index'

export default {
  title: 'Components/Cards',
  parameters: {
    tags: ['button', 'uspk', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const CardWithHeaderAndFooter = () => {
  return (
    <Card>
      <Card.Header title="Hello this is a cool title" />
      <Card.Content>Hello</Card.Content>
      <Card.Footer>
        <p>This is america</p>
      </Card.Footer>
    </Card>
  )
}

export const CardWithMedia = () => {
  return (
    <Card>
      <Card.Media
        source="https://res.cloudinary.com/uspk/image/upload/v1632123411/small_team_meeting_online_conference_call_laptop_1_scaled_oig1ph_9dd87738b1_jpg_346513_3f9b443a9f.jpg"
        alt="Cool pic"
      />
      <Card.Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et corrupti
        asperiores quam quos odio, similique vitae dolorem facere ipsa eaque
        rerum ea omnis est rem magnam neque quisquam ratione excepturi.
      </Card.Content>
    </Card>
  )
}

export const CardWithMediaAndFooter = () => {
  return (
    <Card>
      <Card.Media
        source="https://res.cloudinary.com/uspk/image/upload/v1632123411/small_team_meeting_online_conference_call_laptop_1_scaled_oig1ph_9dd87738b1_jpg_346513_3f9b443a9f.jpg"
        alt="Cool pic"
      />
      <Card.Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et corrupti
        asperiores quam quos odio, similique vitae dolorem facere ipsa eaque
        rerum ea omnis est rem magnam neque quisquam ratione excepturi.
      </Card.Content>
      <Card.Footer>
        <Link href="/" secondary>
          Some link
        </Link>
      </Card.Footer>
    </Card>
  )
}

export const CardWithMediaHeaderAndFooter = () => {
  return (
    <Card>
      <Card.Media
        source="https://res.cloudinary.com/uspk/image/upload/v1632123411/small_team_meeting_online_conference_call_laptop_1_scaled_oig1ph_9dd87738b1_jpg_346513_3f9b443a9f.jpg"
        alt="Cool pic"
      />
      <Card.Header title="Hello this is a cool title" />
      <Card.Content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et corrupti
        asperiores quam quos odio, similique vitae dolorem facere ipsa eaque
        rerum ea omnis est rem magnam neque quisquam ratione excepturi.
      </Card.Content>
      <Card.Footer>
        <Link href="/" secondary>
          Some link
        </Link>
      </Card.Footer>
    </Card>
  )
}
