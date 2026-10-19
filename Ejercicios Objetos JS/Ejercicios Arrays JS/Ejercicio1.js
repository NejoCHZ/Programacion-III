const personList = [];

const runPersonMenu = () => {
    let option = 0;

    do {
        const inputOption = prompt(`--- MENÚ DE PERSONAS ---
1 - Agregar
2 - Eliminar
3 - Buscar
4 - Mostrar
5 - Salir
Seleccione una opción (1-5):`);

        option = parseInt(inputOption);

        switch (option) {
            case 1: {
                const personName = prompt("Ingrese el nombre de una persona:");
                if (personName && personName.trim() !== "") {
                    personList.push(personName.trim());
                    alert(`"${personName.trim()}" fue agregado/a exitosamente.`);
                } else {
                    alert("Error: El nombre no puede estar vacío.");
                }
                break;
            }
            case 2: {
                if (personList.length === 0) {
                    alert("La lista está vacía.");
                    break;
                }

                const nameToDelete = prompt("Ingrese el nombre de la persona a eliminar:");
                if (!nameToDelete) break;

                const index = personList.indexOf(nameToDelete.trim());

                if (index !== -1) {
                    personList.splice(index, 1);
                    alert(`"${nameToDelete.trim()}" ha sido eliminado/a.`);
                } else {
                    alert(`La persona "${nameToDelete.trim()}" no existe en la lista.`);
                }
                break;
            }
            case 3: {
                if (personList.length === 0) {
                    alert("La lista está vacía.");
                    break;
                }

                const nameToSearch = prompt("Ingrese el nombre de la persona a buscar:");
                if (!nameToSearch) break;

                if (personList.includes(nameToSearch.trim())) {
                    alert("OK");
                } else {
                    alert(`La persona "${nameToSearch.trim()}" no fue encontrada.`);
                }
                break;
            }
            case 4: {
                if (personList.length === 0) {
                    alert("La lista de personas está vacía.");
                } else {
                    alert(`--- LISTA DE PERSONAS ---\n${personList.join('\n')}`);
                }
                break;
            }
            case 5:
                alert("Saliendo del menú de personas...");
                break;
            default:
                alert("Opción no válida. Por favor, ingrese un número del 1 al 5.");
        }
    } while (option !== 5);
};

runPersonMenu();