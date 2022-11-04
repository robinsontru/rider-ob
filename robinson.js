class octubre {
   txtid = 0
   txtnom = ""
   txttato = ""
   txtsus = ""
   txtper = ""

   constructor() {
   }
   hallowen(txtid, txtnom, txttato, txtsus, txtper) {
      var mishallowen = txtid + "🫤" + txtnom + "🫤" + txttato + "🫤" + txtsus + "🫤" + txtper;
      this.asustar(mishallowen);
      this.txtid = txtid;
      this.txtnom = txtnom;
      this.txttato = txttato;
      this.txtsus = txtsus;
      this.txtper = txtper;
      insoctubre.txtid
      //alert(txtid + "🫤" + txtnom + "🫤" + txttato + "🫤" + txtsus + "🫤" + txtper)
      const miedos = this.miedov(txtid )
     this.viernes13()
      document.getElementById('pintacaritas').innerHTML = miedos;
   }
   asustar(mishallowen) {
      document.getElementById('Phallowen').innerHTML = mishallowen;
   }/////////j
   miedov(txtid) {
      for (let i = 1; i <= txtid; i++)
         var caritas = caritas + "👹";
      return caritas
   }
   viernes13(tortura) {
      
      const fechaNacimiento = new Date();
      const fechaTortura = new Date("2022/10/31 23:30:14");
      const fechaFintortura = new Date(872817240000);
      const fechaMorido = new Date(2022, 9, 31, 24, 30, 14);
      const hoyes=Date.now();
      const hoyes1=new Date().getTime()
      // alert(fechaNacimiento);
      // alert(fechaTortura);
      // alert(fechaTortura);
      // alert(fechaMorido);
      // alert(hoyes)
      // alert(hoyes1)
//document.getElementById('tortura').innerHTML = fechaNacimiento+"👹" +fechaTortura+"👹" +fechaFintortura+"👹" +fechaMorido+"👹" +hoyes+"👹" +hoyes1
document.getElementById('n1').innerHTML = "La fecha actual es "+ fechaNacimiento+"👹"
document.getElementById('n2').innerHTML = "la fecha inicial de la tortura  es " +fechaTortura
document.getElementById('n3').innerHTML = "la fecha final de la tortura  es"+fechaFintortura+"👹" 
document.getElementById('n4').innerHTML ="la fecha que murio robinson fue "+fechaMorido+"👹" 
document.getElementById('n5').innerHTML =hoyes+"👹" 
document.getElementById('n6').innerHTML =hoyes1





   }

}
var insoctubre = new octubre();
// insoctubre.hallowen();

