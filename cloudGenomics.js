console.log('cloudGenomics.js loaded')

cg=function(){
    // ini
    console.log('ini')
    cg.dropbox()
    cg.connectDNAnexus()
    // look for token
    var foundIn='localStorage'
    cg.dnaNexusToken=jmat.urlParms().code // in the search
    if(!cg.dnaNexusToken){ // then in the localstorage
        cg.dnaNexusToken = localStorage.dnaNexusToken
    }else{ // save what was found in the search
        localStorage.dnaNexusToken=cg.dnaNexusToken
        foundIn='URL'
    }
    if(cg.dnaNexusToken){
        console.log('token found in '+foundIn+':',cg.dnaNexusToken)
        // starting DX
        cg.api = new DX.Api(cg.dnaNexusToken)
        
    }
}

cg.dropbox=function(){
    $('<div id="dropData"><h3>DropBox Data</h3></div>').appendTo(document.body)
    var success=function(files){
        console.log('files object:',files)
        cg.files=files
        //oquetuquizeres(files)
    }

    options = {

        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            success(files)
            //alert("Here's the file link: " + files[0].link)
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

cg.connectDNAnexus=function(){
    var oauthURL='https://auth.dnanexus.com/oauth2/authorize?client_id=mrsa&response_type=code&redirect_uri=https%3A%2F%2Fmathbiol.github.io/cloudGenomics/'
    if(!document.getElementById('DnaNexusButton')){
        $('<h3>DNA Nexus Cloud Genomics</h3><button id="DnaNexusButton">Connect with DNA Nexus</button>').appendTo(document.body)        
    }
    DnaNexusButton.onclick=function(){
        // notice comment on client_id on https://wiki.dnanexus.com/API-Specification-v1.0.0/Authentication
        location.href=oauthURL
    }
}


$(document).ready(function(){
    cg()
})
