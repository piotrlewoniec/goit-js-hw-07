'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line
(() => {
  const gallery = {
    galleryArea: document.querySelector('.gallery'),
    instanceSimpleLightbox: {},
    init: function () {
      this.galleryCreate();
      this.instanceSimpleLightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
      });
      this.galleryArea.addEventListener(
        'click',
        function (event) {
          this.galleryClickHandler(event);
        }.bind(this)
      );
    },
    galleryCreate() {
      let galleryItem = []; //array of images with html code
      for (let i = 0; i < galleryItems.length; i++) {
        const { preview, original, description } = galleryItems[i];
        galleryItem[
          i
        ] = `<a class="gallery__item" href="${original}"><img class="gallery__image" src=" ${preview}" alt=" ${description}"/></a>`;
      }
      let galleryToPublish = galleryItem.map(image => image).join(''); //building one string from array
      this.galleryArea.insertAdjacentHTML('afterbegin', galleryToPublish); //adding elements to ul
    },
    galleryClickHandler: function (event) {
      event.preventDefault();
      if (event.target.nodeName !== 'IMG') {
        return;
      }
      // this.instanceSimpleLightbox.open();
      this.instanceSimpleLightbox.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
      });
    },
  };
  gallery.init();
})();

// Zadanie 2 - biblioteka SimpleLightbox
// Utwórz taką samą galerię jak w zadaniu pierwszym, używając jednak biblioteki SimpleLightbox, która zajmie się opracowaniem kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.

// Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. Rozbij je na kilka podzadań:

//1 Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego.
//2 Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.
//3 Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do div.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - najpierw sekcje «Usage» i «Markup».
//4 W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.
