const data = [
  {
    title: "Nissan Presage, 2000/2018",
    price: "3000000",
    image:
      "https://cdn1.unegui.mn/media/cache1/e8/3c/e83cbd5ffcd0b46a0e03c3d39f624b7a.webp",
    description:
      "190000 km . Auto . 2.4 L . Petrol . 5 min ago | UB - Songinokhairkhan, 21st khoroolol",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: "40000000",
    image:
      "https://www.gpas-cache.ford.com/guid/f676cf91-40d6-3481-b179-a1da52c85058.png",
    description:
      "190000 km . Auto . 2.4 L . Petrol . 5 min ago | UB - Songinokhairkhan, 21st khoroolol",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: "37000000",
    image:
      "https://static.motorway.co.uk/static/assets_seller/hero-bmw-blue.b05b6c811a4915f7813d.png",
    description:
      "190000 km . Auto . 2.4 L . Petrol . 5 min ago | UB - Songinokhairkhan, 21st khoroolol",
  },
];
data.map((cardData) => {
  createCard(cardData);
});
function createCard(cardData) {
  const body = document.querySelector("body"); //querySelectorAll baival body ard [0] nemne
  const scrollContainer = document.createElement("div");
  const container = document.createElement("div");
  const imageTag = document.createElement("img");
  const priceContainer = document.createElement("div");
  const h6 = document.createElement("h6");
  const title = document.createElement("p");
  const description = document.createElement("span");

  scrollContainer.classList.add("scroll-container");
  container.classList.add("container");
  imageTag.classList.add("image");
  priceContainer.classList.add("price-container");
  h6.classList.add("price");
  title.classList.add("title");
  description.classList.add("desc1");

  imageTag.src = cardData.image;
  imageTag.alt = "image";
  priceContainer.appendChild(h6); //h6 innerText hiihees umnu appendChild hiine
  h6.innerText = cardData.price;
  priceContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.694 18.7472L12.694 18.7472L12.6907 18.7501C12.3086 19.0844 11.7057 19.0839 11.3241 18.7452L11.3241 18.7451L11.3192 18.7409L11.2093 18.6445L11.2075 18.643C8.56194 16.3363 6.46223 14.5002 5.027 12.7857C3.60527 11.0873 2.95048 9.64011 3.00293 8.12279C3.05138 6.80791 3.75402 5.53662 4.89126 4.79043L4.89181 4.79007C7.06151 3.36441 9.77692 4.01416 11.2514 5.6774C11.4412 5.89148 11.7136 6.01401 11.9997 6.01401C12.2858 6.01401 12.5582 5.89148 12.748 5.6774C14.2245 4.01189 16.9389 3.35712 19.1055 4.78867L19.1082 4.79043C20.2457 5.53679 20.9484 6.80848 20.9966 8.12367L20.9966 8.12449C21.0533 9.64027 20.3998 11.0866 18.976 12.7883C17.5394 14.5054 15.4377 16.3457 12.7921 18.6621C12.792 18.6622 12.792 18.6622 12.7919 18.6623L12.7904 18.6636L12.694 18.7472Z" fill="white" stroke="#777777" stroke-width="2" stroke-linejoin="round"/>
</svg>`;

  title.innerText = cardData.title;
  description.innerText = cardData.description;

  container.appendChild(imageTag);
  container.appendChild(priceContainer);
  container.appendChild(title);
  container.appendChild(description);
  scrollContainer.appendChild(container);
  body.appendChild(scrollContainer);
}

// img.src =
//   "https://cdn1.unegui.mn/media/cache1/e8/3c/e83cbd5ffcd0b46a0e03c3d39f624b7a.webp";
// img.classList.add("picture");
// body.appendChild(img);

// h6.classList.add("price");
// body.appendChild(h6);

// p.innerText = "Nissan Presage, 2000/2018";
// p.classList.add("title");
// body.appendChild(p);
// const div1 = document.createElement("div");
// div1.innerText =
//   "190000 km . Auto . 2.4 L . Petrol . 5 min ago | UB - Soginokhairkhan, 21st khoroolol";
// div1.classList.add("desc1");
// body.appendChild(div1);

// const img1 = document.createElement("img");
// img1.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo79lz_r-q-et_8lf4BPAIrh338wdZNZ3sXw&s";
// img1.classList.add("picture1");
// body.appendChild(img1);
