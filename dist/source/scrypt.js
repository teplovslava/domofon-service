document.addEventListener("DOMContentLoaded",function(){
    const list = document.querySelectorAll('.qustion-list__item')
    
    
    list.forEach(item=>{
        item.addEventListener('click',function(){
            list.forEach(li=>{
                li.children[1].classList.add('display-none')
                li.classList.remove('active-qustion')
            })
        item.children[1].classList.remove('display-none')
        item.classList.add('active-qustion')
    })}
        
    )
    
})