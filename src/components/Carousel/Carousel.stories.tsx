import { Meta, StoryObj } from "@storybook/react";

import Carousel from "./index";

type Category = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Fougères",
    description: "Plantes primitives adaptées à l'ombre.",
    imageUrl:
      "https://images.unsplash.com/photo-1702124970289-846bde3c6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTg2MDR8MHwxfHNlYXJjaHwxfHxidWxiZXN8ZW58MHwwfHx8MTc1MDc4NTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    name: "Succulentes",
    description: "Idéales pour les environnements arides.",
    imageUrl:
      "https://images.unsplash.com/photo-1591001939475-d2f6dd470db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTg2MDR8MHwxfHNlYXJjaHwxfHxsaWFuZXN8ZW58MHwwfHx8MTc1MDc4NTk5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    name: "Cactus",
    description: "Des plantes piquantes et résistantes.",
    imageUrl:
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTg2MDR8MHwxfHNlYXJjaHwxfHxjYWN0dXN8ZW58MHwwfHx8MTc1MDc4NTk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const meta: Meta<typeof Carousel<Category>> = {
  title: "Components/Carousel",
  component: Carousel as any,
};

export default meta;

type Story = StoryObj<typeof Carousel<Category>>;

export const Default: Story = {
  args: {
    datas: mockCategories,
    renderItem: (category: Category) => (
      <>
        <img
          src={category.imageUrl}
          alt={category.name}
          style={{
            height: 180,
            width: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
        <div style={{ padding: "0.5rem 1rem" }}>
          <h3 style={{ margin: 0 }}>{category.name}</h3>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            {category.description}
          </p>
        </div>
      </>
    ),
  },
};
