axios.get("js/brand.json", {}).then((response) => {
  brands = response.data;
  renderClass(brands);
});

function renderClass(brands) {
  brands.forEach((brand) => {
    for (i=0; i < getDetailBtn.length; i++) {    
      getDetailBtn[i].innerHTML =`<div><button onclick="getBrandDetail(${i+17})">了解更多</button></div>`;
    }
    for (i=0; i < brandBoxBtn.length; i++) {    
      brandBoxBtn[i].innerHTML =`<div onclick="getBrandDetail(${i+17})"><img src="images/gallery/${brands[i].logosrc}.jpg"></div>`;
    }
    
  });
}
