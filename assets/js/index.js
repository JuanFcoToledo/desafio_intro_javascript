let precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

/* Obtiene el valor de la cantidad. */
let cantidadSpan = document.querySelector(".cantidad");
console.log(cantidadSpan.innerHTML);
console.log(typeof cantidadSpan.innerHTML);

/* Obtiene el valor del total a pagar. */
let totalSpan = document.querySelector(".valor-total");
console.log(totalSpan.innerHTML);
console.log(typeof totalSpan.innerHTML);
totalSpan.innerHTML = 0;

/* Agrega funciones para aumentar o disminuir la cantidad de Laptops. */
function aumentar() {
  cantidadSpan.innerHTML = parseInt(cantidadSpan.innerHTML) + 1;
  /* cálculo del total */
  console.log(
    `Cantidad = ${cantidadSpan.innerHTML}; Precio = ${precio}; Total = ${
      parseInt(cantidadSpan.innerHTML) * precio
    }`
  );
  totalSpan.innerHTML = parseInt(cantidadSpan.innerHTML) * precio;
}

function disminuir() {
  if (parseInt(cantidadSpan.innerHTML) >= 1) {
    cantidadSpan.innerHTML = parseInt(cantidadSpan.innerHTML) - 1;
    /* cálculo del total */
    console.log(
      `Cantidad = ${cantidadSpan.innerHTML}; Precio = ${precio}; Total = ${
        parseInt(cantidadSpan.innerHTML) * precio
      }`
    );
    totalSpan.innerHTML = parseInt(cantidadSpan.innerHTML) * precio;
  } else {
    cantidadSpan.innerHTML = "0";
    /* cálculo del total */
    console.log(
      `Cantidad = ${cantidadSpan.innerHTML}; Precio = ${precio}; Total = ${
        parseInt(cantidadSpan.innerHTML) * precio
      }`
    );
    totalSpan.innerHTML = parseInt(cantidadSpan.innerHTML) * precio;
  }
}
