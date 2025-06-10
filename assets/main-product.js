//  ########### accordian
var acc = document.getElementsByClassName("new_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("acc_active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document.querySelectorAll(".popup_click").forEach((service) =>
  service.addEventListener("click", function () {
    let active_service = service.dataset.service;
    document.querySelectorAll(".overlay_wrapper").forEach((overlay) => {
      if (overlay.dataset.service == active_service) {
        overlay.classList.add("popup");
        document.body.style.overflow = "hidden";
      }
    });
  })
);
function close_overlay() {
  document
    .querySelectorAll(".overlay_wrapper")
    .forEach((overlay) => overlay.classList.remove("popup"));
  document.body.style.overflow = "scroll";
}

document
  .querySelectorAll(".close_overlay")
  .forEach((close_overlay_div) =>
    close_overlay_div.addEventListener("click", close_overlay)
  );
document
  .querySelectorAll(".overlay_content .icon-close")
  .forEach((close_overlay_svg) =>
    close_overlay_svg.addEventListener("click", close_overlay)
  );

document
  .querySelectorAll('.add_to_cart button[type="submit"]')
  .forEach((element) =>
    element.addEventListener("click", function () {
      document.querySelector(".loading").style.display = "flex";

      setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
      }, "3000");
    })
  );

document.querySelector(".product_zoom").addEventListener("click", function () {
  document.querySelector(".product_zoom_close").style.display = "flex";
  let swiffy = document.querySelector(".main-carousel2");
  document
    .querySelector(".carousal_product")
    .classList.add("zoom_product_gallary");
  swiffy.classList.remove("slider-item-reveal");
  swiffy.classList.remove("slider-item-snapstart");
  document.body.style.overflow = "hidden";
});
document
  .querySelector(".product_zoom_close")
  .addEventListener("click", function () {
    document.querySelector(".product_zoom_close").style.display = "none";
    let swiffy = document.querySelector(".main-carousel2");
    document
      .querySelector(".carousal_product")
      .classList.remove("zoom_product_gallary");
    swiffy.classList.add("slider-item-reveal");
    swiffy.classList.add("slider-item-snapstart");
    document.body.style.overflow = "scroll";
  });

const looxAppWidget = document
  .querySelector(".shopify-app-block #looxReviews").closest('.container');
  looxAppWidget.classList.add("navigate");
looxAppWidget.setAttribute("id", "shopify-block-loox-product-reviews");

const productDescription = document.querySelector(".ProductMeta__Description");
const buy_buttons2 = document.querySelector(".buy-buttons.floating");
const allNavigate = document.querySelectorAll(".navigate");
const product_toggle = document.querySelector(".product_toggle");
const colorVariant = document.getElementById("color-variant");
window.addEventListener("scroll", navigate);
function navigate() {
  product_toggle.style.display =
    productDescription.offsetTop - 300 < window.scrollY &&
    window.innerWidth <= 1000
      ? "flex"
      : "none";

  if (
   colorVariant && window.scrollY > colorVariant.offsetTop &&window.screen.availWidth < 1000
  ) {
    buy_buttons2.style.display = "block";
  } else {
    buy_buttons2.style.display = "none";
  }


//  if (
//     window.scrollY > productDescription.offsetTop &&
//     window.screen.availWidth < 1000
//   ) {
//      buyButtons2.style.display = "block";
//   } else {
//      buyButtons2.style.display = "none";
//   }




  allNavigate.forEach((elemen) => {
    const element = document.querySelector(
      `[href="#${elemen.getAttribute("id")}"]`
    );
    if (
      elemen.offsetTop - 300 < window.scrollY &&
      elemen.offsetTop + elemen.clientHeight - 200 > window.scrollY
    ) {
      element.classList.add("active_nav");
    } else {
      element.classList.remove("active_nav");
    }
  });
}
 const sizeSelectorToggle = document.querySelector('.size_popup_button')
 const selectSizeButton =   document.querySelector('.select_size')
 const addCartButton =  document.querySelector('.add_to_cart')
  var notifyMeButttonElement =  document.querySelectorAll(".buy-buttons .notify___me")
let x = 1;
document.addEventListener("change",function(event){
if(x<2 && sizeSelectorToggle){ 
  if(selectSizeButton){
     selectSizeButton.style.display="none"
  }
   sizeSelectorToggle.style.display="none"
     addCartButton.style.display="block"
     notifyMeButttonElement.forEach((notifyMeButtton)=> notifyMeButtton.style.display = !event.target.className.includes("is-disabled") ? "none":"block" )
   x++;
}
})