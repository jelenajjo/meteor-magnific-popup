Package.describe({
    "summary": "Light and responsive lightbox script with focus on performance.",
    git: "https://github.com/jelenajjo/meteor-magnific-popup.git"
});

Package.on_use(function (api) {
    api.use("jquery", "client");
    
    api.add_files("magnific-popup.css", "client");
    api.add_files("jquery.magnific-popup.js", "client");

});