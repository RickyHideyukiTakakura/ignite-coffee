export interface CoffeeDataType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CoffeeType {
  data: CoffeeDataType;
  quantity: number;
}
