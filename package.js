
Package.describe({
  summary: "Light and responsive lightbox script with focus on performance.",
  version: "1.0.0"
  name: "jelena:meteor-magnific-popup",
  git: "https://github.com/jelenajjo/meteor-magnific-popup.git"
});


Package.onUse(function (api) {
  api.use("jquery@1.0.0", "client");
    
    api.addFiles("magnific-popup.css", "client");
    api.addFiles("jquery.magnific-popup.js", "client");
});

