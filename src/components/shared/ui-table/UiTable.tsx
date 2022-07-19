import React from 'react';
import { DataEditor, DataEditorProps, GridMouseEventArgs } from '@glideapps/glide-data-grid';
import { GetRowThemeCallback } from '@glideapps/glide-data-grid/dist/ts/data-grid/data-grid-render';
import { gridSelection } from './UiTable.constants';

interface IProps extends DataEditorProps {}

export const UiTable: React.FC<IProps> = (props) => {
  const [hoverRow, setHoverRow] = React.useState<number | undefined>(undefined);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    const [, row] = args.location;

    setHoverRow(args.kind !== 'cell' ? undefined : row);
  }, []);
  const getRowThemeOverride = React.useCallback<GetRowThemeCallback>(
    (row) => {
      if (row !== hoverRow) {
        return undefined;
      }

      return {
        bgCell: '#f7f7f7',
        bgCellMedium: '#f0f0f0',
      };
    },
    [hoverRow]
  );

  return (
    <DataEditor
      {...props}
      getRowThemeOverride={getRowThemeOverride}
      onItemHovered={onItemHovered}
      gridSelection={gridSelection}
    />
  );
};

UiTable.displayName = 'UiTable';

export default UiTable;
