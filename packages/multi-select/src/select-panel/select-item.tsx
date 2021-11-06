/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This component represents an individual item in the multi-select drop-down
 */
import React, { useRef } from "react";

import { useKey } from "../../hooks/use-key";
import { KEY } from "../../lib/constants";
import { Option } from "../../lib/interfaces";
import DefaultItemRenderer from "./default-item";

interface ISelectItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemRenderer: any;
  option: Option;
  checked?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  onSelectionChanged: (checked: boolean) => void;
  onClick: any;
}

const SelectItem = ({
  itemRenderer: ItemRenderer = DefaultItemRenderer,
  option,
  checked,
  tabIndex,
  disabled,
  onSelectionChanged,
  onClick,
}: ISelectItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemRef: any = useRef();

  const onOptionCheck = (e: any) => {
    toggleChecked();
    e.preventDefault();
  };

  const toggleChecked = () => {
    if (!disabled) {
      onSelectionChanged(!checked);
    }
  };

  const handleClick = (e: any) => {
    toggleChecked();
    onClick(e);
  };

  useKey([KEY.ENTER, KEY.SPACE], onOptionCheck, { target: itemRef });

  return (
    <label
      className={`select-item ${checked && "selected"}`}
      role="option"
      aria-selected={checked}
      tabIndex={tabIndex}
      ref={itemRef}
    >
      <ItemRenderer
        option={option}
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
      />
    </label>
  );
};

export default SelectItem;
