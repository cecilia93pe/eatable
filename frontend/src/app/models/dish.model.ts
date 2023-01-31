export interface Dish {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  picture_url: string;
  quantity?: number;
  __v: number;
}
