const frutas = [
    { id: 1, nombre: "🍎", precio: 100 },
    { id: 2, nombre: "🥥", precio: 200 },
    { id: 3, nombre: "🍐", precio: 300 },
    { id: 4, nombre: "🍉", precio: 400 },
    { id: 5, nombre: "🍊", precio: 500 },
];

const mercadito = document.querySelector("#mercadito");
const total = document.querySelector("#total");
const primero = document.querySelector("#primero");
const ultimo = document.querySelector("#ultimo");

const formulario = document.querySelector("#formulario");
const min = document.querySelector("#min");
const max = document.querySelector("#max");

const renderMejorado = (array) => {
    if (array.length === 0) {
        mercadito.innerHTML = "<li>No hay frutas en stock</li>";
        total.innerHTML = "Cantidad de frutas: 0";
        primero.innerHTML = "Primera fruta en stock: No hay frutas en stock";
        ultimo.innerHTML = "Última fruta en stock: No hay frutas en stock";
        return;
    }

    let html = "";
    for (let fruta of array) {
        html += `<li>${fruta.id} ${fruta.nombre}: ${fruta.precio}</li>`;
    }
    mercadito.innerHTML = html;
    total.innerHTML = `Cantidad de Frutas: ${array.length}`;
    primero.innerHTML = `Primera fruta en stock: ${array[0].nombre}`;
    ultimo.innerHTML = `Última fruta en stock: ${
        array[array.length - 1].nombre
    }`;
};

renderMejorado(frutas);

formulario.addEventListener("reset", () => renderMejorado(frutas));

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const minimo = +min.value;
    const maximo = +max.value;

    const arrayFiltrado = [];
    for (let fruta of frutas) {
        if (fruta.precio >= minimo && fruta.precio <= maximo) {
            arrayFiltrado.push(fruta);
        }
    }
    renderMejorado(arrayFiltrado);
});
