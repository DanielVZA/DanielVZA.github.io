import {Comic} from "@/types/Comic";

interface CartItem {
    quantity: number;
    subTotal: number;
    comicId: number;
    comic: Comic;
}

export default CartItem;