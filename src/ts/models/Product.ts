export class Product {
  constructor(
    public productId: number,
    public title: string,
    public description: string,
    public imgUrl: string,
    public imgAlt: string,
    public price: number,
    public category: string,
    public color: string,
    public subtotal: number
  ) {}
}
