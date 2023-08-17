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


    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;


}