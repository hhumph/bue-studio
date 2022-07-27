export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "services",
      title: "Services",
      type: "serviceContent",
    },
    {
      name: "booking",
      title: "Booking Information",
      type: "object",
      fields: [
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Gymcatch URL",
          name: "gymcatchUrl",
          type: "url",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
