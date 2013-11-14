/*
 * Preview from file
 * Nicholas Johnson - Forward Advance Ltd
 * http://www.github.com/forwardadvance/preview_from_file
 * MIT Licence
 */
(function($) {
  $.fn.previewFromFile = function(file, fallback_url) {
    var img = this;
    if (window.File && window.FileReader) {
      var reader = new FileReader();
      reader.onload = (function(file) {
        return function(e) {
          img.attr( 'src', e.target.result).attr('title', escape(file.name) );
        };
      })(file);
      reader.readAsDataURL(file);
    } else {
      img.attr('src', fallback_url);
    }
  }
})(jQuery);