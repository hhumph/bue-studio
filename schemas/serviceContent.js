export default {
  name: "serviceContent",
  title: "Service Content",
  type: "array",
  of: [
    {
      title: "Service Item",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Cost",
          name: "cost",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
      ],
    },
  ],
};
