function priceAdd() {
    const memoryPriceValue = document.getElementById('extra-memory-cost').innerText;
    const memoryPrice = parseFloat(memoryPriceValue);
    const storagePriceValue = document.getElementById('extra-storage-cost').innerText;
    const storagePrice = parseFloat(storagePriceValue);
    const deliveryChargeValue = document.getElementById('extra-delivery-cost').innerText;
    const deliveryCharge = parseFloat(deliveryChargeValue);

    const totalPrice = 1290 + memoryPrice + storagePrice + deliveryCharge;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = totalPrice;
    const screenTotalCost = document.getElementById('screen-total-cost');
    screenTotalCost.innerText = totalPrice;

}
function memory(memory) {
    const memoryConfigration = document.getElementById('extra-memory-cost');
    memoryConfigration.innerText = memory;
    priceAdd();
}


document.getElementById('memory-button1').addEventListener('click', function () {
    document.getElementById("memory-button1").style.backgroundColor = " rgba(96, 165, 250)";
    document.getElementById("memory-button2").style.backgroundColor = " white";
    memory(00);
})
document.getElementById('memory-button2').addEventListener('click', function () {
    document.getElementById("memory-button2").style.backgroundColor = " rgba(96, 165, 250)";
    document.getElementById("memory-button1").style.backgroundColor = " white";
    memory(80);
})

// storage

function Storage(storage) {
    const storageConfigration = document.getElementById('extra-storage-cost');
    storageConfigration.innerText = storage;
    priceAdd();
}

document.getElementById('storage-button1').addEventListener('click', function () {
    document.getElementById("storage-button1").style.backgroundColor = " rgba(96, 165, 250)";
    document.getElementById("storage-button2").style.backgroundColor = " white";
    document.getElementById("storage-button3").style.backgroundColor = " white";
    Storage(00);


})
document.getElementById('storage-button2').addEventListener('click', function () {
    document.getElementById("storage-button2").style.backgroundColor = " rgba(96, 165, 250)";
    document.getElementById("storage-button1").style.backgroundColor = " white";
    document.getElementById("storage-button3").style.backgroundColor = " white";
    Storage(100);
})
document.getElementById('storage-button3').addEventListener('click', function () {

    document.getElementById("storage-button1").style.backgroundColor = " white";
    document.getElementById("storage-button2").style.backgroundColor = " white";
    document.getElementById("storage-button3").style.backgroundColor = " rgba(96, 165, 250)";
    Storage(150);
})


function delivery(charge) {
    const deliveryCharge = document.getElementById('extra-delivery-cost');
    deliveryCharge.innerText = charge;
    priceAdd();


}
document.getElementById('delivery-charge-button1').addEventListener('click', function () {
    document.getElementById("delivery-charge-button2").style.backgroundColor = " white";
    document.getElementById("delivery-charge-button1").style.backgroundColor = " rgba(96, 165, 250)";
    delivery(00);
})
document.getElementById('delivery-charge-button2').addEventListener('click', function () {
    document.getElementById("delivery-charge-button1").style.backgroundColor = " white";
    document.getElementById("delivery-charge-button2").style.backgroundColor = " rgba(96, 165, 250)";
    delivery(20);
})

document.getElementById('promo-button').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-field')
    let promoCode = promoCodeField.value;

    if (promoCode == 'discount20') {

        const totalPrice = document.getElementById('total-cost').innerText;
        const totalPriceFloat = parseFloat(totalPrice);
        const discount = (totalPriceFloat * 20) / 100;
        const afterDiscount = totalPriceFloat - discount;
        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = afterDiscount;
        const screenTotalCost = document.getElementById('screen-total-cost');
        screenTotalCost.innerText = afterDiscount;
        promoCodeField.value = '';
    }
    document.getElementById("promo-button").disabled = true;
})
