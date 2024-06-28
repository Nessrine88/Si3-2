import { defineType,defineField } from "sanity";

export default defineType({
name:"cards",
type:"document",
title:"Cards",
fields:[
    defineField({
        name:"cardIcon",
        type:"image",
        title:"Card Icon",
        options: {
          hotspot: true
        }
    }),
    defineField({
        name:"title",
        type:"string",
        title:"Title"
    }),
    defineField({
        name:"status",
        type:"string",
        title:"Status"
    }),
    defineField({
        name:"description",
        type:"string",
        title:"Description"
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
                  hotspot: true 
                }
              },
              {
                name: 'name',
                type: 'string',
                title: 'Name'
              }
            ]
          }
        ]
      })
]
})