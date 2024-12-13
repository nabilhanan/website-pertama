const nama = "nabil hanan";
let usia = 24;

function generateBiodata() {
    console.log(nama);
    console.log(usia);

    let generasi;

    if (usia > 11 && usia < 18) { //if true
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia > 30) {
        generasi = "generasi tua";
    }
    else if (usia > 2 && usia < 11) {
        generasi = "generasi anak-anak";
    }
    else { //if false
        generasi = "generasi bayi";
    }

    return console.log('generasi saya adalah', generasi);
}


generateBiodata();