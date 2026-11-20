// Click any image to see it larger
var lb = document.getElementById('lightbox');
var lbImg = lb.querySelector('img');
document.addEventListener('click', function (e) {
  var img = e.target.closest('.pin img');
  if (!img || img.closest('a')) return;
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lb.showModal();
});
lb.addEventListener('click', function () { lb.close(); });
