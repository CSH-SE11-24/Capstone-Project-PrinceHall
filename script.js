//This allows the slider to work in moreinfo.html without it when you press the arrows it will have no effect

//This is from one noirsociety on code pen projects

let slider = document.querySelector('.slider');

function activate(e) {
  let items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

