import React from 'react';
import dynamic from 'next/dynamic';
import { UiTable } from './UiTable';

export const UiTableDynamic = dynamic(
  () => {
    return import('./UiTable' /* webpackChunkName: "UiTable" */);
  },
  // eslint-disable-next-line react/display-name
  { ssr: false }
) as typeof UiTable;
