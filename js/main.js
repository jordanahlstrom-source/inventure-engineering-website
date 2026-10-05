// Swaps the Jenga Box project image for its embedded demo video on click.
document.addEventListener('DOMContentLoaded', function () {
  var playBtn = document.getElementById('jenga-play');
  if (!playBtn) return;

  playBtn.addEventListener('click', function () {
    var figure = document.getElementById('jenga-figure');
    var stillWrap = document.getElementById('jenga-still');
    var videoWrap = document.getElementById('jenga-video');
    var iframe = videoWrap.querySelector('iframe');

    // Load the iframe only once the visitor asks for it.
    if (!iframe.src) {
      iframe.src = iframe.dataset.src;
    }

    stillWrap.style.display = 'none';
    videoWrap.style.display = 'block';
    figure.style.background = '#000';
    figure.style.aspectRatio = '9/16';
    // width:100% keeps this a definite size so the grid item doesn't fall back
    // to content-based (here: zero, since still/video are position:absolute)
    // sizing once aspect-ratio is applied — max-width then caps it.
    figure.style.width = '100%';
    figure.style.maxWidth = '360px';
    figure.style.marginInline = 'auto';
  });
});
