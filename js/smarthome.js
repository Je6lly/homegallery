axios.get("js/brand.json", {}).then((response) => {
    brands = response.data;
    renderClass(brands);
    renderEn(brands);
  });

  function renderClass(brands) {
    brands.forEach((brand) => {
      for (i=0; i < getDetailBtn.length; i++) {    
        getDetailBtn[i].innerHTML =`<div><button onclick="getBrandDetail(${i+13})">了解更多</button></div>`;
      }
      for (i=0; i < brandBoxBtn.length; i++) {    
        brandBoxBtn[i].innerHTML =`<div onclick="getBrandDetail(${i+13})"><img src="images/gallery/${brands[i].logosrc}.jpg"></div>`;
      }
      
    });
  }
  function renderEn(brands) {
    brands.forEach((brand) => {
      for (i=0; i < getDetailBtnEn.length; i++) {    
        getDetailBtn[i].innerHTML =`<div><button onclick="getBrandDetailEn(${i+13})">More</button></div>`;
      }
      for (i=0; i < brandBoxBtn.length; i++) {    
        brandBoxBtn[i].innerHTML =`<div onclick="getBrandDetailEn(${i+13})"><img src="images/gallery/${brands[i].logosrc}.jpg"></div>`;
      }
      
    });
  }