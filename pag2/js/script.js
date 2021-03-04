var icons = [
    'React',
    'NodeJs',
    'Bootstrap',
    'PHP',
    'Angular',
    'MySQL'
]
var cores = [
    '#5ED3F3',
    '#8CBF3D',
    '#8553D0',
    '#787CB4',
    '#BD002E',
    '#F77606'
]
var progress = [
    10, 30, 50, 50, 5, 70
]
var class_icons = document.querySelectorAll('.item--3 .content i');
var class_progresso = document.querySelector('.progresso');
var class_progresso_h2 = document.querySelector('.progresso h2');
var class_progresso_span = document.querySelector('.progresso span');
var class_progresso_span_i = document.querySelector('.progresso span i');

    for(let i = 0; i < class_icons.length ; i++){
        class_icons[i].addEventListener('mousemove', ()=>{
            class_progresso_h2.innerHTML =`${icons[i]}` ;
            class_progresso.style.background = cores[i];
            class_progresso_span.style.display = "block";
            class_progresso_span_i.style.width = `${progress[i]}%`;
        })
        class_icons[i].addEventListener('mouseout', ()=>{
            class_progresso_h2.innerHTML = `` ;
            class_progresso.style.background = "#F1DFFD77";
            class_progresso_span.style.display = "none";
        })
    }

var modal = document.querySelector('.modal')
var open = true;
document.querySelector('.open').onclick = function(){
    closeModal()
}
document.querySelector('.modalHeader i.fas').onclick = ()=>{
    closeModal()
}
function closeModal(){
    if(open){
        modal.style.display = 'block'
        open = false
    }else{
        modal.style.display = 'none'
        open = true
    }
}
function escrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 175 * i)
    });
}
const titulo = document.querySelector('.banner p');

setTimeout(escrever(titulo), 2000);
