// Getting Extracost of Memory, Storage & Delivery id
const extraMemoryCost = document.getElementById("extra-memory-cost");
const extraStorageCost = document.getElementById("extra-storage-cost");
const deliveryChargeDisplay = document.getElementById("extra-delivery-cost");

// Total Price 
const totalPrice = document.getElementById("total-price");

// Best Price
const bestPrice = document.getElementById("best-price");

// Applying Promocode
const promoCodeInput = document.getElementById("promo-code-input");
const applyButton = document.getElementById("apply-button");

// Total after applying coupon
const total = document.getElementById("total");



// Memory Onclick
document.getElementById("8gb-memory").addEventListener('click', function () {
    getId('extra-memory-cost', true, 0);
});
document.getElementById("16gb-memory").addEventListener('click', function () {
    getId('extra-memory-cost', false, 1)
});

// Storage Onclick
document.getElementById("256gb-ssd").addEventListener('click', function () {
    getId('extra-storage-cost', true, 0);
});
document.getElementById("512gb-ssd").addEventListener('click', function () {
    getId('extra-storage-cost', false, 1);
});
document.getElementById("1tb-ssd").addEventListener('click', function () {
    getId('extra-storage-cost', false, 2);
});

// Choose your delivery option onclick
document.getElementById("free-charge").addEventListener('click', function () {
    getId('extra-delivery-cost', true, 0);
});
document.getElementById("delivery-charge").addEventListener('click', function () {
    getId('extra-delivery-cost', false, 1);
});


/* FUNCTION getId */
function getId(id, isBoolean, value) {
    const extraIdCost = document.getElementById(id);
    if (isBoolean == true && value == 0) {
        extraIdCost.innerText = '0';
    }
    else if (isBoolean == false && id == 'extra-memory-cost' && value == 1) {
        extraIdCost.innerText = '180';
    }
    else if (isBoolean == false && id == 'extra-storage-cost' && value == 1) {
        extraIdCost.innerText = '100';
    }
    else if (isBoolean == false && id == 'extra-storage-cost' && value == 2) {
        extraIdCost.innerText = '180';
    }
    else if (isBoolean == false && id == 'extra-delivery-cost' && value == 1) {
        extraIdCost.innerText = '20';
    };
    updateTotal();
};


/* FUNCTION updateTotal */
function updateTotal() {
    const bestPriceUpdate = Number(bestPrice.innerText);
    const extraMemoryCostUpdate = Number(extraMemoryCost.innerText);
    const extraStorageCostUpdate = Number(extraStorageCost.innerText);
    const deliveryChargeDisplayUpdate = Number(deliveryChargeDisplay.innerText);
    const totalCost = bestPriceUpdate + extraMemoryCostUpdate + extraStorageCostUpdate + deliveryChargeDisplayUpdate;
    totalPrice.innerText = totalCost;
    total.innerText = totalCost;
    return totalCost;
};


// Applying Promo code for discounted Price
applyButton.addEventListener('click', function () {
    if (promoCodeInput.value == 'stevekaku') {
        const discountAmount = updateTotal() * .2;
        const discountedTotalUpdate = updateTotal() - discountAmount;
        total.innerText = discountedTotalUpdate;
        promoCodeInput.value = '';
        document.querySelector('.applybutton').innerText = 'Promo Code Applied';
    }
    else if (promoCodeInput.value == '') {
        alert('Plese provide pomo code');
    }
    else {
        alert('Pomo code no match');
        promoCodeInput.value = '';
    }
});