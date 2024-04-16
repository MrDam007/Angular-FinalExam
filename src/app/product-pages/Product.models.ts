export interface Product {
  id:number;
  name: string;
  color: string;
  gender: string;
  type: string;
  src:string;
  price: number;
  date?: Date;
  city?: null | string;
  favarite? :boolean
}
