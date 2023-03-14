const book = {
    "name": "Laskar Pelangi",
    "price": 57500,
    "inStock": true,
    "stock": 15,
    "order": 12
}

kreditNich((Purchase(book, 30, 10)), 12);

function Purchase({ name, price, inStock, stock, order }, dc, tax) {


    let bookBuyed = 0;
    let totalPrice = 0;
    const discount = price * (dc / 100);
    const totalDiscount = price - discount;
    const theTax = totalDiscount * (tax / 100);
    const taxTotal = totalDiscount + theTax;
    let i = stock;
    let n = order;

    while (i > 0) {
        totalPrice = taxTotal + totalPrice;
        bookBuyed = bookBuyed + 1;
        i = i - 1;
        n = n - 1;

        if (i == 0 || n == 0) {
            break;
        }
    }

    console.log('Judul          : ', name);
    console.log('Harga          :  Rp.', price);
    if (inStock === true) {
        console.log('In Stock       :  Yes');
    } else {
        console.log('In Stock       :  No');
    }
    console.log('Buku Terbeli   : ', bookBuyed, ' pcs');
    console.log('Diskon         :  Rp.', discount);
    console.log('Setelah Diskon :  Rp.', totalDiscount);
    console.log('Pajak          :  Rp.', theTax);
    console.log('Harga per Buku :  Rp.', taxTotal);
    console.log('Harga Total    :  Rp.', totalPrice);

    if (i == 0 && n > 0) {
        console.log('that book is already out of stock!');
        console.log('sisa buku tidak terbeli adalah ', n, ' pcs');

    } else {
        console.log('semua pesanan terbeli :D!');
        console.log('sisa stock buku adalah ', i, ' pcs');
    }

    return totalPrice;
}

function kreditNich(totalPrice, monthOfCredits) {
    const payCredit = totalPrice / monthOfCredits;
    let creditsPayment = totalPrice;
    let i = monthOfCredits;

    CreditRecord = [];
    while (i > 0) {
        i -= 1;
        creditsPayment = creditsPayment - payCredit
        CreditRecord.push({
            bulan: Math.abs(i - monthOfCredits),
            kreditPerBulan: payCredit,
            sisaPembayaran: creditsPayment
        })

    }

    console.log('Data Cicilan : ');
    console.log(CreditRecord);

    return 0;
}