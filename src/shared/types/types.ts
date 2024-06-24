import { ReactNode } from "react";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  imageName: string;
  rate: number;
}

interface SendData {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rate: number;
  file: FileList;
}

interface CartData {
  value: IProduct[];
}

type PropsProduct = {
  value: IProduct;
  isFetching?: boolean;
  children?: ReactNode;
};

export type { IProduct, SendData, CartData, PropsProduct };
