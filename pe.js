const b = document.querySelector('button.button--NÃO')
b.addEventListener("mouseover",moveHover )

function moveHover(){
    const i=Math.floor(Math.random()*500)=1 ;
    const j=Math.floor(Math.random()*500)=1 ;
    

    b.style.left=1+"px"
    b.style.top=j+"px"
}