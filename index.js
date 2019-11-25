function buttonForLogin() {
    document.getElementById('formLogin').style.display = "none";
    document.getElementById('bmiOrCalori').style.display = "block";  
}

// function validateForms() {
//     document.getElementById('formLogin').style.display = "none";
//     document.getElementById('bmiOrCalori').style.display = "block";
//     var login = document.forms["formForLogin"]["nama"].value;
//     if(login == '') {
//         alert("kolom nama harus diisi")
//         return false
//     }
// }

function buttonForBmi() {
    var beratBadan = document.getElementById("beratbadan").value
    var tinggiBadan = document.getElementById("tinggiBadan").value
    Number(beratBadan)
    Number(tinggiBadan)
    var hasil = beratBadan / (tinggiBadan * tinggiBadan)
    var showHasil = document.getElementById("showHasil")

    if (hasil >= 17.00 && hasil <= 18.50) {
        showHasil.innerHTML ="Anda kekurangan berat badan"
    } else if (hasil >= 16.00 && hasil <= 16.99) {
        showHasil.innerHTML = "Anda kekurangan berat badan, disarankan makan makanan yang bergizi"
    } else {
        showHasil.innerHTML = "Anda kekurangan berat badan, disarankan makan makanan yang bergizi dan jangan begadang"
    }
    
    if(hasil >= 18.5 && hasil <= 24.9) {
        showHasil.innerHTML = "Berat badan anda normal"
    }
    
    if (hasil >=25.00 && hasil <= 30.00) {
        showHasil.innerHTML = "Anda kelebihan berat badan"
    } else if (hasil >=30.00 && hasil <= 34.99){
        showHasil.innerHTML = "Anda obesitas, disarankan mengurangi makanan yang mengandung gula berlebih"
    } else {
        showHasil.innerHTML = "Anda obesitas, disarankan mengurangi makanan yang mengandung gula berlebih dan harus mulai berolahraga"
    }
    buttonForBmi()
}

// function buttonForCalori() {
//     var yangSayaMakan = document.getElementById("makananSaya").Value
//     var makanan = {
//         nasiputih: "175 kalori", lontong: "38 kalori", ketupat: "32 kalori", jagungRebus: "90,2 kalori", kentangRebus: "166 kalori", 
//         ketanPutih: "217 kalori", rotiTawar: "128 kalori", ubiRebus: "125 kalori", bubur: "44 kalori", mieInstan: "168 kalori", nasiUduk: "506 kalori",
//         buburAyam: "165 kalori", mieGoreng: "321 kalori", nasiGoreng: "267 kalori", spaghetti: "642 kalori", asinan: "208", ketoprak: "153 kalori",
//         sotoAyam: "101 kalori", rawon: "331 kalori", sotoPadang: "127 kalori", hamburger: "257 kalori", mieBakso: "302 kalori", pizza: "163 kalori", 
//         sateKambing: "729 kalori", siomay: "361 kalori", ayamPanggang: "164,3 kalori", empalDaging: "147 kalori", ikanLeleGoreng: "57,5 kalori",
//         ikanPatinGoreng: "252,7 kalori", ikanTeriGoreng: "66 kalori", kerangRebus: "59 kalori", telurMataSapi: "40 kalori", telurDadar: "188 kalori",
//         tempeBacem: "157 kalori", tempeGoreng: "118 kalori", sopSapi: "227 kalori", tahuGoreng: "111 kalori", tahuSumedang: "113 kalori",
//         sayurAsam: "88 kalori", sopBayam: "78 kalori", gudeg: "132 kalori", sayurLodeh: "61 kalori", tumisBuncis: "52 kalori", tumisDaunSingkong: "151 kalori",
//     }
//     document.getElementById("showMakanan").innerHTML =makanan.yangSayaMakan
// }