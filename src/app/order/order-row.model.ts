export class OrderRow {
    constructor(
        public title?: string,
        public author?: string,
        public price?: number,
        public quantity?: number) {
    }

    HT() {
        return this.price * this.quantity;
    }

    TTC() {
        return this.price * 1.19 * this.quantity;
    }
}
