var Cart = [];

$(document).ready(function(){
    if(sessionStorage["cart-stor"] != null){
        Cart = JSON.parse(sessionStorage["cart-stor"].toString());
    }
    displayCart();
    //
    var addToCart = $('.buy.add-to-cart');
    addToCart.on('click', function(){
        var name = $('h1.name').attr("name");
        var stor =  $('.attribute-item.active');
        var type = stor.attr("data-type");
        var price = stor.attr("price");
        var soluong = parseInt($('input.quantity').val());
        var nameSp = name + " " + type;
        var id = $('h1.name').attr("id") + type;
        var newItem = {
            id: id,
            name: nameSp,
            price: price,
            quantity: soluong
        }
        $('input.quantity').val('1');
        var vt = checkCart(newItem);
        if(vt == -1)
            Cart.push(newItem);
        else
            Cart[vt].quantity += newItem.quantity;
        updateToStor(Cart);
        displayCart();
    });
    $('button.clear-all').click(function() {
        Cart = [];
        updateToStor(Cart);
        displayCart();
    })
});
function getPriceString(price) {
    price = price.toString();
    return price.substring(0, price.length -6) + "." + price.substring(price.length - 6, price.length - 3)+ "." + price.substring(price.length - 3, price.length) + "Đ";
}
function checkCart(newItem) {
    for(var i = 0; i < Cart.length; i++)
        if(Cart[i].name == newItem.name) return i;
    return -1;
}
function displayCart() {
    if(sessionStorage["cart-stor"] != null){
        Cart = JSON.parse(sessionStorage["cart-stor"].toString());
        $('table.table tbody').html("");
        for(var i = 0; i < Cart.length; i++){
            var total = parseInt(Cart[i].price) * parseInt(Cart[i].quantity)
            $('table.table tbody').append(`
            <tr>
                <td class="nameItem">${Cart[i].name}</td>
                <td class="quantityItem">${Cart[i].quantity}</td>
                <td class="priceItem">${getPriceString(Cart[i].price)}</td>
                <td class="totalItem">${getPriceString(total)}</td>
                <td>
                    <button onclick="clearCart(\'${Cart[i].id}\')">Clear</button>
                </td>
            </tr>
            `);
        }
        $('table.table tfoot td.TotalCart').text(Total());
    }   
}
function clearCart(id) {
    for(var i = 0; i< Cart.length; i++)
        if(Cart[i].id == id) {
            Cart.splice(i, 1);
        }
    updateToStor(Cart);
    displayCart();
}
function Total(){
    var tong = 0;
    for(var i = 0; i < Cart.length; i++) {
        tong += (parseInt(Cart[i].price) * parseInt(Cart[i].quantity)); 
    }
    return tong == 0 ? 0 : getPriceString(tong);
}
function updateToStor(Cart){
    sessionStorage["cart-stor"] = JSON.stringify(Cart);
}