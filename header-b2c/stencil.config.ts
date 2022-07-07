import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'header-b2c',
  outputTargets: [
    react({
      componentCorePackage: 'header-b2c',
      proxiesFile: '../nextjs-stencil-poc/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
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
