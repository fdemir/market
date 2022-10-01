export enum ItemType {
  mug = "mug",
  shirt = "shirt",
}

export type Product = {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ItemType;
};

export type Comapny = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
};

export type SortingDirection = "asc" | "desc";

export type BasketProduct = {
  data: Product;
  quantity: number;
  id: string;
};
