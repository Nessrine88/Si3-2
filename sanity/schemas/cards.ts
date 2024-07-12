import { defineType, defineField } from "sanity";
import { getImageDimensions } from '@sanity/asset-utils';

export default defineType({
  name: "cards",
  type: "document",
  title: "Communities",
  fields: [
    defineField({
      name: "cardIcon",
      type: "image",
      title: "Community Logo",
      validation: (rule) =>
        rule.custom((value) => {
          if (!value || !value.asset || !value.asset._ref) {
            return true; // If value or value.asset is undefined or null, return true
          }

          const { width, height } = getImageDimensions(value.asset._ref);

          if (width < 87 || height < 87) {
            return 'Image must be at least 87x87 pixels';
          }

          return true;
        }),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Community Name",
    }),
    defineField({
      name: "communityLeaderName",
      type: "string",
      title: "Community Leader Name",
    }),
    defineField({
      name: "communityLeaderEmail",
      type: "string",
      title: "Community Leader Email",
    }),
    defineField({
      name: "xHandle",
      type: "string",
      title: "X Handle",
    }),
    defineField({
      name: "warpastHandle",
      type: "string",
      title: "Warpast Handle",
    }),
    defineField({
      name: "communityWebsite",
      type: "url",
      title: "Community Website",
    }),
    defineField({
      name: "communityLocation",
      type: "string",
      title: "Community Location",
      initialValue: "Canada",
      options: {
        list: [
          { title: "Canada", value: "Canada" },
          { title: "U.S.A", value: "U.S.A" },
          { title: "LATAM", value: "LATAM" },
          { title: "Europe", value: "Europe" },
          { title: "Africa", value: "Africa" },
        ],
      },
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Community Type",
      initialValue: "Education",
      options: {
        list: [
          { title: "Education", value: "Education" },
          { title: "Regional", value: "Regional" },
          { title: "NFT Collections", value: "NFT Collection" },
          { title: "DAO's", value: "DAO's" },
        ],
      },
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Community Description",
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
          ],
        },
      ],
    }),
  ],
});
