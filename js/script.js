
// <!------------------------------------------------------ INICIO SECCION MAIN ------------------------------------------->
let arreglo=[]
function agregarProducto(producto){
    if(esta(producto.Producto)){
        switch (producto.Producto) {
            case 'Guillotina':
                producto.cantidad=parseInt(document.getElementById("quantityGuillotina").value);
                arreglo.push(producto);
                break;
            case 'Papiros':
                producto.cantidad=parseInt(document.getElementById("quantityPapiros").value);
                arreglo.push(producto);    
            break;
            case 'Resma':
                producto.cantidad=parseInt(document.getElementById("quantityResma").value);
                arreglo.push(producto);       
            break;
            case 'Origami':
                producto.cantidad=parseInt(document.getElementById("quantityOrigami").value);
                arreglo.push(producto);     
            break;
            case 'Tinta':
                producto.cantidad=parseInt(document.getElementById("quantityTinta").value);
                arreglo.push(producto);     
            break;
            case 'Caballete':
                producto.cantidad=parseInt(document.getElementById("quantityCaballete").value);
                arreglo.push(producto);    
            break;
            case 'Acuarela':
                producto.cantidad=parseInt(document.getElementById("quantityAcuarela").value);
                arreglo.push(producto);      
            break;
            case 'Clip':
                producto.cantidad=parseInt(document.getElementById("quantityClip").value);
                arreglo.push(producto);     
            break;
            case 'Sello':
                producto.cantidad=parseInt(document.getElementById("quantitySello").value);
                arreglo.push(producto);      
            break;
            default:
                break;
        }
    }else{
        let p=indice(producto.Producto);
        switch (producto.Producto) {
            case 'Guillotina':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityGuillotina").value);
                break;
            case 'Papiros':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityPapiros").value);    
            break;
            case 'Resma':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityResma").value);       
            break;
            case 'Origami':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityOrigami").value);     
            break;
            case 'Tinta':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityTinta").value);     
            break;
            case 'Caballete':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityCaballete").value);    
            break;
            case 'Acuarela':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityAcuarela").value);      
            break;
            case 'Clip':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantityClip").value);     
            break;
            case 'Sello':
                arreglo[p].cantidad+=parseInt(document.getElementById("quantitySello").value);   
            break;
            default:
                break;
        }
    }
    console.log(arreglo);
}

function esta(producto){
    for (let index = 0; index < arreglo.length; index++) {
        if (String(arreglo[index].Producto)==producto){
            return false;
        }
    }
    return true;
}

function indice(producto){
    for (let index = 0; index < arreglo.length; index++) {
        if (String(arreglo[index].Producto)==producto){
            return index;
        }
    }
}
// <!------------------------------------------------------ FINAL SECCION MAIN ------------------------------------------->