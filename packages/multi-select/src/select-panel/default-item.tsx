/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { Option } from "../../lib/interfaces";

interface IDefaultItemRendererProps {
  checked: boolean;
  option: Option;
  disabled?: boolean;
  onClick: any;
}

const DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled,
}: IDefaultItemRendererProps) => (
  <div className={`item-renderer ${disabled && "disabled"}`}>
    <input
      type="checkbox"
      onChange={onClick}
      checked={checked}
      tabIndex={-1}
      disabled={disabled}
    />
    <span>{option.label}</span>
  </div>
);

export default DefaultItemRenderer;
