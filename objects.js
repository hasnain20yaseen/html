
let products = {
    productName : ["keyboard","Mouse","printr","Headphone"],
    productsDesc : "dshghvbfjf",
    productPrice : 10000,
    productTax : 132,
    ProductColour :{
        keyboardColour:["Red","Blue","Black"],
        MouseColour:["Yellow","White","Pink"],
        PrinterColour:["Gry","Orange","Green"],
        HeadphoneColour:["Violet","Purple","Tomato"]
    },
    add : function(productPrice,productTax){
        let result = productPrice + productTax;
        console.log(result);
    }   
}

// console.log(products.productsName)
// products.add(products.productPrice,products.productTax)

// for (let a in products){
//     console.log(a)
// }



// for(let a =0; a< products.productName.length; a++){
//     document.write(`
//     <h1>${products.productName[a]}</h1>
//     <h2>${products.productsDesc}</h2>
//     <h3>${products.productPrice}</h3>
//     <h4>${products.productTax}</h4>

    
//     `)
// }


































