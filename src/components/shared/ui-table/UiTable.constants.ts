import { GridSelection } from '@glideapps/glide-data-grid/dist/ts/data-grid/data-grid-types';
import { CompactSelection } from '@glideapps/glide-data-grid';

export const gridSelection: GridSelection = {
  current: undefined,
  rows: CompactSelection.empty(),
  columns: CompactSelection.empty(),
};
