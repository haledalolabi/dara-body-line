function includeHTML(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }
  
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
  