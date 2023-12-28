<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    $(document).ready(function() {
        $("#calcularTotal").click(function() {
            let cantidadClavos = parseInt($("#clavos").val());
            let cantidadPernos = parseInt($("#pernos").val());
            let cantidadTuercas = parseInt($("#tuercas").val());
            let nombre = $("#nombre").val();
            let edad = $("#edad").val() || "[Edad]";
            // Actualizar el estado de pago
            $("#estadoPago .clavosCantidad").text(cantidadClavos);
            $("#estadoPago .clavosTotal").text('$' + (cantidadClavos * 50));
            $("#estadoPago .pernosCantidad").text(cantidadPernos);
            $("#estadoPago .pernosTotal").text('$' + (cantidadPernos * 150));
            $("#estadoPago .tuercasCantidad").text(cantidadTuercas);
            $("#estadoPago .tuercasTotal").text('$' + (cantidadTuercas * 150));

            // Calcular el total general y actualizar en el estado de pago
            let totalGeneral = cantidadClavos * 50 + cantidadPernos * 150 + cantidadTuercas * 150;
            $("#estadoPago .totalGeneral").text('$' + totalGeneral);

            // Actualizar el stock en productos y detalles
            // Actualiza el valor de stock para cada producto
            let stockClavos = 200 - cantidadClavos;
            let stockPernos = 150 - cantidadPernos;
            let stockTuercas = 150 - cantidadTuercas;

            // Actualizar los valores de stock en la tabla de productos y detalles
            $("#productosDetalles .stockClavos").text(stockClavos);
            $("#productosDetalles .stockPernos").text(stockPernos);
            $("#productosDetalles .stockTuercas").text(stockTuercas);
            
        });
    });
