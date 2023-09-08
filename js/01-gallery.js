import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "basiclightbox";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original;

  galleryLink.appendChild(galleryImage);

  galleryItem.appendChild(galleryLink);

  galleryContainer.appendChild(galleryItem);
});

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;

    const modal = basicLightbox.create(
      `<img src="${imageUrl}" width="800" height="600">`
    );

    modal.show();
  }
});
