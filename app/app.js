
productScroll();
product();

function product(){
    var product = document.getElementById('slide');
    for(let i = 0; i < 14; i++ ){
      product.innerHTML += '<div id="prd'+i+'" class="product">'+
      '<div class="product-img">'+
          '<img src="/image/61oQly6YbHL._AC_SL1500_.jpg" alt="">'+
      '</div>'+
      '<div class="product-details">'+
                        '<span class="prd-name">Beats Solo3 Wireless On-Ear Headphones</span>'+
                        '<span class="prd-price">$250</span>'+
                    '</div>'+
      '<div class="product-button">'+
          '<button>Buy</button>'+
      '</div>'+
  '</div>';
    }
}

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {

    let position = 0;

    prev[i].addEventListener("click", function() {
      if (position > 0) {
        position -= 1;
        translateX(position); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        position += 1;
        translateX(position);
      }
    });
  }

  function hiddenItems() {
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
