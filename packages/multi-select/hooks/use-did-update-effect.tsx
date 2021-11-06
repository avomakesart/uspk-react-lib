/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

/**
 * similar to `useEffect` but gets triggered only when value changes
 * @param fn executable function on dependency updates
 * @param inputs dependency array
 */
export function useDidUpdateEffect(fn: any, inputs: any) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
}
