const inside=document.getElementById('input');
	
    
const  myFunction=() => {
  if (inside.value === "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"){
inside.classList.toggle('text2')
  } else{
inside.classList.toggle('text1')
  }
}