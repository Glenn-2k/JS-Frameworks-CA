import { Products } from "./products.d";

export interface Review {
  id: string;
  username: string;
  rating: number;
  comment: string;
}

export interface Products {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}
