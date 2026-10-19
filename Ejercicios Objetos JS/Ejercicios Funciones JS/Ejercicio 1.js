const getValidNumber = (promptMessage) => {
    let value = parseFloat(prompt(promptMessage));

    while (isNaN(value) || value < 0) {
        value = parseFloat(prompt(`Valor inválido. ${promptMessage}`));
    }

    return value;
};

const calculateFinalPrice = (price, taxPercentage, discountPercentage) => {
    const taxAmount = price * (taxPercentage / 100);
    const discountAmount = price * (discountPercentage / 100);
    const finalPrice = price + taxAmount - discountAmount;

    return finalPrice;
};

const runPriceCalculator = () => {
    const productPrice = getValidNumber("Ingrese el precio del producto:");
    const taxPercentage = getValidNumber("Ingrese el porcentaje de IVA (ej. 21):");
    const discountPercentage = getValidNumber("Ingrese el porcentaje de descuento (ej. 20):");

    const finalPrice = calculateFinalPrice(productPrice, taxPercentage, discountPercentage);

    alert(`Resumen de la compra:
-Precio base: $${productPrice.toFixed(2)}
-IVA(${taxPercentage}%): +$${(productPrice * (taxPercentage / 100)).toFixed(2)}
-Descuento(${discountPercentage}%): -$${(productPrice * (discountPercentage / 100)).toFixed(2)}
----------------------------------
Precio final: $${finalPrice.toFixed(2)}`);
};

runPriceCalculator();
