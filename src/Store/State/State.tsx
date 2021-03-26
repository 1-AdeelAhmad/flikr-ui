export interface Dictionary<T> {
   [key: string]: T;
}

export interface ImageState {
   isLoading: boolean;
   flikrImages: any[];
   error: string;
   page: number;
   tag: string;
}
