import { galleryItems } from './gallery-items.js';
// Change code below this line
(() => {
  const gallery = {
    galleryArea: document.querySelector('.gallery'),
    init: function () {
      this.galleryCreate();
      // this.galleryArea.addEventListener('click', event => {
      //   this.galleryClickHandler(event);
      // });
      this.galleryArea.addEventListener(
        'click',
        function (event) {
          console.log('calling handler...');
          this.galleryClickHandler(event);
        }.bind(this)
      );
    },
    galleryCreate() {
      console.log('Creating gallery...');
      let galleryItem = []; //array of images with html code
      for (let i = 0; i < galleryItems.length; i++) {
        const { preview, original, description } = galleryItems[i];
        galleryItem[
          i
        ] = `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src=" ${preview}" data-source="${original}" alt=" ${description}"/></a></div>`;
      }
      let galleryToPublish = galleryItem.map(image => image).join(''); //building one string from array
      this.galleryArea.insertAdjacentHTML('afterbegin', galleryToPublish); //adding elements to div
    },
    galleryClickHandler: function (event) {
      event.preventDefault();
      if (event.target.nodeName !== 'IMG') {
        return console.log('Are you fucking blind!!!');
      }
      console.log('gallery click handler');
      console.log('event: ', event);
      console.log('event.target: ', event.target);
      console.log('event.target.nodeName: ', event.target.nodeName);
      console.log('event.target.dataset.source: ', event.target.dataset.source);
      console.log('event.currentTarget: ', event.currentTarget);
      const instanceLightbox = basicLightbox
        .create(`<img class="gallery__item" width="1280" src="${event.target.dataset.source}">`, {
          className: 'gallery__item',
          onShow: instanceLightbox => {
            // Close when hitting escape. copy from https://github.com/electerious/basicLightbox/issues/38
            document.onkeydown = function (evt) {
              evt = evt || window.event;
              var isEscape = false;
              if ('key' in evt) {
                isEscape = evt.key === 'Escape' || evt.key === 'Esc';
              } else {
                isEscape = evt.keyCode === 27;
              }
              if (isEscape) {
                instanceLightbox.close();
              }
            };
          },
        })
        .show();
    },
  };
  gallery.init();
  console.log(galleryItems);
})();

// Zadanie 1 - galeria obrazów

// W pliku gallery-items.js znajduje się tablica galleryItems, która zawiera obiekty z informacją o obrazkach: małe (miniatura), oryginalne (duże) i opis. Już połączyliśmy ją z każdym z plików JS projektu.

// Utwórz galerię z możliwością kliknięcia w jej elementy i przeglądania pełnego obrazu w oknie modalnym. Obejrzyj wersję demonstracyjną wideo o działaniu galerii.

// Wykonuj to zadanie w plikach 01-gallery.html i 01-gallery.js. Rozbij je na kilka podzadań:

// 1. Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii.
// 2. Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
// 3. Połączenie skryptu i stylów biblioteki okna modalnego basicLightbox. Użyj CDN serwisu jsdelivr i dodaj do projektu linki do minimalizowania (.min) plików biblioteki.
// 4. Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
// 5. Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.

// Znacznik elementu galerii
// Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, i ukazywać się w href linku. Nie dodawaj innych tagów HTML lub klas CSS oprócz tych, które znajdują się w tym szablonie.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// Zwróć uwagę na to, że obrazek zamieniono w link, a więc po domyślnym kliknięciu użytkownik zostanie przekierowany na inną stronę. Zablokuj to postępowanie domyślnie.

// Zamknięcie z klawiatury
// Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. W bibliotece basicLightbox istnieje metoda na programowe zamknięcie okna modalnego.
