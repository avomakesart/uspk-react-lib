import * as React from 'react'
import { Link } from '../src'
// import { DxUiIcon } from '../../'
import mdx from './link.mdx'
import { CheckMark } from '../../buttons/src/assets/icons/checkmark'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    tags: ['link', 'dxui', 'react'],
    docs: {
      page: mdx,
    },
  },
}

export const Primary = () => <Link href="/">Primary Link</Link>

export const Secondary = () => (
  <Link href="/" secondary>
    Secondary Link
  </Link>
)

export const PrimaryWithIcon = () => (
  <Link href="/" leftIcon={<CheckMark width="1.5rem" />}>
    Primary Icon Link
  </Link>
)

export const SecondaryWithIcon = () => (
  <Link href="/" leftIcon={<CheckMark width="1.5rem" />} secondary>
    Secondary Icon Link
  </Link>
)

export const UppercaseLink = () => (
  <Link href="/" upperCase leftIcon={<CheckMark width="1.5rem" />}>
    Primary Icon Link
  </Link>
)

export const Inverse = () => (
  <div
    style={{ backgroundColor: '#2c2e2f', padding: '0.5rem', display: 'block' }}
  >
    <Link href="/" inverse>
      Inverse Primary Link
    </Link>
    {/* <br />
    <br />
    <Link href="/" leftIcon={<DxUiIcon icon='SearchIcon' width='1.5rem' primaryColor="#ffffff" />} inverse >
      Inverse Icon Link
    </Link> */}
  </div>
)

export const WithElement = () => {
  const handleClick = () => console.log('dx-ui-react')

  return (
    <Link as="button" buttonType="button" onClick={handleClick}>
      Hello
    </Link>
  )
}
