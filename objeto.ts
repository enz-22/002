interface Persona{
    Nombre: String;
    Apellido: String;
    Acercade: String;
    Titulos: [String, string];
}

let porfolio:Persona={
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulos:["",""],
}

function GetNombre(nombre:String):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:String):String{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return porfolio.Apellido=apellido;
}

function GetAcercade(acercade:String):String{
    const a = document.getElementById("text-acercade");
    a.textContent=acercade;
}

function GetTitulos(titulo1:String, titulo2:String):String{
    const a = document.getElementById("Titulos");
    a?.textContent=titulo1, titulo2;
    return porfolio.Titulos[0]=titulo1, porfolio.Titulos[1]=titulo2;
}

function showfile1(input): void {
    let file = input.files[0];
    

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent){
        var s=reader.result?.toString();
        console.log(s);
        var arr = s?.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    }
}