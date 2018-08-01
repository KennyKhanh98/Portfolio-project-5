lightbox.option ({
     'resizeDuration': 300,
     'wrapAround': true,
     'fitImagesInViewport': true
});

const $images = $('.picture a');
const $search = $('#search');

$search.on('keyup', function() {
  const $input = $search.val().toLowerCase();
  console.log($input);

  $images.each(function(index, caption) {
    const $cap = $(caption).attr('data-title').toLowerCase();
    console.log($cap);

    // if ($cap.includes($input)) {
    //   $(caption).parentElement.style.display = "flex";
    // } else {
    //   $(caption).parentELement.style.display = "none";
    // }
  });

});
