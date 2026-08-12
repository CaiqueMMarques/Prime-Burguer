const imageLupa = document.querySelector(".svg-lupa");
const inputLogoImg = document.querySelector(".input-logo-img");
const imageX = document.querySelector(".svg-logo-x");
const ordersMenu = document.querySelector(".div-img-orders");

imageLupa.addEventListener("click", () => {
    inputLogoImg.style.display = "block";
    inputLogoImg.focus();
    imageX.style.display = "block";
});
imageX.addEventListener("click", () => {
    inputLogoImg.style.display = "none";
    imageX.style.display = "none";
})


const sectionProducts = document.querySelector(".products-section");
const categoriaClassicos = products.find(classico => classico.nome === "Clássicos");
const selectedProducts = categoriaClassicos.produtos.filter(product => product.id === 8 || product.id === 11);
let ordersNew = ""
selectedProducts.forEach(product => {
        ordersNew += `
                <div class="div-img-orders">
                    <div class="div-item-orders" data-id="${product.id}">
                        <img src="${product.src}" alt="${product.name}">
                        <p class="product-orders">${product.name}</p>
                        <b>R$ ${product.price.toFixed(2)}</b>
                    </div>
                </div>`;
    });
    ordersMenu.innerHTML = ordersNew;


products.forEach(category => {

    const categoryTitle = document.createElement("h3")
    categoryTitle.innerHTML = category.nome;

    const productsDiv = document.createElement("div")
    productsDiv.classList.add("products");

    const cards = category.produtos.map(produto =>{
        const prefixoPreço = category.nome === "MilkShakes" ? "A partir de R$ " : "R$";

        return `
            <div class="one-product" data-id="${produto.id}">

                <img src="${produto.src}" alt="${produto.name}">

                <div class="info-one-product">
                    <h5>${produto.name}</h5>

                    <p>${produto.description ?? ""}</p>

                    <b>${prefixoPreço} ${produto.price.toFixed(2)}</b>
                </div>

            </div>
        `
    }).join("");
    productsDiv.innerHTML = cards;

    sectionProducts.appendChild(categoryTitle)
    sectionProducts.appendChild(productsDiv)

})

