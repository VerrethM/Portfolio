/*
let iso = new Isotope( '.grid', {
  //Object met opties
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});
*/


let grid = document.querySelector('.grid');
let iso;
imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( grid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    percentPosition: true
  });
});

// Filterknoppen
let filterElementen = document.querySelector('.filters-button-group');
filterElementen.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  let filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});


let buttonGroups = document.querySelectorAll('.button-group');
for ( let i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  let button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}

console.log("Hallo wereld");
