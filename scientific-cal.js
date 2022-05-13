let operations=Array.from(selectElementAll("button"));
operations.pop()
console.log(operations)

let isDegree = true;

let calFun = {
    sin:x =>{ 
        return isDegree?Math.sin(x*(Math.PI/ 180)):Math.sin(x);
    },
    cos:x =>{ 
        return isDegree?Math.cos(x*(Math.PI/ 180)):Math.cos(x);
    },
    tan:x =>{ 
        return isDegree?Math.tan(x*(Math.PI/ 180)):Math.tan(x);
    },
    asin:x =>{ 
        return isDegree?Math.round(Math.asin(x)*(180/Math.PI)):Math.asin(x);
    },
    acos:x =>{  
        return isDegree?Math.round(Math.acos(x)*(180/Math.PI)):Math.acos(x);
    },
    atan:x =>{ 
        return isDegree?Math.round(Math.atan(x)*(180/Math.PI)):Math.atan(x);
    },
    
    fact: function(x){
        return (x===0||x===1)?1:x*this.fact(x-1);
    },
    sqrt:x => Math.sqrt(x),
    ℼ:x=> x*Math.PI,
    exp:x=> Math.exp(x),
    log:x=>Math.log(x),
    e:x=>x + Math.E,
    deg:x=>x*(180/Math.PI),
    rad:x=>x*(Math.PI/180),
}

operations.map( btn => {
    btn.addEventListener('click', () =>{
        let val = btn.value;
        if(val==="deg"){
            btn.classList.add("selected");
            selectElement("#rad").classList.remove("selected");
            isDegree=true;
        }
        else if(val==="rad"){
            btn.classList.add("selected");
            selectElement("#deg").classList.remove("selected");
            isDegree=false;    
        }
        let str = `${val}(${display.value}) = ${calFun[val](display.value)}`; 
        display.value= calFun[val](display.value);
        if(!isNaN(display.value)){
           showHistory(str);   
        }
    })
})

function switchCalci(){
    let main_body=selectElement(".main");
    let sci = Array.from(selectElementAll("button"));
    let input =Array.from(selectElementAll("input"));
    input.shift();
    sci.pop()
    if(main_body.id==="standard"){

        main_body.id="scientific";
        sci.map(ele => ele.classList.remove("scientific"));
        input.map(ele => ele.setAttribute("style","height:10.7vh"))
        selectElement("a").innerHTML = `<i class="fa-solid fa-calculator"></i>`

    }else{

        main_body.id="standard";
        sci.map(ele => ele.classList.add("scientific"));
        input.map(ele => ele.setAttribute("style","height:13vh"));
        selectElement("a").innerHTML = `<i class="fa-solid fa-flask"></i>`
    }
}