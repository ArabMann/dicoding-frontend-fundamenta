class CardList extends HTMLElement {
    constructor() {
        super();
        
    }

    set cards(cards) {
        this._cards = cards;
        this.render();
    }

    render() {
        // Hapus card-card lama sebelum menambahkan yang baru
        this.innerHTML = '';

        const containerCard = document.createElement('div');
        containerCard.classList.add('container');
        const rowCard = document.createElement('div');
        rowCard.classList.add('row');

        this._cards.forEach(movie => {
            const {
                Poster,
                Year,
                Title
            } = movie;

            const card = document.createElement('div');
            card.classList.add("col-md-4", 'my-3');
            card.innerHTML = `
                <div class="card">
                    <img src="${Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            ${Year}
                        </h6>
                    </div>
                </div>
            `;
            rowCard.append(card);
        });

        containerCard.append(rowCard);
        this.append(containerCard);
    }

    renderError(message) {
        // Hapus card-card lama jika ada pesan error
        this.innerHTML = `<h2 class="container">${message}</h2>`;
    }
}

customElements.define('card-components', CardList);