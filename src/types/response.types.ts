export interface BaseResponse {
  status: 'success' | 'error';
  message?: string;
}
export interface SuccessResponse<Data> extends BaseResponse {
  status: 'success';
  data: Data;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image: string | null;
  stock: number;
  category: {
    id: number;
    name: string;
  };
  seller: {
    id: number;
    name: string;
    image: string | null;
  };
  rating: number | null;
}

export interface WishlistItemType {
  id: number;
  product: {
    id: number;
    title: string;
    price: number;
    discount: number;
    image: string;
    attributes: [
      {
        id: number;
        values: [
          {
            id: number;
            value: string;
          },
        ];
      },
    ];
  };
}
