
const aside = document.querySelector(".principle-card");
const sections = document.querySelectorAll(".one-product, .div-item-orders");
const body = document.querySelector("body");

function updateCardTotal(card) {
    const quantitySpan = card.querySelector(".number-bottom");
    const priceElement = card.querySelector(".price-to-card");
    const basePrice = Number(priceElement.dataset.basePrice);
    const quantity = Number(quantitySpan.textContent);

    let extrasTotal = 0;
    card.querySelectorAll(".products-info").forEach(row => {
        const controls = row.querySelector(".add-more-products");
        if (!controls || controls.classList.contains("hidden")) return;

        const priceSpan = row.querySelector(".price-product");
        const numberSpan = row.querySelector(".number-for-products");
        extrasTotal += Number(priceSpan.dataset.basePrice) * Number(numberSpan.textContent);
    });

    priceElement.textContent = `R$ ${((basePrice * quantity) + extrasTotal).toFixed(2)}`;
}

aside.addEventListener("click", (event) => {
    const exitButton = event.target.closest(".button-exit");
    if (exitButton) {
        aside.classList.add("hidden");
        body.style.overflowY = "auto";
        aside.innerHTML = "";
        return;
    }

    const addOptionButton = event.target.closest(".button-svg");
    if (addOptionButton) {
        const product = addOptionButton.closest(".products-info");
        const controls = product.querySelector(".add-more-products");
        addOptionButton.classList.add("hidden");
        controls.classList.remove("hidden");
        updateCardTotal(addOptionButton.closest(".card"));
        return;
    }

    const moreButton = event.target.closest(".mais");
    if (moreButton) {
        const product = moreButton.closest(".products-info");
        const numberProductsSpan = product.querySelector(".number-for-products");
        const priceSpan = product.querySelector(".price-product");
        const basePrice = Number(priceSpan.dataset.basePrice);

        let numberProducts = Number(numberProductsSpan.textContent);
        numberProducts += 1;
        numberProductsSpan.textContent = numberProducts;
        priceSpan.textContent = `R$ ${(basePrice * numberProducts).toFixed(2)}`;

        updateCardTotal(moreButton.closest(".card"));
        return;
    }

    const lessButton = event.target.closest(".menos");
    if (lessButton) {
        const product = lessButton.closest(".products-info");
        const addButton = product.querySelector(".button-svg");
        const controls = product.querySelector(".add-more-products");
        const numberProductsSpan = product.querySelector(".number-for-products");
        const priceSpan = product.querySelector(".price-product");
        const basePrice = Number(priceSpan.dataset.basePrice);

        let numberProducts = Number(numberProductsSpan.textContent);
        numberProducts -= 1;
        numberProductsSpan.textContent = numberProducts;
        priceSpan.textContent = `R$ ${(basePrice * numberProducts).toFixed(2)}`;

        if (numberProducts === 0) {
            controls.classList.add("hidden");
            addButton.classList.remove("hidden");
            numberProductsSpan.textContent = "1";
            priceSpan.textContent = `R$ ${basePrice.toFixed(2)}`;
        }

        updateCardTotal(lessButton.closest(".card"));
        return;
    }

    const increaseButton = event.target.closest(".button-somar");
    if (increaseButton) {
        const card = increaseButton.closest(".card");
        const quantitySpan = card.querySelector(".number-bottom");
        let quantity = Number(quantitySpan.textContent);
        quantity += 1;
        quantitySpan.textContent = quantity;
        updateCardTotal(card);
        return;
    }

    const decreaseButton = event.target.closest(".button-subtrair");
    if (decreaseButton) {
        const card = decreaseButton.closest(".card");
        const quantitySpan = card.querySelector(".number-bottom");
        let quantity = Number(quantitySpan.textContent);
        if (quantity === 1) return;
        quantity -= 1;
        quantitySpan.textContent = quantity;
        updateCardTotal(card);
        return;
    }
});

sections.forEach(section => {
    section.addEventListener("click", (event) => {
        const clickedProduct = event.target.closest(".one-product, .div-item-orders");
        if (!clickedProduct) return;
        const productId = Number(clickedProduct.dataset.id);
        let selectProduct = null;

        products.forEach(category => {
            const foundProduct = category.produtos.find(produto => {
                return produto.id === productId;
            });
            if (foundProduct) {
                selectProduct = foundProduct;
            }
        });
        if (!selectProduct) return;

        aside.classList.remove("hidden");
        body.style.overflowY = "hidden";

        aside.innerHTML = "";

        const divCard = document.createElement("div");
        divCard.classList.add("card");

        const main = document.createElement("div");
        main.classList.add("main-content");

        const additional = productsCard.map(produto => {
            return `
                <div class="products-info">
                    <p class="one-option">${produto.name}</p>
                    <div class="add-option">
                        <p class="one-option price-product" data-base-price="${produto.price.toFixed(2)}">R$ ${produto.price.toFixed(2)}</p>
                        <div class="add-more-products hidden">
                            <button class="svg-button menos">
                                <svg class="svg-less" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#FFB347" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M6.1,13v-2H18v2H6.1z"></path> <rect class="st0" width="24" height="24"></rect> </g></svg>
                            </button>
                                <span class="number-for-products">1</span>
                            <button class="svg-button mais">
                                <svg class="svg-more" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z"></path></g></g></svg>
                            </button>
                        </div>
                            <button class="button-svg">
                                <svg class="svg-add-option" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z"></path></g></g></svg>
                            </button>
                    </div>
                </div>
        `;
        }).join("");


        const sauces = products.filter(category => category.nome === "Molhos");
        const saucesProducts = sauces.flatMap(category => category.produtos);
        const saucesAndAdditionals = products.filter(category => category.nome === "Entradas" || category.nome === "Molhos");
        const allProducts = saucesAndAdditionals.flatMap(category => category.produtos);
        const productSelected = allProducts.filter(product => product.id === 24 || product.id === 5 || product.id === 26 || product.id === 27);

        const additionalSauces = saucesProducts.map(produto => {
            return `
            <div class="products-info">
                    <p class="one-option">${produto.name}</p>
                    <div class="add-option">
                        <p class="one-option price-product" data-base-price="${produto.price.toFixed(2)}">R$ ${produto.price.toFixed(2)}</p>
                        <div class="add-more-products hidden">
                            <button class="svg-button menos">
                                <svg class="svg-less" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xml:space="preserve" stroke="#FFB347" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;} </style> <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M6.1,13v-2H18v2H6.1z"></path> <rect class="st0" width="24" height="24"></rect> </g></svg>
                            </button>
                                <span class="number-for-products">1</span>
                            <button class="svg-button mais">
                                <svg class="svg-more" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z"></path></g></g></svg>
                            </button>
                        </div>
                            <button class="button-svg">
                                <svg class="svg-add-option" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"> <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z"></path></g></g></svg>
                            </button>
                    </div>
                </div>
            `
        }).join("")

        const additionalSum = productSelected.map(product => {
            return `
                <div class="products-info">
                    <div>
                        <p class="one-option">${product.name}</p>
                    </div>
                    <label class="one-checkbox" for="cbx5">
                        <p class="one-option">R$ ${product.price.toFixed(2)}</p>
                        <input type="checkbox" name="fritas" id="cbx">
                    </label>
                </div> 
        `
        }).join("");

        if (selectProduct.category === "Clássicos" || selectProduct.category === "Especiais" || selectProduct.category === "Kids") {
            main.innerHTML = `
                <div class= "card-info">
                    <div class="exit-the-card">
                        <button class="button-exit">
                            <svg viewBox="-1.92 -1.92 35.84 35.84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"> </path> </g></svg>
                        </button>
                        <h2 class= "card-title">${selectProduct.name}</h2>
                    </div>
                        <p class= "card-description">${selectProduct.description ?? ""}</p>
                </div>
                <div class="add-products-to-cart">
                    <div class="products-one">
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Qual o ponto?</p>
                                <p class="one-option">Escolha 1 opção</p>
                            </div>
                            <div class="required-title">
                                <h4 class="obligatory">Obrigatório</h4>
                            </div>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Ao ponto (Recomendado)</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Bem Passado</p>
                            </div>
                            <label class="one-radio" for="cbx2">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Deseja Ketchup?</p>
                                <p class="one-option">Opcional - escolha até 1 opção</p>
                            </div>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Não Obrigado</p>
                            </div>
                            <label class="one-radio" for="cbx3">
                                <input type="radio" name="ketchup" id="cbx">
                            </label>
                        </div> 
                        <div class="products-info">
                            <div>
                                <p class="one-option">Sim</p>
                            </div>
                            <label class="one-radio" for="cbx4">
                                <input type="radio" name="ketchup" id="cbx"> 
                            </label>
                        </div>
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Turbine seu Burguer</p>
                                <p class="one-option">Opcional - Escolha até 5 opções totalizando até 5 itens</p>
                            </div>
                        </div>
                        ${additional}
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Acompanhamentos e molhos</p>
                                <p class="one-option">Opcional</p>
                            </div>
                        </div>
                        ${additionalSum}
                        <div class="card-fixed">
                            <div class= "card-price">
                                <b class="price-to-card" data-base-price="${selectProduct.price}">R$ ${selectProduct.price.toFixed(2)}</b>
                                <div class="button-more-or-less">
                                    <button class="button-subtrair btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                    </button>
                                    <span class="number-bottom">1</span>
                                    <button class="button-somar btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class= "button-add-cart">
                                <button class="add-cart"><svg class="svg-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                                <span class="cart-text" >Adicionar</span></button>
                            </div>
                        </div>
                
    `
        } else if (selectProduct.category === "MilkShakes") {
            main.innerHTML = `
            <div class= "card-info">
                    <div class="exit-the-card">
                        <button class="button-exit">
                            <svg viewBox="-1.92 -1.92 35.84 35.84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"> </path> </g></svg>
                        </button>
                        <h2 class= "card-title">${selectProduct.name}</h2>
                    </div>
                        <p class= "card-description">${selectProduct.description ?? ""}</p>
                </div>
                <div class="container">
                    <h3>Selecione o tamanho:</h3>
                        <div class="container-price-description-to-milk">
                            <div class="div-price-description-to-milk">
                                <span class="button-to-milk">300</span>
                                <span class="description-to-milk">300ml</span>
                                <span class="price-to-milk">R$ ${selectProduct.price.toFixed(2)}</span>
                            </div>
                            <div class="div-price-description-to-milk">
                                <span class="button-to-milk">400</span>
                            <span class="description-to-milk">400ml</span>
                            <span class="price-to-milk">R$ ${selectProduct.price400ml.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-fixed">
                            <div class= "card-price">
                                <b class="price-to-card" data-base-price="${selectProduct.price}">R$ ${selectProduct.price.toFixed(2)}</b>
                                <div class="button-more-or-less">
                                    <button class="button-subtrair btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                    </button>
                                    <span class="number-bottom">1</span>
                                    <button class="button-somar btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class= "button-add-cart">
                                <button class="add-cart"><svg class="svg-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                                <span class="cart-text" >Adicionar</span></button>
                            </div>
                        </div>
            `
        } else if (selectProduct.category === "Combos Individuais") {
            main.innerHTML = `
            <div class= "card-info">
                    <div class="exit-the-card">
                        <button class="button-exit">
                            <svg viewBox="-1.92 -1.92 35.84 35.84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"> </path> </g></svg>
                        </button>
                        <h2 class= "card-title">${selectProduct.name}</h2>
                    </div>
                        <p class= "card-description">${selectProduct.description ?? ""}</p>
                </div>
                 <div class="add-products-to-cart">
                    <div class="products-one">
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Escolha 1 opção</p>
                                <p class="one-option">Escolha 1 opção</p>
                            </div>
                            <div class="required-title">
                                <h4 class="obligatory">Obrigatório</h4>
                            </div>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Fanta uva 350ml</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Coca-Cola 350ml</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Soda Italiana 400ml</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Acompanhamento</p>
                                <p class="one-option">Escolha 1 opção</p>
                            </div>
                            <div class="required-title">
                                <h4 class="obligatory">Obrigatório</h4>
                            </div>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">Fritas simples P</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                        <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Burguer</p>
                                <p class="one-option">Escolha 1 opção</p>
                            </div>
                            <div class="required-title">
                                <h4 class="obligatory">Obrigatório</h4>
                            </div>
                        </div>
                        <div class="products-info">
                            <div>
                                <p class="one-option">${selectProduct.description.split("+")[0].trim()}</p>
                            </div>
                            <label class="one-radio" for="cbx">
                                <input type="radio" name="point" id="cbx">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="card-fixed">
                            <div class= "card-price">
                                <b class="price-to-card" data-base-price="${selectProduct.price}">R$ ${selectProduct.price.toFixed(2)}</b>
                                <div class="button-more-or-less">
                                    <button class="button-subtrair btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                    </button>
                                    <span class="number-bottom">1</span>
                                    <button class="button-somar btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class= "button-add-cart">
                                <button class="add-cart"><svg class="svg-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                                <span class="cart-text" >Adicionar</span></button>
                            </div>
                        </div>
            `
        } else if (selectProduct.category === "Entradas") {
            main.innerHTML = `
            <div class= "card-info">
                    <div class="exit-the-card">
                        <button class="button-exit">
                            <svg viewBox="-1.92 -1.92 35.84 35.84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"> </path> <path d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"> </path> </g></svg>
                        </button>
                        <h2 class= "card-title">${selectProduct.name}</h2>
                    </div>
                        <p class= "card-description">${selectProduct.description ?? ""}</p>
                </div>
            <div class="products-info">
                            <div class="title-products">
                                <p class="point-to-meat">Complementos</p>
                                <p class="one-option">Opcional</p>
                            </div>
                        </div>
                        ${additionalSauces}
                        <div class="card-fixed">
                            <div class= "card-price">
                                <b class="price-to-card" data-base-price="${selectProduct.price}">R$ ${selectProduct.price.toFixed(2)}</b>
                                <div class="button-more-or-less">
                                    <button class="button-subtrair btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
                                    </button>
                                    <span class="number-bottom">1</span>
                                    <button class="button-somar btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class= "button-add-cart">
                                <button class="add-cart"><svg class="svg-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                                <span class="cart-text" >Adicionar</span></button>
                            </div>
                        </div>
            `
        }else if (selectProduct.category === "Molhos" || selectProduct.category === "Bebidas") {
            main.innerHTML = `
            <div class="card-info">
                <div class="exit-the-card">
                    <button class="button-exit">
                        <svg viewBox="-1.92 -1.92 35.84 35.84" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="icomoon-ignore"> </g>
                                <path
                                    d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z">
                                </path>
                                <path
                                    d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z">
                                </path>
                            </g>
                        </svg>
                    </button>
                    <h2 class="card-title">${selectProduct.name}</h2>
                </div>
                <p class="card-description">${selectProduct.description ?? ""}</p>
            </div>
            <div class="card-opinion">
                <input class="opinion-input" type="text" placeholder="Digite observações aqui (opcional)...">
            </div>
            <div class="card-fixed">
                <div class="card-price">
                    <b class="price-to-card" data-base-price="${selectProduct.price}">R$ ${selectProduct.price.toFixed(2)}</b>
                    <div class="button-more-or-less">
                        <button class="button-subtrair btn">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                                <path
                                    d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z" />
                            </svg>
                        </button>
                        <span class="number-bottom">1</span>
                        <button class="button-somar btn">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                                <path
                                    d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="button-add-cart">
                    <button class="add-cart"><svg class="svg-cart" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                            <path
                                d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                        </svg>
                        <span class="cart-text">Adicionar</span></button>
                </div>
            </div>
            `

        }

        divCard.appendChild(main);
        aside.appendChild(divCard);

    })

})