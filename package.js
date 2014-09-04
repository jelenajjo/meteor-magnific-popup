Package.describe({
    "summary": "Light and responsive lightbox script with focus on performance.",
});

Package.on_use(function (api) {

    api.add_files("magnific-popup.css", "client");
    api.add_files("jquery.magnific-popup.js", "client");

});