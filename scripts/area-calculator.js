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

    if (isNaN(base) || isNaN(height)) {
        alert('please insert a number')
        return;
    }

    const area = 0.5 * base * height
    // console.log(area);
    addtoCalculatoinEntry('triangle', area)
    // show triangel area

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area
}


// function calculateRectangleArea() {
//     // get reactangale vase value
//     const rectangleWidth = document.getElementById('rectangle-width')
//     const rectangleWidthText = rectangleWidth.value
//     const width = parseFloat(rectangleWidthText)


//     const rectangleLength = document.getElementById('rectangle-length')
//     const rectangleLengthText = rectangleLength.value
//     const length = parseFloat(rectangleLengthText)
//     // validad input
//     if (isNaN(width) || isNaN(length)) {
//         alert('please insert a number')
//         return;
//     }

//     const Area = width * length
//     const rectangleArea = document.getElementById('rectangle-area')
//     rectangleArea.innerText = Area;
//     // addtoCalculatoinEntry('rectangle', area)`y



// }
// reuse functoin 
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width')
    const length = getInputValue('rectangle-length')
    if(isNaN(width)||isNaN(length)){
        alert('please insert a number')
        return;
    }
    const area = width * length
    setELementText('rectangle-area', area)
    addtoCalculatoinEntry('rectangle', area)
}


function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    if (isNaN(base) || isNaN(height)) {
        alert('please insert a number')
        return;
    }
    const area = base * height
    setELementText('parallelogram-area', area)

    // add to calcuolatoin entry
    addtoCalculatoinEntry('parallelogram', area)
}

function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius')
    const minor = getInputValue('ellipse-minor-radius')

    if (isNaN(major) || isNaN(minor)) {
        alert('please insert a number')
        return;
    }

    const area = 3.14 * major * minor

    const areaTwoDecimal = area.toFixed(2)
    setELementText('ellipse-area', area, areaTwoDecimal)
    addtoCalculatoinEntry('ellipse',areaTwoDecimal)
}
function calculatePentagonArea() {
    const PentagonMajor = getInputValue('Pentagon-major-radius')
    const PentagonMinor = getInputValue('Pentagon-minor-radius')
    if (isNaN(PentagonMajor) || isNaN(PentagonMinor)) {
        alert('please insert a number')
        return;
    }
    const area = 0.5 * PentagonMajor * PentagonMinor
    addtoCalculatoinEntry('Pentagon', area)
    setELementText('Pentagon-area', area)
}
function calculateRhombusArea() {
    const RhombusMajor = getInputValue('Rhombus-major-radius')
    const RhombusMinor = getInputValue('Rhombus-minor-radius')
    if (isNaN(RhombusMajor) || isNaN(RhombusMinor)) {
        alert('please insert a number')
        return;
    }
    const area = 0.5 * RhombusMajor * RhombusMinor
    addtoCalculatoinEntry('Rhombus', area)
    setELementText('Rhombus-area', area)
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

// add to calculate entry
function addtoCalculatoinEntry(areaTYpe, area) {
    console.log('adding soon')
    const calculatoinEntry = document.getElementById('calculatoin-entry')
    const count = calculatoinEntry.childElementCount
    const p = document.createElement('p')
    p.classList.add('my-4')
    p.innerHTML = `${count + 1} ${areaTYpe} ${area} cm <Sup>2</Sup> <button class="btn btn-success">Covert to cm <sup>2</sup> </button>`
    calculatoinEntry.appendChild(p)
}