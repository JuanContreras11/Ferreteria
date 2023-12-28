

$(document).ready(function() {
    $("#calcularTotal").click(function() {
        let cantidadClavos = parseInt($("#clavos").val()) || 0;
        let cantidadPernos = parseInt($("#pernos").val()) || 0;
        let cantidadTuercas = parseInt($("#tuercas").val()) || 0;
        let nombre = $("#nombre").val() || "";
    let edad = $("#edad").val() || "";

        // Actualizar el estado de pago
        $(".clavosCantidad").text(cantidadClavos);
        $(".clavosTotal").text('$' + (cantidadClavos * 50));
        $(".pernosCantidad").text(cantidadPernos);
        $(".pernosTotal").text('$' + (cantidadPernos * 150));
        $(".tuercasCantidad").text(cantidadTuercas);
        $(".tuercasTotal").text('$' + (cantidadTuercas * 150));

        // Calcular el total general y actualizar en el estado de pago
        let totalGeneral = cantidadClavos * 50 + cantidadPernos * 150 + cantidadTuercas * 150;
        let totalCantidad = cantidadClavos + cantidadPernos  + cantidadTuercas;
        $(".totalGeneral").text('$' + totalGeneral);
        $(".totalCantidad").text(totalCantidad);


        // Actualizar el stock en productos y detalles
        let stockClavos = 200 - cantidadClavos;
        let stockPernos = 150 - cantidadPernos;
        let stockTuercas = 150 - cantidadTuercas;

        // Actualizar los valores de stock en la tabla de productos y detalles
        $(".stockClavos").text(stockClavos);
        $(".stockPernos").text(stockPernos);
        $(".stockTuercas").text(stockTuercas);
        $("#nombreEstadoPago").text(nombre);
    $("#edadEstadoPago").text(edad);
    });

    $("#nombre").on("input", function() {
    let nombre = $(this).val();
    if (/\d/.test(nombre)) {
        alert("Por favor, ingresa solo letras en el campo de nombre.");
        $(this).val("");
    }
});

});

