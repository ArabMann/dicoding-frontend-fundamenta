import './article-list4.js';
import articles from './article4.js';
 
const articleListElement = document.createElement('article-list');
articleListElement.tampilanArticles = articles;
 
document.body.appendChild(articleListElement);