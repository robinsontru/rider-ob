class cihotel {
  txtidh = 0;
  txtnomhotel = "";
  txthabitaciones = "";
  txttipohabi = "";
  Precio = 0;
  vhabitacion1 = [];
  vhabitacion2 = [];
  temporal = 0;
  vhotel = [];

  habitaciones(txtidh, txtnomhotel, txthabitaciones, txttipohabi, Precio) {
    alert(
      txtidh +
        "/" +
        txtnomhotel +
        "/" +
        txthabitaciones +
        "/" +
        txttipohabi +
        "/" +
        Precio
    );

    this.txtidh = txtidh;
    this.txtnomhotel = txtnomhotel;
    this.txthabitaciones = txthabitaciones;
    this.txttipohabi = txttipohabi;
    this.precio = Precio;

    this.vhabitacion1 = [
      txtidh,
      txtnomhotel,
      txthabitaciones,
      txttipohabi,
      Precio,
    ];

    for (var j = 0; j <= 0; j++) {
      for (var i = 0; (i = 0); i++) {
        vhabitacion1.forEach((item) => {
          vhabitacion1.push(item);
        });
      }
      this.vhotel.push(this.vhabitacion1);
      console.log(this.vhotel);
      document.getElementById("datos").innerHTML = this.vhotel;

      // const datoshotel = this.sethotel(txtidh);
      // this.sethotel();
      // document.getElementById("datos").innerHTML = datoshotel;
    }
    //   sethotel(){

    // //   this.vhabitacion1[txtidh, txtnomhotel, txthabitaciones, txttipohabi,Precio]
    // //   for( var j=0;j<=0;j++)
    // //     {
    // //     for( var i=0;i =0;i++)
    // //     {

    // //       this.vhabitacion1.forEach(item=>
    // //       this.vhabitacion1.push(item)
    // //     )
    // //     }
    // //    }
    // // this.vhotel.push(this.vhabitacion1)
    // // console.log(this.vhotel)

    //   }

    //   gethotel() {

    //     return
    //   }
    // }
    const fecha = new Date(2022, 0, 30);
    // alert(fecha);
    // console.log(fecha);
    fecha.toString();
    fecha.toDateString();
    fecha.toISOString();
    fecha.toLocaleDateString();
    var fechaInternacional = new Intl.DateTimeFormat("es").format(fecha);
    var fechaInternacional0 = new Intl.DateTimeFormat("en").format(fecha);
    var fechaInternacional1 = new Intl.DateTimeFormat("de").format(fecha);
    var fechaInternacional2 = new Intl.DateTimeFormat("mr").format(fecha);
    var fechaInternacional3 = new Intl.DateTimeFormat("az").format(fecha);

    // por consolola
    console.log(fecha.toString());
    console.log(fecha.toDateString());
    console.log(fecha.toISOString());
    console.log(fecha.toLocaleDateString());
    console.log(fechaInternacional0);
    console.log(fechaInternacional1);
    console.log(fechaInternacional2);
    console.log(fechaInternacional3);

    alert(fechaInternacional0);
    alert(fechaInternacional1);
    alert(fechaInternacional2);
    alert(fechaInternacional3);

    // Alertas
  }
}
var insohotel = new cihotel();
