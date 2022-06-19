const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let id = 0;
imageSlider(id);

prev.addEventListener("click", () => {
  id = id - 1;
  imageSlider(id);
});
next.addEventListener("click", () => {
  id = id + 1;
  imageSlider(id);
});

function imageSlider(num) {
  const sliderImages = document.querySelectorAll(".slider");

  if (num >= sliderImages.length) {
    num = 0;
    id = 0;
  }
  if (num < 0) {
    num = sliderImages.length - 1;
    id = sliderImages.length - 1;
  }

  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  sliderImages[num].style.display = "block";
}
