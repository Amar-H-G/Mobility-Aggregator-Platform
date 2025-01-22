import { appData, premiumData } from "./data.js";
Homepage();

function Homepage() {
  const defaultCity = "delhi";

  function displayApps(city) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const cityData = appData[city];

    if (!cityData) {
      content.innerHTML = '<p class="no-data">No data available for this city. We will be adding it soon!</p>';
      displayPremiumItems(city);
      return;
    }

    cityData.forEach(item => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      categoryDiv.innerHTML = `<h2>${capitalize(item.category)}:</h2>`;

      const appsDiv = document.createElement("div");
      appsDiv.className = "apps";

      item.apps.forEach(app => {
        const appDiv = document.createElement("div");
        appDiv.className = "app";
        appDiv.innerHTML = `
          <a href="./Components/app-details.html?city=${city}&app=${app.name}&description=${encodeURIComponent(app.description)}&logo=${encodeURIComponent(app.logo)}&Alink=${app.Alink}&Ilink=${app.Ilink}&BLink=${app.BLink}">
            <img src="./Components/${app.logo}" alt="${app.name}" />
            <p>${app.name}</p>
          </a>
        `;
        appsDiv.appendChild(appDiv);
      });

      categoryDiv.appendChild(appsDiv);
      content.appendChild(categoryDiv);
    });

    displayPremiumItems(city);
  }

  function displayPremiumItems(city) {
    const premiumSection = document.getElementById("premium-section");
    premiumSection.innerHTML = "";

    const cityPremiumItems = premiumData[city];

    if (!cityPremiumItems || cityPremiumItems.length === 0) {
      premiumSection.innerHTML = '<p class="no-data">No premium items available for this city.</p>';
      return;
    }
    const premiumHeader = document.createElement("h2");
    premiumHeader.textContent = `Antique Mobility Museum of the ${capitalize(city)}`;
    premiumSection.appendChild(premiumHeader);

    cityPremiumItems.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "premium-item";
      itemDiv.innerHTML = `
        <img src="./Components/${item.logo}" alt="${item.name}" />
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      `;
      premiumSection.appendChild(itemDiv);
    });
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  document.getElementById("city-select").addEventListener("change", (e) => {
    const selectedCity = e.target.value;
    displayApps(selectedCity);
  });

  displayApps(defaultCity);

}


