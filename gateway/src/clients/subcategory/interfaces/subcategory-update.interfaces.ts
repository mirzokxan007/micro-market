export declare interface SubCategoryUpdateRequest {
    id?:string
    title?: string;
    categoryId?:string
  }


export declare interface SubCategoryDeleteRequest {
    id: string
}

export declare interface SubCategoryDeleteResponse {
    id: string
}

export declare interface SubCategoryUpdateResponse {
  id: string
  title:string
  categoryId:string
}
  
