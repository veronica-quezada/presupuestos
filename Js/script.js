let totalGastos = 0;
let id = 0;
let arrayGastos = [];

const getId = () => {
    id++;
    return id;
}

const getGastoObj = (nombre, cantidad) => {
    const NewGasto = {
        id: getId(),
        nombre: nombre,
        cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewGasto));
}

const getBudget = (cantidad) => {
    NewBudget = {
    id: getId(),
    cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewBudget))
    }

const addGastoTabla = (Gasto) => {
    const tbody = document.getElementById('tcontenido');
    tbody.innerHTML += `<tr id="elemento${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.cantidad}</td> 
        <td>
            <a href="#" onclick="borrarGasto(${Gasto.id})" >Borrar</a>
        </td>
    </tr> `;
}

const inputPresupuesto = () => {
    let presupuestoCantidad = document.getElementById("presupuestoInput").value;
    let totalPresupuesto = document.getElementById("enviarPresupuesto");

    totalPresupuesto += Presupuesto.cantidad;
    console.log('totalPresupuesto:', totalPresupuesto);

    arrayPresupuestos.push(Presupuesto);
    console.log('arrayPresupuesto:', arrayPresupuesto);

    document.getElementById('despliegaTotal').innerText = totalGastos;

    addGastoTabla(Gasto);
}

const inputGasto = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastoCantidad = document.getElementById("cantidadInput").value;

    let Gasto = getGastoObj(gastoNombre, gastoCantidad);
    console.log('Gasto:', Gasto);

    totalGastos += Gasto.cantidad;
    console.log('totalGastos:', totalGastos);

    arrayGastos.push(Gasto);
    console.log('arrayGastos:', arrayGastos);

    document.getElementById('despliegaTotal').innerText = totalGastos;

    addGastoTabla(Gasto);
}

const borrarGasto = (id) => {
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);

    arrayGastos = arrayGastos.filter((gasto) => {
        if (gasto.id == id) {
            let filaABorrar = document.getElementById("elemento" + gasto.id);
            filaABorrar.remove();
            return false;
        }
        return true;
    });

    totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad, 0);
    document.getElementById('despliegaTotal').innerText = totalGastos;
    console.log('2.- arrayGastos:', arrayGastos);
}