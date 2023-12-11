// // Untuk membuat Custom Element menggunakan Class pada Javascript

// class ImageFigure extends HTMLElement {}

// customElements.define('image-figure', ImageFigure) // Function define() menerima 2 argument, pertama buat tagElement dan kedua mengambil dari Class yang dibuat untuk tagElement
// // customElement merupakan variable global berfungsi memberitahu bahwa terdapat html baru
// // Penamaan tag Custom Element apabila memiliki dua kata harus dipisahkan dengan - contoh seperti image-figure

// // Setelah mendefinisi custom element, selanjutnya buka index.html 

// // Terdapat dua cara untuk membuat instance pada custom element
// // Pertama buat tag image-figure dihtml dan kedua buat create element dijavascriptnya

// const imageFigureElement = document.createElement('image-figure')


//  Ini methode LifeStyle Callback Opsional
// class ImageFigure extends HTMLElement {
//     constructor() {
//         super();
//         console.log("Constructed")
//     }

//     connectCallback() {
//         console.log("Connect")
//     }

//     disconnectCallback() {
//         console.log("Disconnect")
//     }

//     adoptedCallback() {
//         console.log('adopted!');
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         console.log(`Attribute: ${name} changed!`);
//     }

//     // digunakan untuk mengamati perubahan nilai attribute caption
//     /* kita bisa menetapkan lebih dari satu atribut yang diamati.
//        dengan memisahkan nama atribut menggunakan koma. Contoh: */

//     // return ['caption', 'title', 'src', ...]
//     static get observedAttributes() {
//         return ['caption'];
//     }
// }
// customElements.define('image-figure', ImageFigure);


class ImageFigure extends HTMLElement {
  connectedCallback() {
      this.src = this.getAttribute('src') || null;
      this.alt = this.getAttribute('alt') || null;
      this.caption = this.getAttribute('caption') || null;
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <figure>
          <img src="${this.src}" alt="${this.alt}">
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
    }
   
    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
    }
   
    static get observedAttributes() {
        return ['caption', 'src', 'alt'];
    }
  }
   
  customElements.define('image-figure', ImageFigure);


// const imageFigureElement = document.createElement('image-figure');
// imageFigureElement.setAttribute('src', 'https://bit.ly/2QnXCE4');
// imageFigureElement.setAttribute('alt', 'Dicoding Logo');
// imageFigureElement.setAttribute('caption', 'Huruf g dalam logo Dicoding');
 
// document.body.appendChild(imageFigureElement);

const elementFigureElement = document.querySelector('image-figure');

elementFigureElement.setAttribute('src','https://bit.ly/2QnXCE4')
elementFigureElement.setAttribute('alt','Dicoding Logo')
elementFigureElement.setAttribute('caption','Huruf g dalam logo Dicoding')

document.body.append(elementFigureElement)