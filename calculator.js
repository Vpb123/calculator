const selectElement = val => document.querySelector(val);
const selectElementAll = val => document.querySelectorAll(val);

let display=selectElement('#result');

let inputs=Array.from(selectElementAll("input"));

const keyPressedAllowed = ['0','1','2','3','4','5','6','7','8'
,'9','/', '*', '-', '+','=', 'Enter','Backspace'];

let history =[];

function calculate(val){
    switch(val){
        case 'C':
            display.value="";
            break;
        case  '←':
        case 'Backspace':
            if(display.value!=0){
                display.value = display.value.substring(0,display.value.length - 1)
            }
            break;

        case '=':
        case 'Enter':
            let str=display.value;
            try{
                display.value = eval(display.value).toFixed(2);
                str += " = " + display.value;
                showHistory(str);
            }
            catch(e){
                display.value="Invalid Input";
            }   
        break;

        default:
            if(display.value==0){
                display.value="";
            }
            display.value+= val;
    }
}

function clearHisotry(){
    history.length=0;
    let h1=selectElement(".show-history").firstElementChild;
    h1.innerHTML=`No History Yet`;
    parent=selectElement(".show-history").lastElementChild;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function showHistory(str){
    history.push(str);
    let li = document.createElement("LI");
    li.textContent=str;
    selectElement(".show-history").lastElementChild.appendChild(li);

    if(history.length!= 0){
        let h1=selectElement(".show-history").firstElementChild;
        h1.innerHTML="History";
        console.log(history);
    }
}

inputs.map(btn => {
    btn.addEventListener('click', ()=>calculate(btn.value))   
})

document.addEventListener('keydown', (e)=>{
        let val=e.key;
        if(keyPressedAllowed.includes(val)){
        calculate(val)
    }
})

selectElement(".clear-btn").addEventListener('click', clearHisotry);

