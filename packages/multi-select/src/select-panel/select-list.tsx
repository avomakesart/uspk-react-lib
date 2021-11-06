/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This component represents an unadorned list of SelectItem (s).
 */
import * as React from "react";

import { useMultiSelect } from "../../hooks/use-multi-select";
import { Option } from "../../lib/interfaces";
import SelectItem from "./select-item";

interface ISelectListProps {
  options: Option[];
  onClick: any;
  skipIndex: number;
}

const SelectList = ({ options, onClick, skipIndex }: ISelectListProps) => {
  const { disabled, value, onChange, ItemRenderer } = useMultiSelect();

  const handleSelectionChanged = (option: Option, checked: boolean) => {
    if (disabled) return;

    onChange(
      checked
        ? [...value, option]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        : value.filter((o: any) => o.value !== option.value)
    );
  };

  return (
    <>
      {options.map((o: any, i) => {
        const tabIndex = i + skipIndex;

        return (
          <li key={o?.key || i}>
            <SelectItem
              tabIndex={tabIndex}
              option={o}
              onSelectionChanged={(c) => handleSelectionChanged(o, c)}
              checked={!!value.find((s) => s.value === o.value)}
              onClick={(e: any) => onClick(e, tabIndex)}
              itemRenderer={ItemRenderer}
              disabled={o.disabled || disabled}
            />
          </li>
        );
      })}
    </>
  );
};

export default SelectList;
