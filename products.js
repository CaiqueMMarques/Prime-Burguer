const products = [
    {
        nome: "Clássicos",
        produtos: [
            { id: 8, name: "Cheese Bacon", price: 24.00, category: "Clássicos", vegan: false, description: "Pão Tradicional + Carne bovina 130g + Queijo cheddar + Cebola caramelizada + Bacon + Maionese de alho assado.", src: "./food/cheese-bacon.png" },
            { id: 9, name: "Cheese Burguer", price: 16.00, category: "Clássicos", vegan: false, description: "Pão tradicional + Carne bovina 130g + Queijo mussarela.", src: "./food/cheese-burguer.png" },
            { id: 10, name: "Cheese Frango", price: 20.00, category: "Clássicos", vegan: false, description: "Pão tradicional + Disco de frango empanado 120g + Catupiry + Alface + Cebola roxa + Maionese de alho assado .", src: "./food/cheese-frango.png" },
            { id: 11, name: "Cheese Salada", price: 19.00, category: "Clássicos", vegan: true, description: "Pão tradicional + Hambúrguer vegetal 130g + Queijo vegano + Alface + Tomate + Cebola roxa + Maionese vegana.", src: "./food/cheese-salada.png" },
            { id: 37, name: "Single Cheddar", price: 19.00, category: "Clássicos", vegan: false, description: "Pão Tradicional + Carne bovina 130G + Queijo cheddar + Cebola caramelizada + Molho barbecue.", src: "./food/single-cheddar.png" },
        ]
    },
    {
        nome: "Especiais",
        produtos: [
            { id: 28, name: "Manhattan", price: 25.00, category: "Especiais", vegan: false, description: "Pão australiano + Carne bovina 130g + Queijo prato + 80g Cupim desfiado + Cebola crispy + Maionese de alho", src: "./food/manhattan.png" },
            { id: 29, name: "Miami", price: 24.00, category: "Especiais", vegan: false, description: "Pão Tradicional + Carne bovina 130g + Fusão de queijo gorgonzola e queijo mussarela + Cebola crispy", src: "./food/miami.png" },
            { id: 31, name: "Pineapple", price: 22.00, category: "Especiais", vegan: false, description: "Pão Tradicional + Burguer de pernil Suino moido + Queijo Provolone + Abacaxi assado.", src: "./food/pineapple.png" },
            { id: 21, name: "Duplo cheddar", price: 25.00, category: "Especiais", vegan: false, description: "Pão Tradicional + 2 Carnes bovinas 130g ( cada ) + Queijo cheddar + Cebola caramelizada + Molho barbecue.", src: "./food/duplo-cheddar.png" },
            { id: 6, name: "Big Prime", price: 23.00, category: "Especiais", vegan: false, description: "Pão tradicional + 2 carnes bovinas 80g + Queijo cheddar + Alface + Cebola roxa + Picles de pepino + Molho especial.", src: "./food/big-prime.png" }
        ]
    },
    {
        nome: "Kids",
        produtos: [
            { id: 33, name: "Salada kids", price: 14.00, category: "Kids", vegan: true, description: "Pão tradicional + Carne bovina 80g + Queijo prato + Alface + Tomate + Molho especial.", src: "./food/salada-kids.png" },
            { id: 4, name: "Bacon Kids", price: 15.00, category: "Kids", vegan: false, description: "Pão tradicional + Carne bovina 80g + Queijo Cheddar + Farofa de bacon + Molho especial.", src: "./food/bacon-kids.png" },
            { id: 7, name: "Burguer Kids", price: 12.00, category: "Kids", vegan: false, description: "Pão tradicional + Carne bovina 80g + Queijo Prato.", src: "./food/burguer-kids.png" }
        ]
    },
    {
        nome: "MilkShakes",
        produtos: [
            { id: 34, name: "Shake Morango", price: 14.00, price400ml: 17.00, category: "MilkShakes", description: "Sorvete de morango + Leite + Calda de morango", src: "./food/shake-morango.png" },
            { id: 35, name: "Shake Negresco", price: 14.00, price400ml: 17.00, category: "MilkShakes", description: "Sorvete de baunilha + Leite + Oreo. + Calda de chocolate", src: "./food/shake-negresco.png" },
            {id: 36, name: "Shake Nutella", price: 14.00, price400ml: 17.00, category: "MilkShakes", description: "Sorvete de baunilha + Leite + Nutella", src: "./food/shake-nutella.png"},
        ]
    },
    {
        nome: "Novidades",
        produtos: [
            {id: 38, name: "Soda Italiana 400ml", price: 12.00, category: "Novidades", description: "Nosso refrigerante da casa. Àgua com gás, gelo, limão espremido e xarope de morango.", src: "./food/soda-italiana-400ml.png"},
        ]
    },
    {
        nome: "Combos Individuais",
        produtos: [
            {id: 14, name: "Combo Bacon", price: 39.00, category: "Combos Individuais", vegan: false, description: "Cheese bacon + Fritas simples P + Refrigerante 350ml.", src: "./food/combo-bacon.png"},
            {id: 15, name: "Combo burguer", price: 31.00, category: "Combos Individuais", vegan: false, description: "Cheese Burguer + Fritas simples P + Refrigerante 350ml.", src: "./food/combo-burguer.png"},
            {id: 16, name: "Combo cheddar", price: 40.00, category: "Combos Individuais", vegan: false, description: "Duplo cheddar + Fritas simples P + Refrigerante 350ml", src: "./food/combo-cheddar.png"},
            {id: 17, name: "Combo Frango", price: 35.00, category: "Combos Individuais", vegan: false, description: "Cheese Frango + Fritas simples P + Refrigerante 350ml.", src: "./food/combo-frango.png"},
            {id: 18, name: "Combo Miami", price: 39.00, category: "Combos Individuais", vegan: false, description: "Miami + Fritas simples P + Refrigerante 350ml de sua preferência", src: "./food/combo-miami.png"},
            {id: 19, name: "Combo Pineapple", price: 36.00, category: "Combos Individuais", vegan: false, description: "1 Pineapple + Fritas simples P + Refrigerante 350ml de sua preferencia", src: "./food/combo-pineapple.png"},
            {id: 20, name: "Combo Salada", price: 34.00, category: "Combos Individuais", vegan: false, description: "Cheese Salada + Fritas simples P + Refrigerante 350ml.", src: "./food/combo-salada.png"},
        ]
    },
    {
        nome: "Entradas",
        produtos: [
            {id: 23, name: "Fritas com  cheddar e bacon P", price: 14.00, category: "Entradas", vegan: false, description: "Batata paliito temperadas com sal, creme de cheddar e bacon trirurado.", src: "./food/fritas-com-cheddar-e-bacon-p.png"},
            {id: 24, name: "Fritas simples P", price: 8.00, category: "Entradas", vegan: false, description: "Batata palito temperada com sal.", src: "./food/fritas-simples-p.png"},
        ]
    },
    {
        nome: "Molhos",
        produtos: [
            {id: 5, name: "Barbecue", price: 1.50, category: "Molhos", vegan: false, description: "Molho agridoce", src: "./food/Barbecue.png"},
            {id: 26, name: "Maionese de alho", price: 2.00, category: "Molhos", vegan: false, description: "Nossa maionese tradicional e mais amada da casa! Feita com alho assado.",src: "./food/maionese-de-alho.png"},
            {id: 27, name: "Maionese verde", price: 2.00, category: "Molhos", vegan: false, description: "Feita com coentro e cebolinha, amada por muitos !", src: "./food/maionese-verde.png"},
            {id: 32, name: "Piscina de cheddar e bacon", price: 12.00, category: "Molhos", vegan: false, description: "Nosso tradicional molho cheddar com bacon triturado, perfeito para mergulhar seu sanduiche ou suas fritas", src: "./food/piscina-de-cheddar-e-bacon.png"},
        
        ]
    },
    {
        nome: "Bebidas",
        produtos: [
            {id: 25, name: "Guaraná Antartica 1L descartável", price: 10.00, category: "Bebidas", src: "./food/guarana-antartica-1L-descartavel.png"},
            {id: 22, name: "Fanta uva 350ml", price: 7.00, category: "Bebidas", src: "./food/fanta-uva-350ml.png"},
            {id: 12, name: "Coca-Cola 1L descartável", price: 8.00, category: "Bebidas", src: "./food/coca-cola-1L-descartável.png"},
            {id: 13, name: "Coca-Cola 350ml", price: 7.00, category: "Bebidas", src: "./food/coca-cola-350ml.png"},
            {id: 1, name: "Água com gás 500ml", price: 2.50, category: "Bebidas", src: "./food/agua-com-gas-500ml.png"},
            {id: 2, name: "Água sem gás 500ml", price: 2.00, category: "Bebidas", src: "./food/agua-sem-gas-500ml.png"},

        ]
            
    },
    ]

    const productsCard = [
            {id: 39, name: "Alface e tomate", price: 1.50, category: "Adicionais"},
            {id: 40, name: "Anéis de cebola empanados", price: 3.50, category: "Adicionais"},
            {id: 41, name: "Bacon em fatias", price: 5.00, category: "Adicionais"},
            {id: 42, name: "Catupiry", price: 3.50, category: "Adicionais"},
            {id: 44, name: "Cebola Caramelizada", price: 0.50, category: "Adicionais"},
            {id: 45, name: "Frango Empanado 120g", price: 10.00, category: "Adicionais"},
            {id: 46, name: "Frango Empanado 120g + Catupiry", price: 12.00, category: "Adicionais"},
            {id: 47, name: "Picles de pepino", price: 2.00, category: "Adicionais"},
            {id: 48, name: "Queijo Cheddar", price: 2.00, category: "Adicionais"},
            {id: 49, name: "Queijo Mussarela", price: 2.00, category: "Adicionais"},
            {id: 50, name: "Alface + Tomate + Maionese", price: 2.00, category: "Adicionais"},
            {id: 51, name: "Barbecue",price: 1.00, category: "Adicionais"},
            {id: 52, name: "Tomate", price: 0.50, category: "Adicionais"},
            {id: 53, name: "Carne Bovina 130g + Queijo", price: 10.00, category: "Adicionais"},
            {id: 54, name: "Carne Bovina 130g", price: 8.00, category: "Adicionais"},
            {id: 55, name: "Farofa de Bacon", price: 5.00, category: "Adicionais"},
            {id: 56, name: "Alface", price: 0.50, category: "Adicionais"},
            {id: 57, name: "Queijo Provolone", price: 8.00, category: "Adicionais"},
            {id: 58, name: "Carne Bovina 80g + Queijo", price: 7.00, category: "Adicionais"},
    ]