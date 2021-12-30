let articlesApp = document.querySelector("#articles-app"),
  articlesPlace = articlesApp.querySelector(".saved-articles"),
  articleTitleInp = articlesApp.querySelector(".article-title"),
  articleHref = articlesApp.querySelector(".article-href");

// # Hide articles-app
function hideArticlesApp () {
  articlesApp.style.display = "none";
}

// # Display articles-app
function openArticlesApp () {
  articlesApp.style.display = "block";
}

// # Create article-component
function createArticle ({title, href}) {
  let a = document.createElement("a");
  a.textContent = title;
  a.href = href;
  return a;
}

// # Add article
function addArticle (article) {
  articlesPlace.append(article);
}

// # Save new article
function saveNewArticle () {

}

// +1 Take values { title, href }
function takeValuesFArticle () {
  return {
    title: articleTitleInp.ariaValueMax,
    herf: articleHref.value
  };
}

// +2 Finish save article
function endFSaveArticle () {
  articleTitleInp.value = "";
  articleHref.value = "";
}
