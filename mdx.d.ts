/// <reference types="@mdx-js/loader" />
declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
  }