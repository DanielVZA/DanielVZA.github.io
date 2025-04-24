import Comic from "@/types/Comic";

class CartItem {
    quantity: number;
    subTotal: number;
    comicId: number;
    comic: Comic;

    constructor(quantity: number, comic:Comic) {
        this.comicId = comic.id;
        this.quantity = quantity;
        this.subTotal = comic.price;
        this.comic = comic;
    }
}

export default CartItem;