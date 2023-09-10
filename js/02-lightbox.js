import { galleryItems } from "./gallery-items.js";
const galleryList = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(
    (item) => `
          <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
          </a>
      `
  )
  .join("");

galleryContainer.insertAdjacentHTML(
  "beforeend",
  `<ul class="gallery">${galleryHTML}</ul>`
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
