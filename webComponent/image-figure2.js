class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null
    this.alt = this.getAttribute('alt') || null
    this.caption = this.getAttribute('caption') || null
    this.render()
  }

  render() {
    this.innerHTML = `
      <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }
 
        figure > img {
          max-width: 220px;
        }
 
        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>
 
      <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }
}

customElements.define('image-figure', ImageFigure);

const elementImageFigure = document.querySelector('image-figure')
elementImageFigure.setAttribute('src', 'https://bit.ly/2QnXCE4')
elementImageFigure.setAttribute('alt', 'Dicoding Logo')
elementImageFigure.setAttribute('caption', 'Huruf g dalam logo Dicoding')

document.body.append(elementImageFigure)