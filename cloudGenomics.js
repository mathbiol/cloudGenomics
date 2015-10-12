console.log('cloudGenomics.js loaded')

cg=function(){
    // ini
    console.log('ini')
    cg.dropbox()

}

cg.dropbox=function(){
    $('<div id="dropData"><h3>DropBox Data</h3></div>').appendTo(document.body)
    var success=function(files){
        ff=files
        oquetuquizeres(files)
    }

    options = {

        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            success(files)
            alert("Here's the file link: " + files[0].link)
        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        cancel: function() {

        },

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        linkType: "direct", // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        multiselect: true, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        //extensions: ['.fast', '.doc', '.docx'],
    };

    var button = Dropbox.createChooseButton(options);
    dropData.appendChild(button);
}


$(document).ready(function(){
    cg()
})
