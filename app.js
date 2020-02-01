// Const variables
// Buttons, textboxs
const author = document.querySelector(".author-input");
const keywords = document.querySelector(".keywords-input");
const desc = document.querySelector(".description-input");
const linkcss = document.querySelector(".css-input");
const linkjs = document.querySelector(".js-input");
const title = document.querySelector(".title-input");
const output = document.querySelector(".output");
const copybtn = document.querySelector(".copy-btn");


// Inputs
// Text inputs to output
var input = [];
input.push(author);
input.push(keywords);
input.push(desc);
input.push(linkcss);
input.push(linkjs);
input.push(title);


// Loops through inputs array to live update output
for (let i = 0; i < input.length; i++) {
    
    // When key up, update output
    input[i].addEventListener("keyup", () => {
        
        // Output variable
        var out = `<!DOCTYPE html>
<html>
    <head>
        <title>`+title.value+`</title>
        <meta charset="UTF-8" />
        <meta name="description" content="`+desc.value+`" />
        <meta name="keywords" content="`+keywords.value+`" />
        <meta name="author" content="`+author.value+`" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="`+linkcss.value+`" rel="stylesheet" />
    </head>
    <body>
        
        
        
    </body>
    <script src="`+linkjs.value+`"></script>
</html>`;
        
        // Update output
        output.textContent = out;
    });
}


// Copy output
copybtn.addEventListener("click", () => {
    let outputLength = output.textContent.length;
    output.select();
    output.setSelectionRange(0, outputLength+1);
    document.execCommand("copy");
});