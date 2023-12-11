import './article-item4.js';

class ArticleList extends HTMLElement{
    set tampilanArticles(articles){
        this._articles = articles;
        this.render();
    }


    render(){
        this._articles.forEach(bebas => {
            const articleItemElement = document.createElement('article-item');


            // memanggil fungsi setter article() pada article-item.
            articleItemElement.tampilanArticle = bebas;
            this.appendChild(articleItemElement)
        });
    }
}

customElements.define('article-list', ArticleList);