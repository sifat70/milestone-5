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

    // add to calculation entry 

    /* 
    
    1. get the element where you to add the dynamic html
    2. create an element you want to add
    3. if needed add some class 
    4. set inner.html  it could be dynamic tamplete string
    */

    addToCalculationEntry('Parallelograp', area)
}


function calculateEllipseArea(){
    const majorRadious = getInputValue('ellipse-major-radious');
    const minorRadious = getInputValue('ellipse-minor-radious');
    const area = 3.14 * majorRadious * minorRadious;
    const areaToDesimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaToDesimal);

    addToCalculationEntry('Ellipse', area)
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



// add to calculation entry 

    /* 
    
    1. get the element where you to add the dynamic html
    2. create an element you want to add
    3. if needed add some class 
    4. set inner.html  it could be dynamic tamplete string;
    5. append the created element as a child of the parent
    */



function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area)
    const colculationEntry = document.getElementById('calculation-entry');

    const count = colculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert</button>`;

    colculationEntry.appendChild(p);
}