const book = {
    "name": "Laskar Pelangi",
    "price": 57500,
    "inStock": true
}

Purchase(book, 30, 10);


function Purchase({ name, price, inStock }, dc, tax) {
    const discount = price * (dc / 100);
    const totalDiscount = price - discount;
    const theTax = totalDiscount * (tax / 100);
    const taxTotal = totalDiscount + theTax;

    console.log('Judul          : ', name);
    console.log('Harga          : ', price);
    if (inStock === true) {
        console.log('In Stock       :  Yes');
    } else {
        console.log('In Stock       :  No');
    }
    console.log('Diskon         : ', discount);
    console.log('Setelah Diskon : ', totalDiscount);
    console.log('Pajak          : ', theTax);
    console.log('Total          : ', taxTotal);


    return 0;
}