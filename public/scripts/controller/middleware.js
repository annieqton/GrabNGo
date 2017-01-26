'use strict';

function setSections(ctx, next) {
  ctx.params.sections = section.split('_');
  next();
}

//where we capture submites cat, .join('_')

$('#preferences').submit(function(event) {
  event.preventDefault();
  let url = '/' + section.join('_');
  setSections();
});
