import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { GridCellKind } from "@glideapps/glide-data-grid";
import type { GridCell, GridColumn, Item } from "@glideapps/glide-data-grid";
import { UiTableDynamic } from "../../shared/ui-table/UiTable.dynamic";

interface IProps {
  testId?: string;
}
const data = [
  {
    name: 'Hines Fowler',
    company: 'BUZZNESS',
    email: 'hinesfowler@buzzness.com',
    phone: '+1 (869) 405-3127',
  },
  {
    name: 'Joe Fowler',
    company: 'Buz',
    email: 'joefowler@buzzness.com',
    phone: '+1 (869) 405-3127',
  },
];

const columns: GridColumn[] = [
  {
    title: 'Name',
    id: 'name',
  },
  {
    title: 'Company',
    id: 'company',
  },
  {
    title: 'Email',
    id: 'email',
  },
  {
    title: 'Phone',
    id: 'phone',
  },
];

export const IndexPage: React.FC<IProps> = (props) => {
  const { testId = IndexPage.displayName } = props;
  const getContent = React.useCallback((cell: Item): GridCell => {
    const [col, row] = cell;
    const dataRow = data[row];
    // dumb but simple way to do this
    const indexes: string[] = ['name', 'company', 'email', 'phone'];
    const d = dataRow[indexes[col]];

    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      displayData: d,
      data: d,
    };
  }, []);

  return (
    <div>
      <h1>
        Hello Next.js{' '}
        <span
          role="img"
          aria-label="hand waving"
        >
          👋
        </span>
      </h1>
      <p>
        <Link href={Routes.About}>
          <a data-testid={`${testId}_about-button`}>About</a>
        </Link>
      </p>

      <main>
        <UiTableDynamic
          getCellContent={getContent}
          columns={columns}
          rows={data.length}
          height={'200px'}
          width={'100%'}
        />
      </main>
    </div>
  );
};

IndexPage.displayName = 'IndexPage';
