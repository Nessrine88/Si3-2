import { defineType, defineField } from "sanity";
import { getImageDimensions } from '@sanity/asset-utils';
import { SanityImageSource } from "@sanity/asset-utils";
export default defineType({
  name: "cards",
  type: "document",
  title: "Communities",
  fields: [
    defineField({
      name: "communityLogo",
      type: "image",
      title: "Community Logo",
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return true;
          }

          // Ensure value.asset is properly typed as a Sanity image asset
          const asset = value.asset as SanityImageSource;

          // Check if asset is defined before accessing properties
          if (asset && asset._ref) {
            const { width, height } = getImageDimensions(asset._ref);

            if (width < 87 || height < 87) {
              return "Image must be at least 87x87 pixels";
            }
          }

          return true;
        }),
    }),
    defineField({
      name: "communityName",
      type: "string",
      title: "Community Name",
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
      name: "communityType",
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
      name: "communityDescription",
      type: "string",
      title: "Community Description",
    }),
    defineField({
      name: "communityWebsite",
      type: "array",
      title: "Community Website",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "image",
              title: "Icon",
              options: {
                hotspot: true,
              },
            },
            {
              name: "name",
              type: "string",
              title: "Name",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "communityLeaderName",
      type: "string",
      title: "Community Leader Name",
      validation: (rule) =>
        rule.required().error("Community Leader Name is required"),
    }),
    defineField({
      name: "communityLeaderEmail",
      type: "string",
      title: "Community Leader Email",
      validation: (rule) =>
        rule
          .required()
          .email()
          .error("Please provide a valid Community Leader Email"),
    }),
    defineField({
      name: "xHandle",
      type: "string",
      title: "X Handle",
      validation: (rule) =>
        rule.required().error("X Handle is required"),
    }),
    defineField({
      name: "warpastHandle",
      type: "string",
      title: "Warpast Handle",
      validation: (rule) =>
        rule.required().error("Warpast Handle is required"),
    }),
  ],
});
