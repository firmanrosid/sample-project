const outlet = "MY KOPI O! - CITOS";

function replaceNonAlphanumericWithHyphen(inputString){ 
    // Ganti semua karakter selain huruf, angka, dan spasi dengan tanda hubung
    const replacedString = inputString.replace(/[^a-zA-Z0-9\s]/g, '-');

    // Hapus tanda hubung berlebihan dan ubah menjadi huruf kecil
    const cleanedString = replacedString.replace(/-+/g, '-').toLowerCase();

    // Hapus tanda hubung dari awal dan akhir string
    console.log(replacedString);
    console.log(cleanedString);
    console.log(cleanedString);
    return cleanedString.replace(/\s+/g, '-');
}

const modifiedOutlet = replaceNonAlphanumericWithHyphen(outlet);
console.log("modifiedOutlet", modifiedOutlet);

const hasil = "my-kopi-o----citos";

const outlet1 = "MY KOPI O! - CITOS";
const hasil1 = outlet
    .toLowerCase() // Ubah menjadi huruf kecil
    .replace(/[^a-z0-9\s]/g, '-') // Ganti karakter selain huruf, angka, dan spasi dengan tanda hubung
    .replace(/\s/g, '-'); // Ganti spasi dengan tanda hubung

console.log(hasil1);