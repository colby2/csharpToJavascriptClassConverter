let convertBtn = document.getElementById('convertBtn');
let readFileBtn = document.getElementById('readFileBtn');
let arrayOfClassProps = [];
let fileContents = "";

readFileBtn.addEventListener('click', () => {
    var file = document.getElementById('fileInput').files[0];
    readFile(file);
});

convertBtn.addEventListener('click', () => {
    arrayOfClassProps = [];

    var useTypes = document.getElementById('includeTypes').checked;

    for(var i = 0; i < fileContents.length; i++){
        if(fileContents[i].includes('{ get; set; }')){

            var classProp = fileContents[i]
                .split('public')[1]
                .split('{ get; set; }')[0]
                .trim();

            var propType = classProp.split(' ')[0]
            var propName = classProp.split(' ')[1]

            if(useTypes){
                if(propType[propType.length - 1] == '?'){
                    propType = propType.slice(0, propType.length - 1);
                }

                switch(propType){
                    case 'int':
                        propType = ": number";
                        break;
                    case 'decimal':
                        propType = ": number";
                        break;
                    case 'float':
                        propType = ": number";
                        break;
                    case 'long':
                        propType = ": number";
                        break;
                    case 'string':
                        propType = ": string";
                        break;
                    case 'DateTime':
                        propType = ": Date";
                        break;
                    case 'bool':
                        propType = ": boolean";
                        break;
                    default: 
                        propType = `: ${propType}`;
                        break;
                }
            }
            else{
                propType = "";
            }

            propName = propName.charAt(0).toLowerCase() + propName.slice(1);

            arrayOfClassProps.push(`${propName}${propType}`);
        }
    }

    outputClassToScreen();
});

function outputClassToScreen(){
    let displayElement = document.getElementById('resultDisplay');
    displayElement.innerHTML = '';
    arrayOfClassProps.forEach((prop) => {
        displayElement.innerHTML += `${prop}<br>`
    })
}

function readFile(file){
    var reader = new FileReader();

    reader.readAsText(file, 'UTF-8');
    reader.onload = (evt) => {
        fileContents = evt.target.result.split('\n');
    }
}