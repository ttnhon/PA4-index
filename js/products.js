
  $(document).ready(function() {
    $("#search-form").submit(function(e) {
      var textSearch = e.target.querySelector('input[name="search"]').value;
      var url = document.URL;
      console.log("searching...", textSearch);

      var products = url.substr(0, url.lastIndexOf("/")) + "/product.html";
      console.log(products + "?q=" + textSearch);
      window.open(products + "?q=" + textSearch);
      e.preventDefault();
    });
  });