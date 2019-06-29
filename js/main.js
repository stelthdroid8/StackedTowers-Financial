
// map API implementation
function initMap (){
    const loc = { lat: 40.7128, lng: -74.0060};

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map});
}

// sticky menu background transparency change
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity= .9;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// smooth scrolling via jquery

$('#navbar a, .btn').on('click', function (e){
   if(this.hash !== ''){
       e.preventDefault();
       
       const hash= this.hash;


       $('html, body').animate(
           {
              scrollTop: $(hash).offset().top - 80           
            },
           700,

       )
   }

});