function hitungKembalian(total_belanja, jumlah_uang) {
    var kembalian = jumlah_uang - total_belanja;
    var stok_kembalian = {
        50000: 0,
        20000: 0.,
        10000: 0,
        5000: 0,
        2000: 0,
        500: 0
    };
    var objSize = Object.keys(stok_kembalian).length;

    while (kembalian > 0) {
        if (kembalian >= 50000) {
            stok_kembalian[50000] = Math.floor(kembalian / 50000);
            kembalian -= 50000 * Math.floor(kembalian / 50000);
        } else if (kembalian < 50000 && kembalian >= 20000) {
            stok_kembalian[20000] = Math.floor(kembalian / 20000);
            kembalian -= 20000 * Math.floor(kembalian / 20000);
        } else if (kembalian < 20000 && kembalian >= 10000) {
            stok_kembalian[10000] = Math.floor(kembalian / 10000);
            kembalian -= 10000 * Math.floor(kembalian / 10000);
        } else if (kembalian < 10000 && kembalian >= 5000) {
            stok_kembalian[5000] = Math.floor(kembalian / 5000);
            kembalian -= 5000 * Math.floor(kembalian / 5000);
        } else if (kembalian < 5000 && kembalian >= 2000) {
            stok_kembalian[2000] = Math.floor(kembalian / 2000);
            kembalian -= 2000 * Math.floor(kembalian / 2000);
        } else {
            stok_kembalian[500] = Math.floor(kembalian / 500);
            kembalian -= 500 * Math.floor(kembalian / 500);
        }
    }

    for (var i = objSize; i >= 0; i--) {
        if (Object.values(stok_kembalian)[i]) {
            console.log(Object.values(stok_kembalian)[i] + " x " + Object.keys(stok_kembalian)[i]);
        }
    }
}

hitungKembalian(110500, 200000);