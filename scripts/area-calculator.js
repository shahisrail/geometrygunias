function calculateTriangaleArea() {
    //    get traingale vase value

    const basfield = document.getElementById('triangle-base');
    const basfieldText = basfield.value
    const base = parseFloat(basfieldText)
    console.log(base);

    // get trainagale vase value 

    const triangleHeight = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeight.value
    const height = parseFloat(triangleHeightText)
    console.log(height);


    const area = 0.5 * base * height
    // console.log(area);

    // show triangel area

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area
}

function calculateRectangleArea() {
    // get reactangale vase value
    const rectangleWidth = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidth.value
    const width = parseFloat(rectangleWidthText)


    const rectangleLength = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLength.value
    const length = parseFloat(rectangleLengthText)

    const Area = width * length

    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = Area

}

// reuse functoin 
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height
    setELementText('parallelogram-area', area)
}

function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius')
    const minor = getInputValue('ellipse-minor-radius')
    const area = 3.14 * major * minor
    const areaTwoDecimal = area.toFixed(2)
    setELementText('ellipse-area', area,areaTwoDecimal)
}
function calculatePentagonArea() {
    const PentagonMajor =  getInputValue('Pentagon-major-radius')
    const PentagonMinor = getInputValue('Pentagon-minor-radius')
    const area = 0.5* PentagonMajor * PentagonMinor
    setELementText('Pentagon-area',area)
}
function calculateRhombusArea() {
    const RhombusMajor =  getInputValue('Rhombus-major-radius')
    const RhombusMinor = getInputValue('Rhombus-minor-radius')
    const area = 0.5* RhombusMajor * RhombusMinor
    setELementText('Rhombus-area',area)
}

// reusable get input value feild number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputFieldText = inputField.value
    const value = parseFloat(inputFieldText)
    return value
}

//  resuable set span ,p,div,etc
function setELementText(elemntId, area) {
    const element = document.getElementById(elemntId)
    element.innerText = area;
}