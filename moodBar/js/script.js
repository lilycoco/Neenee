$(function () {
  var resultElement = document.getElementById('result');
  var sliders = document.getElementsByClassName('sliders');
  var colors = [0, 0, 0, 0.9];
  
  [].slice.call(sliders).forEach(function (slider) {
    noUiSlider.create(slider, {
      start: 255,
      step: 85,
      connect: [true, false],
      orientation: "horizontal",
      range: {
        'min': 0,
        'max': 510
      },
      format: wNumb({
        decimals: 0
      })
    });

    // Bind the color changing function to the update event.
    slider.noUiSlider.on('update', function () {
      const n = slider.noUiSlider.get();

      if(n>=0 && n<255) {
        colors[0] = 0 + n;
        colors[1] = 217 + n * 0.149;
        colors[2] = 255;
      }
      else if(n>=255 && n<=510) {
        colors[0] = 255;
        colors[1] = 510 - n * 0.79;
        colors[2] = 510 - n * 0.37; 
      }

      var color = 'rgb(' + colors.join(',') + ')';
      resultElement.style.background = color;
      resultElement.style.color = color;
    });
  });
});