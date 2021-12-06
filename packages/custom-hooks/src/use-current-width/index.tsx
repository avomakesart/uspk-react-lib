import * as React from 'react'


export const useCurrentWidth: React.FC = ({}) => {
  /* Capture the dimensions of the button before the loading happens
        so it doesn’t change size.
        These hooks can be put in a seprate file. */
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref?.current && ref?.current?.getBoundingClientRect()?.width) {
      setWidth(ref?.current?.getBoundingClientRect().width)
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [children])

  return { width, height }
}
