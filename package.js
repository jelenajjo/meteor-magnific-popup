Package.describe({
    "summary": "Light and responsive lightbox script with focus on performance.",
});

Package.on_use(function (api) {
    api.use("jquery", "client");
    
    api.addFiles("magnific-popup.css", "client");
    api.addFiles("jquery.magnific-popup.js", "client");

});