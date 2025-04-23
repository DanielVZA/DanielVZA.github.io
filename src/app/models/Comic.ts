class Comic {
    id: number;
    title: string;
    image: string;
    price: number;
    stock: number;

    constructor(id: number, title: string, image: string, price: number, stock: number) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.stock = stock;
    }
}

export default Comic;