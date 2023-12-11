import './article-item3.js';
import articlee from './article3.js';

const containerElement = document.querySelector('.container');

const articleItem = document.createElement('article-item');

articleItem.article = articlee; // articlee didapatkan dari import object article3.js sedangkan article didapatkan import dari

containerElement.appendChild(articleItem);