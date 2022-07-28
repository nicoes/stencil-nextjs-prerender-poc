import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  devServer: {
    port: 5555
  },
  namespace: 'stencil-components',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
