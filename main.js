class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'BigPanties', price: 2000 },
            { id: 2, title: 'LittlePanties', price: 500 },
            { id: 3, title: 'Panties', price: 1000 },
            { id: 4, title: 'MiniPanties', price: 100 },
        ];
    }
    goodsCount() {
        for (let i = 0; i < this.goods.length; i++) {
            let basketSumm = 0;
            basketSumm += [i][2];
        }
        console.log(`Стоимость товаров в корзине: ${basketSumm}`);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }
    render() {
        return `<div class="product-item">
                <img class="pantiesImg" src="./651694854_c.jpg">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}



let list = new ProductList();


console.log(list.goodsCount());


/*Никак не получается вывести метод подсчета корзины:(*/
