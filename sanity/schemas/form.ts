import { defineType,defineField } from "sanity";
export default defineType({
    name: 'formData',
    type: 'document',
    title: 'Form Data',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name'
      }),
      defineField({
        name: 'email',
        type: 'string',
        title: 'Email'
      }),
      defineField({
        name: 'address',
        type: 'string',
        title: 'Address'
      }),
      defineField({
        name: 'community',
        type: 'string',
        title: 'Community'
      })
    ]
  })
  