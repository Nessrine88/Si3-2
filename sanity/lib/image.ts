import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image) => {
  // Ensure source is properly typed as an Image from Sanity
  if (source && source.asset && source.asset._ref) {
    return imageBuilder.image(source).auto('format').fit('max').url();
  }
  return undefined; // Or handle null case as needed
};
