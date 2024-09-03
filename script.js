let li, ls, nrect, funcion, base, area;

function calcularAreaSup() {
    li = parseFloat(document.getElementById("li").value);
    ls = parseFloat(document.getElementById("ls").value);
    nrect = parseInt(document.getElementById("nrect").value);
    funcion = document.getElementById("func").value;
    const valorNo = "y";

    if (isNaN(li) || isNaN(ls) || isNaN(nrect) || nrect <= 0) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    if(funcion.includes(valorNo)){
        alert("Favor de NO incluir un valor para Y en la función que deseas utilizar");
        limpiarCampos();
    }
    else{
        area = 0;
        base = (ls - li) / nrect;
        area = 0;
    
        for (let i = 1; i <= nrect; i++) {
            const xi = li + base*i;
            const altura = calcularAltura(xi,funcion);  
            area += base * altura;
        }

        document.getElementById("areaSup").textContent = area.toFixed(5);
    }
}

function calcularAltura(xi,funcion) {
    const fnmodi = funcion.replace(/x/g,xi);
    return eval(fnmodi)
}

function areaInferior() {
    area = 0;

    for (let i = 0; i < nrect; i++) {
        const xi = li + base*i;
        const altura = calcularAltura(xi,funcion);  
        area += base * altura;
    }
    
    document.getElementById("areaInf").textContent = area.toFixed(5);
}

function limpiarCampos(){
    document.getElementById("li").value = "";
    document.getElementById("ls").value = "";
    document.getElementById("nrect").value = "";
    document.getElementById("func").value = "";
    document.getElementById("areaSup").textContent = "-";
    document.getElementById("areaInf").textContent = "-";
}