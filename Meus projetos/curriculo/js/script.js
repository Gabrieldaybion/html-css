const el = document.querySelector("#text");
const text = "Uma homenagem para quem cuida  de mim.";
const interval = 150;

function showText(el,text,interval){

    const char =text.split("").reverse();
    const type = setInterval(() => {

        if(!char.length){
            return clearInterval(type);
        }

        const next = char.pop();
         
        el.innerHTML += next;
        
    }, interval);

}

showText(el,text,interval);