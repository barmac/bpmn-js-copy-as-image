import { ElementsRenderer } from './ElementsRenderer';
import { CopyAsImageContextPadProvider } from './CopyAsImageContextPadProvider';


export const ElementsRendererModule = {
  elementsRenderer: [ 'type', ElementsRenderer ]
};

export const CopyAsImageModule = {
  __depends__: [ ElementsRendererModule ],
  __init__: [ 'copyAsImageContextPadProvider' ],
  copyAsImageContextPadProvider: [ 'type', CopyAsImageContextPadProvider ],
};
