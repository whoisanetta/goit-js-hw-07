import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handleProductClick);

function createMarkup(arr) {
  return arr
    .map(({ original, preview, description }) => {
      return `
    <li data-preview=${preview} class="gallery__item js-gallery-item">
        <a class="gallery__link" href="${original}" rel="noopener noreferrer nofollow">
            <img
                class="gallery__image" 
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");
}

function handleProductClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const targetElement = event.target.closest(".js-gallery-item");
  const photoPrev = targetElement.dataset.preview;
  const photoInfo = galleryItems.find((photo) => photo.preview === photoPrev);

  const instance = basicLightbox.create(`
        <img
            src="${photoInfo.original}"
            alt="${photoInfo.description}"
            />
`);

  instance.show();
}

console.log(galleryItems);
