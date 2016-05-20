(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';

        //fileDownloadExample();

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function fileDownloadExample() {
      console.log('fileDownloadExample')
      console.log(cordova.file.documentsDirectory)
      
      var fileTransfer = new FileTransfer();
      var uri = encodeURI("https://upload.wikimedia.org/wikipedia/commons/4/4a/Snow_on_the_mountains_of_Southern_California.jpg");
      var fileURL = cordova.file.documentsDirectory + 'Snow_on_the_mountains_of_Southern_California.jpg'
      fileTransfer.download(
          uri,
          fileURL,
          function(entry) {
              console.log("download complete: " + entry.toURL());
          },
          function(error) {
              console.log("download error source " + error.source);
              console.log("download error target " + error.target);
              console.log("upload error code" + error.code);
          },
          false,
          {
              headers: {
                  "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
              }
          }
      );
    };

} )();
