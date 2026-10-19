export class Account {
    constructor(holder, initialBalance) {
        this.holder = holder;
        this.balance = initialBalance;
    }

    showBalance() {
        alert(`Titular: ${this.holder}\nSaldo actual: $${this.balance.toFixed(2)}`);
    }

    deposit(amount) {
        if (isNaN(amount) || amount <= 0) {
            alert("Error: El monto a depositar debe ser un número mayor a cero.");
            return false;
        }

        this.balance += amount;
        alert(`Depósito exitoso. Nuevo saldo: $${this.balance.toFixed(2)}`);
        return true;
    }

    withdraw(amount) {
        if (isNaN(amount) || amount <= 0) {
            alert("Error: El monto a extraer debe ser un número mayor a cero.");
            return false;
        }

        if (amount > this.balance) {
            alert(`Operación denegada: Fondos insuficientes. Su saldo actual es $${this.balance.toFixed(2)}.`);
            return false;
        }

        this.balance -= amount;
        alert(`Extracción exitosa. Nuevo saldo: $${this.balance.toFixed(2)}`);
        return true;
    }
}