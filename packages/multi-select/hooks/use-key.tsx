/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * copied from https://github.com/imbhargav5/rooks/blob/master/packages/shared/useKeyRef.ts
 */
import * as React from "react";

interface Options {
  /**
   * Condition which if true, will enable the event listeners
   */
  when?: boolean;
  /**
   * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
   */
  eventTypes?: Array<string | number>;
  /**
   * target ref on which the events should be listened. If no target is specified,
   * events are listened to on the window
   */
  target?:React.Ref<HTMLElement> | null;
}

const defaultOptions = {
  when: true,
  eventTypes: ["keydown"],
};

/**
 * useKey hook
 *
 * Fires a callback on keyboard events like keyDown, keyPress and keyUp
 *
 * @param {[string|number]} keyList
 * @param {function} callback
 * @param {Options} options
 */
function useKey(
  input: string | number | Array<string | number>,
  callback: (e: KeyboardEvent) => any,
  opts?: Options
): void {
  const keyList: Array<string | number> = React.useMemo(
    () => (Array.isArray(input) ? input : [input]),
    [input]
  );
  const options = Object.assign({}, defaultOptions, opts);
  const { when, eventTypes } = options;
  const callbackRef = React.useRef<(e: KeyboardEvent) => any>(callback);
  const { target } = options as any;

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  const handle = React.useCallback(
    (e: KeyboardEvent) => {
      if (keyList.some((k) => e.key === k || e.code === k)) {
        callbackRef.current(e);
      }
    },
    [keyList]
  );

  React.useEffect((): any => {
    if (when && typeof window !== "undefined") {
      const targetNode = target ? target["current"] : window
      eventTypes.forEach((eventType) => {
        targetNode && targetNode.addEventListener(eventType, handle);
      });
      return () => {
        eventTypes.forEach((eventType) => {
          targetNode && targetNode.removeEventListener(eventType, handle);
        });
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [when, eventTypes, keyList, target, callback]);
}

export { useKey };
