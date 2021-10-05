
///iniciar carousel

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  duration: 2000
}, setTimeout(autoplay, 5000));

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 5000);
}

///iniciarlizar modal
$(document).ready(function(){
  $('.modal').modal();
});


//Inicializar  Chart

const data = {
  labels: [
    'Desarrollo Movil',
    'Desarrollo Web',
    'Desarrollo de Juegos',
    'Ingeniería Software',
    'Redes y Comunicaciones'
  ],
  datasets: [{
    label: '',
    data: [15, 15, 16, 12, 10],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};


const config = {
  type: 'polarArea',
  data: data,
  options: {}
};




var myChart = new Chart(
  document.getElementById('myChart'),
  config
); 


///locale moment js

moment.lang('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);

  moment.locale('es');

  console.log(moment());

var hora = document.querySelector("#hora")
hora.innerHTML =  moment('24/12/2019 09:15:00','DD MM YYYY hh:mm:ss');



// Inicializar navbar , coversion sidenav
$(".button-collapse").sideNav();


// Inicializar collapsible
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

///scroolreveal
ScrollReveal().reveal('.titleReveal',{ delay: 500 });
ScrollReveal().reveal('.rowReveal',{ delay: 500 });
ScrollReveal().reveal('.cardReveal',{ delay: 500 });
ScrollReveal().reveal('.cardsReveal',{ delay: 500 });











 



  


  