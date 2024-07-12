interface totalPrice {
    price:number;
    discount?: number;
    isInstallment?: boolean;
    months?: number
}

const totalPrice = ({ price, discount = 0, isInstallment, months = 12 }: totalPrice): number => {
    if(discount > 0) {
        discount = discount / 100
    }

    const discountPrice = price - (price * discount)
    const result = isInstallment ?  discountPrice / months : discountPrice

    return Math.round(result)
};

const price = totalPrice({ price: 100000, discount:25, isInstallment: true, months: 12});
console.log(price); 