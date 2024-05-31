interface IProduct {
  category: string;
  description: string;
  id: number;
  imageName: string;
  price: number;
  rate: number;
  title: string;
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

export type { IProduct, SendData };
