var jogos = [
    ['RESIDENT EVIL 9', 'https://images.tcdn.com.br/img/img_prod/1106817/pirulito_coresmel_twister_lollipop_600g_com_25_unidades_20845_1_57fb8db3209215351a86b8f32243dfcd.jpg', 4.00],

    ['RESIDENT EVIL 3 REMAKE', 'https://drogal.vtexassets.com/arquivos/ids/211979/90777.png?v=638463754536930000', 2.5],

    ['RESIDENT EVIL 2 REMAKE', 'https://static.clickembalagens.com.br/product_images/1280x1280/o/002/170729-26-02-2025-anuncio-20pote-20redondo-20250ml-201-48013.png', 6.00],

    ['RESIDENT EVIL VILLAGE', 'https://cdn.awsli.com.br/2500x2500/2640/2640978/produto/240423791/imagem7896343084998_1-e9wgfbcywx.jpg', 5.50]
];

doces.map(cadaDoce => {
    document.getElementById("produtos").innerHTML += `
            <div class="produto">
            <img src="${cadaDoce[1]}" alt=Pirulito>
             <h1>${cadaDoce[0]}</h1>
             <p>${cadaDoce[2]}</p>
     <button type="button">COMPRAR</button>
 </div>
 `
});