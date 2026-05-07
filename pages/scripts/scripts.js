var jogos = [
    ['RESIDENT EVIL REQUIEM', 'https://wallpapercave.com/wp/wp15649783.png', 350.00, "../HISTÓRIARE9.html"],

    ['RESIDENT EVIL 3 REMAKE', 'https://terranerdica.com.br/wp-content/uploads/2020/04/Resident_Evil_3_Remake_THumbnail.jpg', 85.00, "../HISTÓRIARE3R.html"],

    ['RESIDENT EVIL 2 REMAKE', 'https://static.wikia.nocookie.net/residentevil/images/4/4d/RE2_Remake_Steam_Pre-Order_Bonus_Wallpaper_01.jpg/revision/latest/scale-to-width-down/1200?cb=20190127055648', 175.00,"../HISTÓRIARE2R.html"],

    ['RESIDENT EVIL VILLAGE', 'https://images.squarespace-cdn.com/content/5ed1b3e73b87d766d1c49146/1627340414824-NU96I5MECFHRCE8SFU7U/RE-Village.png?format=1500w&content-type=image%2Fpng', 120.00, "../HISTÓRIAREVILL.html"],

    ['RESIDENT EVIL 4 REMAKE', 'https://images4.alphacoders.com/124/thumb-1920-1244847.jpg', 217.00, "../HISTÓRIARE4R.html"]
];

jogos.map(cadaJogo => {
    document.getElementById("jogos").innerHTML += `
            <div class="jogo">
            <img src="${cadaJogo[1]}" alt=Resident Evil Requiem>
             <h1>${cadaJogo[0]}</h1>
             <p>${cadaJogo[2]}</p>
     <a href="${cadaJogo[3]}"> <button type="button">SOBRE</button> </a>
 </div>
 `
});