import { Account } from './Account.js';


export class BankApp {
    static execute() {
        const holder = prompt("Bienvenido al Home Banking.\nIngrese el nombre del titular:");
        if (!holder || holder.trim() === "") {
            alert("Debe ingresar un nombre de titular válido.");
            return;
        }

        let initialBalance = parseFloat(prompt("Ingrese el saldo inicial de la cuenta:"));
        while (isNaN(initialBalance) || initialBalance < 0) {
            initialBalance = parseFloat(prompt("Valor inválido. Ingrese un saldo inicial mayor o igual a 0:"));
        }

        const account = new Account(holder, initialBalance);
        let option = 0;

        do {
            option = parseInt(prompt(`--- MENÚ HOME BANKING ---
1 - Ver Saldo
2 - Depositar
3 - Extraer
4 - Salir
Seleccione una opción (1-4):`));

            switch (option) {
                case 1:
                    account.showBalance();
                    break;
                case 2: {
                    const depositAmount = parseFloat(prompt("Ingrese el monto a depositar:"));
                    account.deposit(depositAmount);
                    break;
                }
                case 3: {
                    const withdrawAmount = parseFloat(prompt("Ingrese el monto a extraer:"));
                    account.withdraw(withdrawAmount);
                    break;
                }
                case 4:
                    alert("Gracias por utilizar el servicio de Home Banking. ¡Hasta luego!");
                    break;
                default:
                    alert("Opción no válida. Por favor, elija un número entre 1 y 4.");
            }
        } while (option !== 4);
    }
}