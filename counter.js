$('#fileinput').change( function()
{
    const value = document.getElementById("fileinput").files[0].name;
    console.log(value); 
});



document.getElementById("btnLoad").addEventListener("click", function showFileSize() {
    // (Can't use `typeof FileReader === "function"` because apparently it
    // comes back as "object" on some browsers. So just see if it's there
    // at all.)
    if (!window.FileReader) { // This is VERY unlikely, browser support is near-universal
        console.log("The file API isn't supported on this browser yet.");
        return;
    }

    var input = document.getElementById('fileinput');
    if (!input.files) { // This is VERY unlikely, browser support is near-universal
        console.error("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        addPara("Please select a file before clicking 'Load'");
    } else {
        var file = input.files[0];
        addPara("File " + file.name + " is " + file.size + " bytes in size");
    }
});

const imgInp = document.getElementById("imgInp")
imgInp.onchange = event => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }
 