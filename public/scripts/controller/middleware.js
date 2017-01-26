'use strict';

function setSections(ctx, next) {
  ctx.params.sections.split('_');
  next();
}

//where we capture submites cat, .join('_')

$('').submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});

$('').submit(function(e) {
  let url = '/' + sections;
})
