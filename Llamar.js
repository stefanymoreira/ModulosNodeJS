module.exports = function (numero){
    var contador=0
    var exacto=0
    for (var i=1; i<=numero; i++){
        if ( numero%i==0 ){
            exacto=exacto+1
        }
        contador=contador+1
    }
    if (exacto==2){
        return " es primo"
    }else{
        return " no es primo"
    }
}