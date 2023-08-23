export declare interface ProductUpdateRequest {
    id:string
    title: string
    description:string
    status:string
    price:string
    subcategoryId:string
  }

  export declare interface ProductDeleteRequest {
    id: string
  }

  export declare interface ProductDeleteResponse{
    id:string,
    title: string;
    description:string
    price:string
    status:string
    subcategoryId:string
  }

  export declare interface ProductUpdateResponse{
    title: string
    description:string
    status:string
    price:string
    subcategoryId:string
  }

