// schemas/community.js

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'communityLeaderName',
      title: 'Community Leader Name',
      type: 'string',
    },
    {
      name: 'communityLeaderEmail',
      title: 'Community Leader Email',
      type: 'string',
    },
    {
      name: 'xHandle',
      title: 'X Handle',
      type: 'string',
    },
    {
      name: 'warpastHandle',
      title: 'Warpast Handle',
      type: 'string',
    },
    {
      name: 'communityWebsite',
      title: 'Community Website',
      type: 'url',
    },
    {
      name: 'communityLocation',
      title: 'Community Location',
      type: 'string',
    },
    {
      name: 'communityType',
      title: 'Community Type',
      type: 'string',
    },
    {
      name: 'communityDescription',
      title: 'Community Description',
      type: 'text',
    },
  ],
};
