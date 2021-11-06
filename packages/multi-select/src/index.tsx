import React from "react";

import { MultiSelectProvider } from "../hooks/use-multi-select";
import { ISelectProps } from "../utils/interfaces";
import Dropdown from "./dropdown";

const MultiSelect = (props: ISelectProps) => (
  <MultiSelectProvider props={props}>
    <div className={`uspk ${props.className || "multi-select"}`}>
      <Dropdown />
    </div>
  </MultiSelectProvider>
);

export default MultiSelect;