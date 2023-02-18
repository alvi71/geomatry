let serial =0;
document.getElementById('triangle-btn').addEventListener('click', function(){
    serial +=1;
    const nameOfItem = getData('triangle-title');
    const baseField = firstInput('triangle-base');
    const heightField = secondInput('triangle-height');

   const areaOfTriangle = 0.5 * parseFloat(baseField) * parseFloat(heightField);
    commonElements(nameOfItem,areaOfTriangle);
  
});
// common function-------

function commonElements(nameOfItem,areaOfField){
    
   const container = document.getElementById("table-container");
   
   const tr = document.createElement("tr");
   tr.innerHTML=`
   <td>${serial}</td>
   <td>${nameOfItem}</td>
   <td>${areaOfField}cm<sup>2<sup></td>
   <td><button class="bg-blue-700 text-white rounded px-3 py-2">Convert to m<sup>2</sup></button></td>

   }
   
   `;
   container.appendChild(tr);
}
// common function 2-----

function getData(id){
    const value = document.getElementById(id).innerText;
    return value;
    
}

function firstInput(id){
    const value = document.getElementById(id).value;
    if (value>0){
    return value;
    }
    else {
        alert('wrong input');
        value = '';
    }
}
function secondInput(id){
    const value = document.getElementById(id).value;
    if (value> 0){
        return value;
    }
    else{
        alert('wrong input');
        value= '';
    }
}
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial +=1;
    const nameOfItem = getData('rectangle-title');
    const baseField = firstInput('rectangle-width');
    const heightField = secondInput('rectangle-length');
   const areaOfRectangle = parseFloat(baseField) * parseFloat(heightField);

   commonElements(nameOfItem, areaOfRectangle);
});

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serial +=1;
    const nameOfItem = getData('parallelogram-title');
    const baseField = firstInput('parallelogram-base');
    const heightField = secondInput('parallelogram-height');
   const areaOfParallelogram = parseFloat(baseField) * parseFloat(heightField);

   commonElements(nameOfItem, areaOfParallelogram);
});
document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial +=1;
    const nameOfItem = getData('rhombus-title');
    const baseField = firstInput('rhombus-d1');
    const heightField = secondInput('rhombus-d2');
   const areaOfParallelogram = 0.5 * parseFloat(baseField) * parseFloat(heightField);

   commonElements(nameOfItem, areaOfParallelogram);
});

document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial +=1;
    const nameOfItem = getData('pentagon-title');
    const baseField = firstInput('pentagon-width');
    const heightField = secondInput('pentagon-height');
   const areaOfParallelogram = 0.5 * parseFloat(baseField) * parseFloat(heightField);

   commonElements(nameOfItem, areaOfParallelogram);
});
document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial +=1;
    const pi = 3.14;
    const nameOfItem = getData('ellipse-title');
    const baseField = firstInput('ellipse-a');
    const heightField = secondInput('ellipse-b');
   const areaOfEllipseWithoutPrecision = pi * parseFloat(baseField) * parseFloat(heightField);
   const areaOfEllipse = areaOfEllipseWithoutPrecision.toFixed(2);

   commonElements(nameOfItem, areaOfEllipse);
});


document.getElementById('get-btn').addEventListener('click', function(){
    window.location.href = 'question.html'
})
// mouseleave card background color change function
function cardBackgroundColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + r + ' ' + g + ' ' + b;
    return bgColor;
}
// set backgroundColor on card item
function setBackgroundColor(elementId){
    const setBackground = document.getElementById(elementId);
    setBackground.style.backgroundColor = cardBackgroundColor();
}

document.getElementById('card-1').addEventListener('mouseleave',function(){
    setBackgroundColor('card-1');
})
document.getElementById('card-2').addEventListener('mouseleave',function(){
    setBackgroundColor('card-2');
})
document.getElementById('card-3').addEventListener('mouseleave',function(){
    setBackgroundColor('card-3');
})
document.getElementById('card-4').addEventListener('mouseleave',function(){
    setBackgroundColor('card-4');
})
document.getElementById('card-5').addEventListener('mouseleave',function(){
    setBackgroundColor('card-5');
})
document.getElementById('card-6').addEventListener('mouseleave',function(){
    setBackgroundColor('card-6');
})

