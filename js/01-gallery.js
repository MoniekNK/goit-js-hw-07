import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  galleryContainer.appendChild(galleryItem);
});

let instance = null;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;

    instance = basicLightbox.create(
      `<img src="${imageUrl}" width="800" height="600">`
    );

    instance.show();

    window.addEventListener("keydown", onEsc);
  }
});

function onEsc(event) {
  if (event.key === "Escape") {
    if (instance) {
      instance.close();
      window.removeEventListener("keydown", onEsc);
    }
  }
}
