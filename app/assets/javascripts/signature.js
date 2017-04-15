function resizeCanvas(canvas) {
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}

$(document).on('turbolinks:load', function() {
  var canvas = document.querySelector("canvas");
  if (canvas){
    canvas.height = 300;
    canvas.width = 200;
    resizeCanvas(canvas);
    signature_pad = new SignaturePad(canvas);
    $('.signature_pad_clear').click(function() { signature_pad.clear() });
    $('.signature_pad_save').click(function(event) {
      if (signature_pad.isEmpty()){
        alert('You must sign to accept the Terms and Conditions');
        event.preventDefault();
      } else {
        $('.signature_pad_input').val(signature_pad.toDataURL());
      }
    });
  }
});
