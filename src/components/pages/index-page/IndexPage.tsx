import React from 'react';
import Link from 'next/link';
import { Routes } from '../../../constants/Routes';
import { UiFileInputButton } from '../../ui/ui-file-input-button/UiFileInputButton';
import { uploadFileRequest } from '../../../domains/upload/upload.services';

interface IProps {
  testId?: string;
}

export const IndexPage: React.FC<IProps> = (props) => {
  const { testId = IndexPage.displayName } = props;

  const onChange = async (formData: FormData) => {
    const response = await uploadFileRequest(formData, (event) => {
      console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    });

    console.log('response', response);
  };

  return (
    <div>
      <h1>
        Hello Next.js{' '}
        <span role="img" aria-label="hand waving">
          👋
        </span>
      </h1>
      <div>
        <UiFileInputButton label="Upload Single File" uploadFileName="theFiles" onChange={onChange} />
        <UiFileInputButton
          label="Upload Multiple Files"
          uploadFileName="theFiles"
          onChange={onChange}
          allowMultipleFiles={true}
        />
      </div>
      <p>
        <Link href={Routes.About}>
          <a data-testid={`${testId}_about-button`}>About</a>
        </Link>
      </p>
    </div>
  );
};

IndexPage.displayName = 'IndexPage';
