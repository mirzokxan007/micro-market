export declare interface CategoryUpdateRequest {
    id?:string,
    title?: string;
  }


export declare interface CategoryDeleteRequest {
    id: string;
}

export declare interface CategoryUpdateResponse{
    id: string;
    title:string
}
