let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

const checkApiKey = () =>
  !localStorage.getItem("apiKey")
    ? window.open("enter-api-key.html", "_self")
    : localStorage.getItem("apiKey");
