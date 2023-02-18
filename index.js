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
