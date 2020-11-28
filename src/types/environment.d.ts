// https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
declare module 'environment' {
  import baseEnv from 'environments/base';
  const value: ReturnType<typeof baseEnv>;

  export default value;
}
