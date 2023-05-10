let continuar_simulando;

do {// let cliente = "Jumbo";
    let cliente = prompt("Elija un cliente con el que desea hacer tareas: \nJumbo\nWalmart\n");

    let dias_trabajados = prompt("Elija cuántos días a la semana desea hacer tareas:");

    let numero_pedidos = prompt("Elija cuántos pedidos desea realizar");

    let kilometro_recorrido = prompt("Cuántos kilómetros al día está dispouesto a recorrer con su auto:") 
    const valor_pedidos_jumbo = 3500, valor_pedidos_walmart =3000, valor_km_recorrido = 120;

    let resultado;

    if (cliente == "Jumbo") {
        resultado = ((numero_pedidos * valor_pedidos_jumbo) + (valor_km_recorrido * kilometro_recorrido)) * dias_trabajados;
    } else {
        resultado = ((numero_pedidos * valor_pedidos_walmart) + (valor_km_recorrido * kilometro_recorrido)) * dias_trabajados;
    }
    
    console.log("Usted va a ganar: " + resultado);
    continuar_simulando = prompt("¿Desea realizar otra simulación de ingresos? (Sí/No)");
} while (continuar_simulando == "Sí");