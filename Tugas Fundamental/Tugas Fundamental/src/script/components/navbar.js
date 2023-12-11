class NavigationBar extends HTMLElement {
    constructor() {
        super();
        
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar bg-primary">
        <div class="container-fluid">
            <a href="index.html" class="navbar-brand">MovieIlegal</a>
            <div class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search Movie" id="searchElement">
                <button class="btn btn-secondary" id='searchButtonElement' type="submit">Search</button>
            </div>
        </div>
    </nav>
        `;
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
    }
}

customElements.define('navigation-bar', NavigationBar)