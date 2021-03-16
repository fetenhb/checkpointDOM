// bouton plus
let plus = document.querySelectorAll('.plus-btn')
for (let i=0; i<plus.length; i++) {
  plus[i].addEventListener('click', function () {
    plus[i].nextElementSibling.value++
    // mise à jour totale
    totalPrice()

  })
}

// bouton moins
let  moins =document.querySelectorAll('.minus-btn')
for(let i=0; i< moins.length; i++){
    moins[i].addEventListener('click',function(){
        if(moins[i].previousElementSibling.value > 0){
            moins[i].previousElementSibling.value--
        }

        // mise à jour totale
        totalPrice()
    })
    
}

// calcule de totale
function totalPrice (){
    let prix =document.getElementsByClassName('price')
    let quantity = document.querySelectorAll('.quan')
    console.log(prix)
    console.log(quantity)
    let sum=0
    for(let i=0; i< prix.length; i++){
        console.log(sum)
        sum+=prix[i].innerText * quantity[i].value
       
    }
    
    document.getElementById('total').innerText=sum
}

// calculer la valeur totale lorsque la page se charge
document.getElementById("total").onload =totalPrice ();

// bouton effacer
let deleteBtn = document.querySelectorAll('.delete-btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove()

    // mise à jour le totale
    totalPrice()
  });
}


// like
let likeBtn = document.querySelectorAll('.like-btn');
for (let i=0 ; i<likeBtn.length; i++){
  likeBtn[i].addEventListener('click', function () {
    likeBtn[i].classList.toggle("is-active");
  
  })

}