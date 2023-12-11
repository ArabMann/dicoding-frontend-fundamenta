import '../components/card.js';
import '../components/navbar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('navigation-bar');
    const cardElement = document.querySelector('card-components');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = async results => {
        cardElement.cards = await results; // Tambahkan await disini
    };

    const fallbackResult = message => {
        cardElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;