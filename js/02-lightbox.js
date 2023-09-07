import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryLi = galleryItems
  .map(({ original, preview, description }) => {
    return `
    <li class="gallery__item ">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image" 
                src="${preview}"
                
                alt="${description}"
            />
        </a>
    </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryLi);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
