TrdBox
======

TrdBox is an extremely simple jQuery-plugin to display html-content in a lightbox.

Usage
-------------------------
You can bind the lightbox to elements, it will open when the element is clicked:

    $(".openlightbox").trdbox("<div>This is the content.</div>");

You can call the show- and hide-functions manually by retrieving the box from an element:

    var trdbox = $(".openlightbox").data("trdbox");
    trdbox.show();

There cannot be multiple lightboxes open at the same time.
