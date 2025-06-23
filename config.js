let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

const checkApiKey = () => {
  const currentPage = window.location.pathname;

  if (
    !localStorage.getItem("apiKey") &&
    !currentPage.includes("enter-api-key.html")
  ) {
    window.open("enter-api-key.html", "_self");
  }
  return localStorage.getItem("apiKey");
};

let apiKey = checkApiKey();
