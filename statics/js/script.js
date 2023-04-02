
fetch('https://dummyjson.com/products/1').then(function (apidata) {
    console.log(apidata);
    return apidata.json();
}).then(function (data) {
    console.log(data);


    img1(data.images[3]);
    img2(data.images[4]);
    img3(data.images[0]);

    realted_products_img_1(data.images[2]);
    realted_products_img_2(data.images[1]);
    display_product_img(data.thumbnail);


    products_title = data.title;
    document.getElementById('products_title').innerHTML = products_title;

    products_price = data.price;
    document.getElementById('price').innerHTML = products_price;

    products_Description = data.description;
    document.getElementById('Description').innerHTML = products_Description;

    products_type = data.category;
    document.getElementById('products_type').innerHTML = products_type;

    products_stock = data.stock;
    document.getElementById('stock').innerHTML = products_stock;

    products_discountPercentage = data.discountPercentage;
    document.getElementById('discount').innerHTML = products_discountPercentage;



}).catch(function (e) {
    console.log(e);
});


function display_product_img(img_url) {
    document.getElementById('productimg').src = img_url;
}


function realted_products_img_1(img1_url) {
    document.getElementById('RealtedImg1').src = img1_url;
}


function realted_products_img_2(img2_url) {
    document.getElementById('RealtedImg2').src = img2_url;
}


function img1(img3_url) {
    document.getElementById('img1').src = img3_url;
}

function img2(img4_url) {
    document.getElementById('img2').src = img4_url;
}

function img3(img5_url) {
    document.getElementById('img3').src = img5_url;
}

