//Aca hice mis cosntantes del carrito (inmodificiables);

const shopContent = document.getElementById("shopContent");
// invoco al div que cree en mi html para ponerle los productos

const modalcontainer = document.getElementById("modal-container")

const verCarrito = document.getElementById("verCarrito");


//atrapo el carrito de mi html

//array de productos para ofrecer, con 4 propiedades c/u
const productos= [
    {
        id: 1,
        nombre: "NFT Monkey I",
        precio: 250,
        img: "imagenes/0_iXFSD9fZ-AD73K3P.jpg",
    },

    {
        id: 2,
        nombre: "NFT Monkey II",
        precio: 210,
        img: "imagenes/2 nft.webp",
    },  

    {
        id: 3,
        nombre: "NFT Monkey III",
        precio: 100,
        img: "imagenes/3 nft.jpeg",
    },
    
    {
        id: 4,
        nombre: "NFT Monkey IV",
        precio: 190,
        img: "imagenes/4 nft.jpeg",
    },


    
]


let carrito = [];

// for each me recorrera el array de productos

productos.forEach((product)=> {

    // creo un div (html) que contenga mi array de productos,  se va a ver el nombre img precio
    let content = document.createElement('div');
    content.className = 'card';

    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class='price'>${product.precio}$</p>
    `;

    //shopContent se llama mi div del html al cual le voy a meter todo content.
    shopContent.append(content);
    

    //Creo el boton de compra;

    let comprar = document.createElement('button')
    comprar.className = 'comprar';
    comprar.innerText = 'comprar'; //innerText: que quiero que diga mi boton
    
    content.append (comprar);

    //Funcion de addEventListener para guardar la info de compras del usuario en carrito
    comprar.addEventListener('click', ()=> {
        carrito.push({ // con push me va a ir agregando c/ vez que hagan click en mi producto
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio:product.precio,
        });
        console.log (carrito);
    });
});

// Creo el carrito

verCarrito.addEventListener ('click', ()=> {
    modalcontainer.style.display = "block"; // lo mantengo en oculto hasta que lo toquen
    modalcontainer.innerHTML = "";

    // creando el header
    const modalHeader = document.createElement('div');
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-tittle"> Carrito</h1>
    `;

    modalcontainer.append(modalHeader);

    // creando el texto boton 
    const modalbutton = document.createElement('h1');
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";


    modalbutton.addEventListener("click", ()=> {
        modalcontainer.style.display = "none";
    }); 

    modalHeader.append(modalbutton);
    
    //recorro el carrito
    carrito.forEach((product)=> {

        // le creo un div donde aparecen lo que compro
        let caritoContent = document.createElement ('div')
        caritoContent.className = 'modal-content'
        caritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>

        `;

        modalcontainer.append(caritoContent);
    });

    // aca uso esta funcion reduce para poder sumar mi compra total $$$$
    //acc = acumula y el= c/uno de los producto
    const total = carrito.reduce((acc,el)=> acc + el.precio, 0);

    const totalBuying = document.createElement('div');
    totalBuying.className ='total-content';
    totalBuying.innerHTML; `total a pagar: ${total} $`;
    modalcontainer.append(totalBuying);
});