const dataItem = [];
// fetch the JSON data
fetch("data.json")
  .then((response) => {
    if (!response.ok) return console.log("Oops! Something went wrong.");

    return response.json();
  })
  .then((data) => {
    // handle the data
    // return data;
    populateDOM(data);
    console.log(data);
  });


function loadData() {
  // fetch the JSON data
  const promise = fetch("data.json")
    .then((response) => {
      if (!response.ok) return console.log("Oops! Something went wrong.");

      return response.json();
    })
    .then((data) => {
      // handle the data
      return data;
      // populateDOM(data);
    });

  return promise;
}

// append the data to the DOM
function populateDOM(data) {
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

function toDashCase(title) {
  return title.replace(/\s+/g, "-").toLowerCase();
}

// document.querySelector(".frequency").addEventListener('click',() => {
//   console.log('h')
// });

// function pressButton(selector) {
//   const button = document.querySelector(selector);
//   const value = document.querySelector(selector).value;
//   if (!button.classList.contains("selected")) {
//     turnOffPreviousButton();

//     button.classList.add("selected");
//   }
//   console.log(value);
//   return value;
// }

function pressButton(selector) {
  const button = document.querySelector(selector);
  const value = document.querySelector(selector).value;
  if (!button.classList.contains("selected")) {
    turnOffPreviousButton();

    button.classList.add("selected");
  }
  console.log(value);
  return value;
}


function turnOffPreviousButton() {
  const previousButton = document.querySelector(".selected");
  if (previousButton) {
    previousButton.classList.remove("selected");
  }
}
