export class Product {
  constructor(
    public productId: number,
    public title: string,
    public description: string,
    public imgUrl: string,
    public price: string,
    public category: string,
    public color: string,
    public quantity: number
  ) {}
}
