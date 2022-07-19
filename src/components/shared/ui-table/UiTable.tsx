import React from 'react';
import { DataEditor, DataEditorProps } from "@glideapps/glide-data-grid";

interface IProps extends DataEditorProps {}

export const UiTable: React.FC<IProps> = (props) => {
  return <DataEditor  {...props} />
};


UiTable.displayName = 'UiTable';

export default UiTable;
