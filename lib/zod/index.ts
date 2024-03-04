import { z } from "zod";

export const collectionData = z.object({
  title: z.string(),
//   name: z.string(),
  description: z.string().optional(),
  url:z.string(),
  state: z.string(),
  company: z.string(),
  address:z.string().optional(),
  country: z.string()?.optional()?.default("Nigeria"),
  countryCode: z.string()?.optional().default("NG"),
  type: z.enum(["Job", "Internship", "Scholarship"]),
});
export type CollectionDataType = z.infer<typeof collectionData>;
