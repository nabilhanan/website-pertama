const nama = "nabil hanan";
let usia = 24;

function generateBiodata() {
    console.log(nama);
    console.log(usia);
    if (usia > 11 && usia < 18) { //if true
        console.log('anda remaja');
    }
    else if (usia > 18 && usia < 30) {
        console.log('anda dewasa');
    }
    else if (usia > 30) {
        console.log('anda tua');
    }
    else if (usia > 2 && usia < 11) {
        console.log('anda anak-anak');
    }
    else { //if false
        console.log('anda bayi')
    }
}


generateBiodata();