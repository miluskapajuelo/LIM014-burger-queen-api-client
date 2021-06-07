export interface IProductsModel {
  products?: Array<ProductDetailModel>
}
export interface ProductDetailModel {
  _id?: string;
  name?: string;
  price?: number;
  image?: URL;
  type: string;
  dateEntry: Date;

}
