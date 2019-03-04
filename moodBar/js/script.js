$(function () {
  var resultElement = document.getElementById('result');
  var sliders = document.getElementsByClassName('sliders');
  var colors = [0, 0, 0, 0.7];
  
  [].slice.call(sliders).forEach(function (slider) {
    noUiSlider.create(slider, {
      start: 765,
      connect: [true, false],
      orientation: "horizontal",
      range: {
        'min': 0,
        'max': 1530
      },
      format: wNumb({
        decimals: 0
      })
    });

    // Bind the color changing function to the update event.
    slider.noUiSlider.on('update', function () {
      const n = slider.noUiSlider.get();

      if(n>=0 && n<=255) {
        colors[0] = 255;
        colors[1] = +n;
        colors[2] = 0;    
      }
      else if(n>255 && n<=510) {
        colors[0] = 510 - n;
        colors[1] = 255;
        colors[2] = 0;
      }
      else if(n>510 && n<=765) {
        colors[0] = 0;
        colors[1] = 255;
        colors[2] = n - 510;
      }
      else if(n>765 && n<=1020) {
        colors[0] = 0;
        colors[1] = 1020 - n;
        colors[2] = 255;
      }
      else if(n>1020 && n<=1275) {
        colors[0] = n - 1020;
        colors[1] = 0;
        colors[2] = 255;
      }
      else if(n>1275 && n<=1530) {
        colors[0] = 255;
        colors[1] = 0;
        colors[2] = 1530 - n;        
      }

      var color = 'rgb(' + colors.join(',') + ')';
      resultElement.style.background = color;
      resultElement.style.color = color;
    });
  });
});