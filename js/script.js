/* inicio encabezado------------------------------------------------------------*/ 
const productosCarrito = [
  {
    nombre: "Chocolate",
    precio: 2000,
    cantidad: 5,
    img: "img/products/chocolate.jpg",
  },
  {
    nombre: "Galletas",
    precio: 1500,
    cantidad: 10,
    img: "img/products/galletas.jpg",
  },
  {
    nombre: "Café",
    precio: 5000,
    cantidad: 1,
    img: "img/products/cafe.jpg",
  },
  {
    nombre: "Leche",
    precio: 2500,
    cantidad: 8,
    img: "img/products/leche.jpg",
  },
  {
    nombre: "Pan",
    precio: 1000,
    cantidad: 15,
    img: "img/products/pan.jpg",
  },
];

let carritoVisible = false;

function openCar() {
  let total_global = 0;
  const tabla = document.getElementById("tabla");
  const tablaBody = document.querySelector("#tabla tbody");

  

  if (!carritoVisible) {
    tablaBody.innerHTML = "";
    for (let i = 0; i < productosCarrito.length; i++) {
      const nombreProductor = productosCarrito[i].nombre;
      const precioProducto = productosCarrito[i].precio;
      const cantidadProducto = productosCarrito[i].cantidad;
      const total = parseFloat(precioProducto) * parseFloat(cantidadProducto);
      total_global = total_global + total;

      const row = document.createElement("tr");
      const imgCell = document.createElement("td");
      const nombreCell = document.createElement("td");
      const precioCell = document.createElement("td");
      const cantidadCell = document.createElement("td");
      const totalCell = document.createElement("td");
      nombreCell.textContent = nombreProductor;
      precioCell.textContent = precioProducto;
      cantidadCell.textContent = cantidadProducto;
      totalCell.textContent = total;
      row.appendChild(nombreCell);
      row.appendChild(precioCell);
      row.appendChild(cantidadCell);
      row.appendChild(totalCell);
      tablaBody.appendChild(row);

      tabla.style.display = 'table';
      carritoVisible = true;
    }
  } else {
    tabla.style.display = 'none';
    carritoVisible = false;
  }
}
/*fin encabezado--------------------------------------------------------------*/