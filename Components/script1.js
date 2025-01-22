appDetailes();
function appDetailes() {
  function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      city: urlParams.get("city"),
      app: urlParams.get("app"),
      description: urlParams.get("description"),
      logo: urlParams.get("logo"),
      Alink: urlParams.get("Alink"),
      Ilink: urlParams.get("Ilink"),
      BLink: urlParams.get("BLink"),
    };
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function updateAppDetails() {
    const params = getQueryParams();

    document.getElementById("app-name").textContent =
      params.app || "No App Name";
    document.getElementById("city-name").textContent =
      capitalize(params.city) || "No City";
    document.getElementById("app-description").textContent =
      params.description || "No Description";
    document.getElementById("app-logo").src =
      params.logo || "default-logo.png";
    document.getElementById("android-link").href = params.Alink || "#";
    document.getElementById("ios-link").href = params.Ilink || "#";
    document.getElementById("book-link").href = params.BLink || "#";
  }
  updateAppDetails();
}