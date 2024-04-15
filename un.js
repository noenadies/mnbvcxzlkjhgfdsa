async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function fillForm(url) {
    try {
        const data = await fetchData(url);
        console.log(data , 'ver data');

        return data ;

    } catch (error) {
        console.error(error, 'estelado');
    }


}




async function ini() {
/*     let a = await fillForm('adds.json');
    console.log(decodifi(a));

 */
}


 


function fbtokdecodificar() {


    decodifi(document.getElementById("idtextim").value);

}

var vecua = "";


var vx = 888;

var v1 = 1 + vx;
var v2 = 2 + vx;
var v3 = 3 + vx;
var v4 = 4 + vx;
var v5 = 5 + vx;
var v6 = 6 + vx;
var v7 = 7 + vx;
var v8 = 8 + vx;
var v9 = 9 + vx;
var v10 = 10 + vx;
var v11 = 11 + vx;
var v12 = 12 + vx;
var v13 = 13 + vx;
var v14 = 14 + vx;
var v15 = 15 + vx;
var v16 = 16 + vx;
var v17 = 17 + vx;
var v18 = 18 + vx;
var v19 = 19 + vx;
var v20 = 20 + vx;
var v21 = 21 + vx;
var v22 = 22 + vx;
var v23 = 23 + vx;
var v24 = 24 + vx;

var v25 = 25 + vx;
var v26 = 26 + vx;
var v27 = 27 + vx;
var v28 = 28 + vx;
var v29 = 29 + vx;
var v30 = 30 + vx;
var v31 = 31 + vx;
var v32 = 32 + vx;
var v33 = 33 + vx;
var v34 = 34 + vx;
var v35 = 35 + vx;
var v36 = 36 + vx;
var v37 = 37 + vx;
var v38 = 38 + vx;
var v39 = 39 + vx;
var v40 = 40 + vx;
var v41 = 41 + vx;
var v42 = 42 + vx;
var v43 = 43 + vx;
var v44 = 44 + vx;
var v45 = 45 + vx;
var v46 = 46 + vx;
var v47 = 47 + vx;


var arraycodigo = []
var lt = "";


var stdecodi = "";

function decodifi(st) {
    let lt='';
    arraycodigo = [];

    stdecodi = st;
    arraycodigo = stdecodi.split(",");
    for (var i in arraycodigo) {
        if (arraycodigo[i] == "") { }
        else {
            switch (parseFloat(arraycodigo[i])) {
                case v1: lt = lt + "a"; break;
                case v2: lt = lt + "b"; break;
                case v3: lt = lt + "c"; break;
                case v4: lt = lt + "d"; break;
                case v5: lt = lt + "e"; break;
                case v6: lt = lt + "f"; break;
                case v7: lt = lt + "g"; break;
                case v8: lt = lt + "h"; break;
                case v9: lt = lt + "i"; break;
                case v10: lt = lt + "j"; break;
                case v11: lt = lt + "k"; break;
                case v12: lt = lt + "l"; break;
                case v13: lt = lt + "m"; break;
                case v14: lt = lt + "n"; break;
                case v15: lt = lt + "ñ"; break;
                case v16: lt = lt + "o"; break;
                case v17: lt = lt + "p"; break;
                case v18: lt = lt + "q"; break;
                case v19: lt = lt + "r"; break;
                case v20: lt = lt + "s"; break;
                case v21: lt = lt + "t"; break;
                case v22: lt = lt + "u"; break;
                case v23: lt = lt + "v"; break;
                case v24: lt = lt + "x"; break;
                case v25: lt = lt + "y"; break;
                case v26: lt = lt + "z"; break;
                case v27: lt = lt + "."; break;
                case v28: lt = lt + ":"; break;
                case v29: lt = lt + "/"; break;
                case v30: lt = lt + ""; break;
                case v31: lt = lt + "0"; break;
                case v32: lt = lt + "1"; break;
                case v33: lt = lt + "2"; break;
                case v34: lt = lt + "3"; break;
                case v35: lt = lt + "4"; break;
                case v36: lt = lt + "5"; break;
                case v37: lt = lt + "6"; break;
                case v38: lt = lt + "7"; break;
                case v39: lt = lt + "8"; break;
                case v40: lt = lt + "9"; break;
                case v41: lt = lt + "9"; break;
                case v42: lt = lt + " "; break;
                case v43: lt = lt + "-"; break;
                default:

            }
        }
    }

    return lt;
}



var letr = "";
var arryletr = [];
function letraanumero(letr = '') {
   let ultimost = '';
    arryletr = [];

    arryletr = letr.split("");

    for (var i in arryletr) {



        switch (arryletr[i]) {
            case "a": ultimost = ultimost + String(vx + 1) + ","; break;
            case "b": ultimost = ultimost + String(vx + 2) + ","; break;
            case "c": ultimost = ultimost + String(vx + 3) + ","; break;
            case "d": ultimost = ultimost + String(vx + 4) + ","; break;
            case "e": ultimost = ultimost + String(vx + 5) + ","; break;
            case "f": ultimost = ultimost + String(vx + 6) + ","; break;
            case "g": ultimost = ultimost + String(vx + 7) + ","; break;
            case "h": ultimost = ultimost + String(vx + 8) + ","; break;
            case "i": ultimost = ultimost + String(vx + 9) + ","; break;
            case "j": ultimost = ultimost + String(vx + 10) + ","; break;
            case "k": ultimost = ultimost + String(vx + 11) + ","; break;
            case "l": ultimost = ultimost + String(vx + 12) + ","; break;
            case "m": ultimost = ultimost + String(vx + 13) + ","; break;
            case "n": ultimost = ultimost + String(vx + 14) + ","; break;
            case "ñ": ultimost = ultimost + String(vx + 15) + ","; break;
            case "o": ultimost = ultimost + String(vx + 16) + ","; break;
            case "p": ultimost = ultimost + String(vx + 17) + ","; break;
            case "q": ultimost = ultimost + String(vx + 18) + ","; break;
            case "r": ultimost = ultimost + String(vx + 19) + ","; break;
            case "s": ultimost = ultimost + String(vx + 20) + ","; break;
            case "t": ultimost = ultimost + String(vx + 21) + ","; break;
            case "u": ultimost = ultimost + String(vx + 22) + ","; break;
            case "v": ultimost = ultimost + String(vx + 23) + ","; break;
            case "x": ultimost = ultimost + String(vx + 24) + ","; break;
            case "y": ultimost = ultimost + String(vx + 25) + ","; break;
            case "z": ultimost = ultimost + String(vx + 26) + ","; break;
            case ".": ultimost = ultimost + String(vx + 27) + ","; break;
            case ":": ultimost = ultimost + String(vx + 28) + ","; break;
            case "/": ultimost = ultimost + String(vx + 29) + ","; break;
            case "": ultimost = ultimost + String(vx + 30) + ","; break;
            case "0": ultimost = ultimost + String(vx + 31) + ","; break;
            case "1": ultimost = ultimost + String(vx + 32) + ","; break;
            case "2": ultimost = ultimost + String(vx + 33) + ","; break;
            case "3": ultimost = ultimost + String(vx + 34) + ","; break;
            case "4": ultimost = ultimost + String(vx + 35) + ","; break;
            case "5": ultimost = ultimost + String(vx + 36) + ","; break;
            case "6": ultimost = ultimost + String(vx + 37) + ","; break;
            case "7": ultimost = ultimost + String(vx + 38) + ","; break;
            case "8": ultimost = ultimost + String(vx + 39) + ","; break;
            case "9": ultimost = ultimost + String(vx + 40) + ","; break;
            case "11": ultimost = ultimost + String(vx + 41) + ","; break;
            case "12": ultimost = ultimost + String(vx + 42) + ","; break;
            case "14": ultimost = ultimost + String(vx + 43) + ","; break;
            case "b": ultimost = ultimost + String(vx + 44) + ","; break;
            case "a": ultimost = ultimost + String(vx + 1) + ","; break;
            case "b": ultimost = ultimost + String(vx + 2) + ","; break;
            case "a": ultimost = ultimost + String(vx + 1) + ","; break;
            case "b": ultimost = ultimost + String(vx + 2) + ","; break;
            case "-": ultimost = ultimost + String(vx + 2) + ","; break;
            default:

        }


    }
   
    return ultimost;


}










 