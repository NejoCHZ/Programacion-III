class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const productList = [];
let nextProductId = 1;


const runProductMenu = () => {
    let option = 0;

    do {
        const inputOption = prompt(`--- MENÚ DE PRODUCTOS ---
1 - Agregar producto
2 - Mostrar
3 - Eliminar
4 - Salir
Seleccione una opción (1-4):`);

        option = parseInt(inputOption);

        switch (option) {
            case 1: {
                let productName = prompt("Ingrese el nombre del producto:");
                while (!productName || productName.trim() === "") {
                    productName = prompt("El nombre no puede estar vacío. Ingrese el nombre del producto:");
                }

                let productPrice = parseFloat(prompt("Ingrese el precio del producto:"));
                while (isNaN(productPrice) || productPrice <= 0) {
                    productPrice = parseFloat(prompt("Precio inválido. Ingrese un precio numérico mayor a 0:"));
                }

                const newProduct = new Product(nextProductId++, productName.trim(), productPrice);
                productList.push(newProduct);

                alert(`Producto "${newProduct.name}" agregado con éxito (ID: ${newProduct.id}).`);
                break;
            }
            case 2: {
                if (productList.length === 0) {
                    alert("No hay productos registrados.");
                    break;
                }

                const sortedProducts = [...productList].sort((a, b) => a.price - b.price);

                const formattedList = sortedProducts
                    .map(item => `ID: ${item.id} | Nombre: ${item.name} | Precio: $${item.price.toFixed(2)}`)
                    .join('\n');

                alert(`--- LISTADO DE PRODUCTOS (ORDENADO POR PRECIO ASC) ---\n${formattedList}`);
                break;
            }
            case 3: {
                if (productList.length === 0) {
                    alert("No hay productos para eliminar.");
                    break;
                }

                const idToDelete = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
                if (isNaN(idToDelete)) {
                    alert("Error: El ID debe ser un número válido.");
                    break;
                }

                const index = productList.findIndex(item => item.id === idToDelete);

                if (index !== -1) {
                    const removedProduct = productList.splice(index, 1)[0];
                    alert(`El producto "${removedProduct.name}" (ID: ${removedProduct.id}) fue eliminado correctamente.`);
                } else {
                    alert(`No existe ningún producto con el ID ${idToDelete}.`);
                }
                break;
            }
            case 4:
                alert("Saliendo del sistema de productos...");
                break;
            default:
                alert("Opción no válida. Por favor, ingrese un número del 1 al 4.");
        }
    } while (option !== 4);
};

runProductMenu();