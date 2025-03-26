// const dataItem = [];

loadDataDefult();
pushButton();

function loadDataDefult() {
  // fetch the JSON data
  const promise = fetch("data.json")
    .then((response) => {
      if (!response.ok) return console.log("Oops! Something went wrong.");

      return response.json();
    })
    .then((data) => {
      // handle the data
      displayDataDefult(data);
    });

  return promise;
}

function displayDataDefult(data) {
  let dataHTML = "";
  // with a forEach loop
  data.forEach((item) => {
    dataHTML += `
    <div class="activity-card" style="background-color: var(--${toDashCase(
      item.title
    )});">
      <div
        class="activity-cover"
        style="background-image: url(./images/icon-${toDashCase(
          item.title
        )}.svg)"
      ></div>
      <div class="activity-detail">
        <div class="activity-top">
          <p class="activity-name">${item.title}</p>
          <button class="three-dot">
            <img
              src="./images/icon-ellipsis.svg"
              class="three-dot-icon"
            />
          </button>
        </div>
        <div class="activity-bottom">
          <p class="activity-present">${item.timeframes.weekly.current}hrs</p>
          <p class="activity-previous">Last Week - ${
            item.timeframes.weekly.previous
          }hrs</p>
        </div>
      </div>
    </div>
  `;

    document.querySelector(".card-grid").innerHTML = dataHTML;
  });
}

function pushButton() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("selected")) {
        turnOffPreviousButton();

        button.classList.add("selected");
      }
      values = button.value;
      loadDataClick(values);
    });
  });
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector(".selected");
  if (previousButton) {
    previousButton.classList.remove("selected");
  }
}

function loadDataClick(values) {
  // fetch the JSON data
  const promise = fetch("data.json")
    .then((response) => {
      if (!response.ok) return console.log("Oops! Something went wrong.");

      return response.json();
    })
    .then((data) => {
      // handle the data
      populateDOM(data, values);
    });

  return promise;
}

// append the data to the DOM
function populateDOM(data, values) {
  let dataHTML = "";

  if (values === "daily") {
    data.forEach((item) => {
      dataHTML += `
      <div class="activity-card" style="background-color: var(--${toDashCase(
        item.title
      )});">
        <div
          class="activity-cover"
          style="background-image: url(./images/icon-${toDashCase(
            item.title
          )}.svg)"
        ></div>
        <div class="activity-detail">
          <div class="activity-top">
            <p class="activity-name">${item.title}</p>
            <button class="three-dot">
              <img
                src="./images/icon-ellipsis.svg"
                class="three-dot-icon"
              />
            </button>
          </div>
          <div class="activity-bottom">
            <p class="activity-present">${item.timeframes.daily.current}hrs</p>
            <p class="activity-previous">Yesterday - ${
              item.timeframes.daily.previous
            }hrs</p>
          </div>
        </div>
      </div>
    `;

      document.querySelector(".card-grid").innerHTML = dataHTML;
    });
  } else if (values === "weekly") {
    data.forEach((item) => {
      dataHTML += `
      <div class="activity-card" style="background-color: var(--${toDashCase(
        item.title
      )});">
        <div
          class="activity-cover"
          style="background-image: url(./images/icon-${toDashCase(
            item.title
          )}.svg)"
        ></div>
        <div class="activity-detail">
          <div class="activity-top">
            <p class="activity-name">${item.title}</p>
            <button class="three-dot">
              <img
                src="./images/icon-ellipsis.svg"
                class="three-dot-icon"
              />
            </button>
          </div>
          <div class="activity-bottom">
            <p class="activity-present">${item.timeframes.weekly.current}hrs</p>
            <p class="activity-previous">Last Week - ${
              item.timeframes.weekly.previous
            }hrs</p>
          </div>
        </div>
      </div>
    `;

      document.querySelector(".card-grid").innerHTML = dataHTML;
    });
  } else if (values === "monthly") {
    data.forEach((item) => {
      dataHTML += `
      <div class="activity-card" style="background-color: var(--${toDashCase(
        item.title
      )});">
        <div
          class="activity-cover"
          style="background-image: url(./images/icon-${toDashCase(
            item.title
          )}.svg)"
        ></div>
        <div class="activity-detail">
          <div class="activity-top">
            <p class="activity-name">${item.title}</p>
            <button class="three-dot">
              <img
                src="./images/icon-ellipsis.svg"
                class="three-dot-icon"
              />
            </button>
          </div>
          <div class="activity-bottom">
            <p class="activity-present">${
              item.timeframes.monthly.current
            }hrs</p>
            <p class="activity-previous">Last Month - ${
              item.timeframes.monthly.previous
            }hrs</p>
          </div>
        </div>
      </div>
    `;

      document.querySelector(".card-grid").innerHTML = dataHTML;
    });
  }
}

function toDashCase(title) {
  return title.replace(/\s+/g, "-").toLowerCase();
}
