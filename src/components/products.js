
const products = [
    { id: 1312321, name: "Burger", price: "29", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-hamburger-1:product-header-desktop?wid=1899&hei=1040&dpr=off" },
    { id: 1311, name: "Big Mac", price: "49", img: "https://s7d1.scene7.com/is/image/mcdonalds/big-mac-4:product-header-desktop?wid=829&hei=455&dpr=off" },
    { id: 1311, name: "Double Cheeseburger", price: "29", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-dbl-cheeseburger:product-header-desktop?wid=1899&hei=1040&dpr=off" },
    { id: 212343, name: "Cheeseburger", price: "39", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-cheeseburger:product-header-desktop?wid=1899&hei=1040&dpr=off" },
    { id: 12313, name: "French Fries", price: "20", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-macfries:product-header-desktop?wid=1899&hei=1040&dpr=off" },
    { id: 50923, name: "McFlavor Fries Jalapeño", price: "39", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcflavor-fries-jalapeno:product-header-desktop?wid=829&hei=455&dpr=off" },
    { id: 5092389542303, name: "Chilli Cheese", price: "29", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-chilicheesetops:product-header-desktop?wid=1899&hei=1040&dpr=off" },
    { id: 50903, name: "Chicken McNuggets", price: "19", img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-no-mcnuggets:product-header-desktop?wid=1899&hei=1040&dpr=off" },
]

function productList() {
    return (
        <div className="menu">
            <img alt="" className="hero-img" src="https://s7d1.scene7.com/is/image/mcdonalds/1260x560_top-header_best-burger-1:accessible-carousel-desktop?resmode=sharp2"></img>
            <ul className="product-list">
                {products.map((products, index) => (
                    <li className="products" key={index}>
                        <img alt={products.name} className="product-img" src={products.img} />
                        <span>{products.name}</span>
                        <span>{products.price},-</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default productList;
