document.getElementById("list").addEventListener("click",function(){
  menubarListItemDisplay_toggler();
});
document.getElementById("menu_items_exit").addEventListener("click",function(){
  menubarListItemExit_toggler();
});
document.getElementById("left").addEventListener("click", function(){
banner_toggler_left();
});
document.getElementById("right").addEventListener("click", function(){
banner_toggler_right();
});
function menubarListItemDisplay_toggler(){
 let menu_bar = document.getElementById("container");
 let menu_items = document.getElementById("menu_items");
 let applyNow = document.getElementById("Appnow");
 let closeButton = document.getElementById("menu_items_exit");
 let list_items = document.getElementById("list");
 menu_bar.style.display = "block";
 menu_items.style.display = "block";
 menu_items.style.margin="auto";
 applyNow.style.display ="none";
 list_items.style.display = "none";
 closeButton.style.display = "inline-flex";
}
function menubarListItemExit_toggler(){
 let menu_bar = document.getElementById("container");
 let menu_items = document.getElementById("menu_items");
 let applyNow = document.getElementById("Appnow");
 let closeButton = document.getElementById("menu_items_exit");
 let list_items = document.getElementById("list");
  menu_bar.style.display = "flex";
  menu_items.style.display = "none";
  applyNow.style.display ="ruby";
  list_items.style.display = "inline-block";
  closeButton.style.display = "none";
}
function banner_toggler_right(){
let banner_image = document.getElementById("banner");
banner_image.style.background="url(images1/darkboat1.jpg)";
banner_image.style.backgroundSize = "cover";
banner_image.style.backgroundPosition = "center";
}
function banner_toggler_left(){
let banner_image = document.getElementById("banner");
banner_image.style.background="url(images1/humanbg2.jpg)";
banner_image.style.backgroundSize = "cover";
banner_image.style.backgroundPosition = "center";
}
