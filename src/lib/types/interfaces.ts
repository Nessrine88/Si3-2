import { Url } from 'next/dist/shared/lib/router/router';
import { Image } from 'sanity';

export interface  Card {
  _type: 'cards';
  communityLogo: {
      asset: {
          url: string;
          _type: 'reference';
      }| null;
  };
  communityName: string;
  communityType: string;
  communityDescription: string;
  communityLocation: string;
  xHandle: string;
  warpastHandle:string;
  communityWebsite: string;
}

