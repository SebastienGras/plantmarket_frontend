import z from "zod";

export const EditProductSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  categoryId: z.string().min(1, "La catégorie est requise"),
  subcategoryId: z.string().min(1, "La sous-catégorie est requise"),
  stock: z.coerce.number().min(0, "Le stock doit être positif"),
  actif: z.boolean(),
});
