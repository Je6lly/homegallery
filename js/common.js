// page-loader js
$("#page-anim-preloader").delay("10").fadeOut(2000);
setTimeout(page_anim_remove_preloader, "11000");

function page_anim_remove_preloader() {
  $("#page-anim-preloader").remove();
}

//Scroll to Top =
$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 50) {
    $("#return-to-top").fadeIn(200);
  } else {
    $("#return-to-top").fadeOut(200);
  }
});

$("#return-to-top").on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

$(function () {
  $("#nav-placeholder").load("nav.html");
  $("#footer-placeholder").load("footer.html");
});

var brands = [];

var brandDetail = document.getElementById("BrandDetail");
var getDetailBtn = document.getElementsByClassName("joinusbtn");
var brandBoxBtn = document.getElementsByClassName("brand-box");

function getBrandDetail(i) {
  var dtwrap = brandDetail.querySelector(".detail-wrap");

  brandDetail.classList.add("show");
  dtwrap.innerHTML = "";

  dtwrap.innerHTML += `
    <div class="dt-card container">
      <div class="row">
        <div class="col-12 dt-img"><img src="images/gallery/${brands[i].imgsrc}.jpg"></div>
        <div class="dt-card-content d-flex row align-content-center justify-content-center">
        <div class="col-12 col-lg-8">
        <div class="dt-card-title">${brands[i].name}</div>
        <div class="dt-card-text">${brands[i].detail}</div>
        <div class="joinusbtn" onclick="hideOverview()">
        <button>返回</button>
        </div>
        </div>
        <div class="col-12 col-lg-4">
        <div class="logo-box col-8 col-lg-12"><img src="images/gallery/${brands[i].logosrc}.jpg"></div>
        <div class="btns">
        <div class="joinusbtn"><button>下载</button></div>
        <div class="joinusbtn"><button>联系我们</button></div>
        </div>
        </div>
        </div>
      </div>
    </div>
  `;
}
function hideOverview() {
  brandDetail.classList.remove("show");
}


// var onloadCallback = function() {
//   alert("grecaptcha is ready!");
//   grecaptcha.ready(function () {
//     grecaptcha
//       .execute("6LfBW3YcAAAAACYTHGlU0Xknz3eKy1DsfY7XcHZy", { action: "homepage" })
//       .then(function (token) {
//         document.getElementById("captchaResponse").value = token;
//       });
//   });
// };
