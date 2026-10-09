/**
 * Reveals "View more articles" when the grid has 8 or more cards.
 * Counts only [data-blog-card] inside [data-blog-list], so the featured
 * article is not included. The backend can skip this script and render
 * the link only when there are 8 or more articles.
 */
$(document).ready(function () {
  var $list = $("[data-blog-list]");
  var $more = $("[data-blog-view-more]");

  if (!$list.length || !$more.length) {
    return;
  }

  if ($list.find("[data-blog-card]").length >= 8) {
    $more.prop("hidden", false);
    $more.addClass("is-visible");
  }
});
