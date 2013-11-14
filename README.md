Preview From File Plugin
========================

Instantly preview an image that you have selected in a file field using HTML5. Includes a graceful fallback for non-supporting browsers. Packaged for JQuery.

## What's it for?

HTML5 allows you to access local files when they are selected in a file input field.

This plugin will allow you to preview files that you have selected. The file is serialised into a data URL and then set as the source attribute of an image.

## Usage ##

Assuming you have some HTML like this:

    <input type="file" name="image" />
    <img src="#" class="preview" />

you could write some JQuery like the following:

    $(function() {
      // First grab your DOM elements
      var file_field = $('input[type=file]');
      var img = $('img.preview');

      // When the file field is changed
      file_field.change(function() {
        // Get the file...
        var file = file_field[0].files[0];
        // and boomshanka, job done
        img.setUserImage(file, 'fallback.jpg');
      });
    });
