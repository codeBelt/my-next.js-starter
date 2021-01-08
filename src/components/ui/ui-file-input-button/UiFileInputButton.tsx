import React from 'react';

export interface IProps {
  /**
   * A string that defines the file types the file input should accept.
   * This string is a comma-separated list of unique file type specifiers.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
   */
  acceptedFileTypes?: string;
  /**
   * When allowMultipleFiles is true, the file input allows the user to select more than one file.
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple
   *
   * @default false
   */
  allowMultipleFiles?: boolean;
  /**
   * Text to display as the button text
   */
  label: string;
  /**
   * Handler passed from parent
   *
   * When the file input changes a FormData object will be send on the first parameter
   */
  onChange: (formData: FormData) => void;
  /**
   * The name of the file input that the backend is expecting
   */
  uploadFileName: string;
}

export const UiFileInputButton: React.FC<IProps> = (props) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button type="button" onClick={onClickHandler}>
        {props.label}
      </button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
      />
    </form>
  );
};

UiFileInputButton.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};
