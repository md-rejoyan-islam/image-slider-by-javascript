const changeSlider = document.getElementById("changeSlider");
const sliderDiv = document.getElementById("sliderDiv");

// image array
const images = [
  "./assets/images/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-background-travel-vacation-trip_74190-14730.webp",
  "./assets/images/Blue-flag-beach-Puri3.jpg",
  "./assets/images/images.jpeg",
  "./assets/images/CbivdLKKTLVsjak9RDT9J5.jpg",
  "./assets/images/wild-desert-landscape-daytime-scene_1308-50629.webp",
];

// show image in slider
let totalSlider = "";
images.map((data, index) => {
  totalSlider += `
<button class="fill-white changeBtn" data-index=${index}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg> 
    </button>
`;
});
changeSlider.innerHTML = totalSlider;

let count = 0;

// slider change next button

sliderDiv.querySelector("img").src = images[count];
const next = () => {
  count++;
  if (count == images.length) {
    count = 0;
  }
  sliderDiv.querySelector("img").src = images[count];
};


// slider change previous button
const previous = () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  sliderDiv.querySelector("img").src = images[count];
};


// slider indicator button
changeSlider.onclick = (e) => {
  const parent = e.target.parentElement;
  if (
    parent.classList.contains("changeBtn") ||
    parent.parentElement.classList.contains("changeBtn")
  ) {
    const index =
      parent.getAttribute("data-index") ||
      parent.parentElement.getAttribute("data-index");
    sliderDiv.querySelector("img").src = images[index];
    count = index;
  }
};
