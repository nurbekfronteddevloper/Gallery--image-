function imageGallery() {
  const highlight = document.querySelector(".tech-highlight");
  const previews = document.querySelectorAll(".tech-preview img");
  previews.forEach((preview) =>{
    preview.addEventListener("click", function(){
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("tech-active"));
      highlight.src = bigSrc;
      preview.classList.add("tech-active")
    })
  })


}

imageGallery()