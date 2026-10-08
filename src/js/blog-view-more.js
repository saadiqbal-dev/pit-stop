/**
 * Reveals "View more articles" when the grid has 8 or more cards.
 * Counts only [data-blog-card] inside [data-blog-list], so the featured
 * article is not included. The backend can skip this script and render
 * the link only when there are 8 or more articles.
 */
(function () {
  var list = document.querySelector("[data-blog-list]");
  var more = document.querySelector("[data-blog-view-more]");

  if (!list || !more) {
    return;
  }

  if (list.querySelectorAll("[data-blog-card]").length >= 8) {
    more.hidden = false;
    more.classList.add("is-visible");
  }
})();
