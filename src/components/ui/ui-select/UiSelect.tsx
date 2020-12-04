import React, { useEffect, useState } from 'react';
import { IUiSelectOptions } from './UiSelect.constants';
import { noop } from '../../../utils/misc.utils';

interface IProps {
  options: IUiSelectOptions[];
  /**
   * If a value is passed in then the component is considered controlled.
   */
  value?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  initialValue?: string;
}

export const UiSelect: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState(props.value || props.initialValue);

  useEffect(() => {
    setSelected(props.value);
  }, [props.value]);

  return (
    <select
      value={selected}
      name={props.name}
      id={props.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange!(event.target.value);
      }}
    >
      {props.options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

UiSelect.defaultProps = {
  onChange: noop,
};
