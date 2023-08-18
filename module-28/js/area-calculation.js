function areaCalculateTraiangleArea(){
    const baseField = document.getElementById('base-field');
    const baseFieldValueText = baseField.value;
    const base = parseFloat(baseFieldValueText)
    console.log(base);



    const heightField = document.getElementById('height-field');
    const heightFieldValueText = heightField.value;
    const height = parseFloat(heightFieldValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)


    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function areaCalculateRectangleArea(){
    const widthField = document.getElementById('width-field');
    const widthFieldValueText = widthField.value;
    const width = parseFloat(widthFieldValueText);
    


    const lengthField = document.getElementById('length-field');
    const lengthFieldValueText = lengthField.value;
    const length = parseFloat(lengthFieldValueText);

    // validate input: width and length

    if(isNaN(width) || isNaN(length)){
        alert('please insert a number');
        return;
    }


    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;


}

// reusable function >-- reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    const area = base * height;

    setElementInnerText('parallelogram-area', area);
}


function calculateEllipseArea(){
    const majorRadious = getInputValue('ellipse-major-radious');
    const minorRadious = getInputValue('ellipse-minor-radious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaToDesimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaToDesimal);
}

// reduble get input value field in number 

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


// reusable set inner text , p etc 


function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}