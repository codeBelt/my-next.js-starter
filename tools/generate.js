const { generateTemplateFiles } = require('generate-template-files');

// https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359

generateTemplateFiles([
  {
    option: 'Component',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './.generated/components/__name__(kebabCase)',
      // pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'Util',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './tools/templates/util/',
    },
    stringReplacers: ['__name__', '__method_name__'],
    output: {
      path: './.generated/utils/__name__(kebabCase)',
    },
  },
  {
    option: 'Interface',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/I__interface__.ts',
    },
    stringReplacers: ['__interface__'],
    output: {
      path: './.generated/models/I__interface__.ts',
    },
  },
  {
    option: 'Enum',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__enum__.enum.ts',
    },
    stringReplacers: ['__enum__'],
    output: {
      path: './.generated/constants/__enum__(pascalCase).enum.ts',
    },
  },
]);
