import { Image } from 'sanity';

export interface  Card {
  _type: 'cards';
  communityLogo: {
      asset: {
          url: string;
          _type: 'reference';
      };
  };
  communityName: string;
  communityType: string;
  communityDescription: string;
  communityLocation: string;
  communityWebsite: {
      icon: {
          asset: {
              url: string;
          };
      };
      name: string;
  }[];
}

