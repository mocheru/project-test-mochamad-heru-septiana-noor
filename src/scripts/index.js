import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";

// Fetch DATA.json
import("../DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data["pictureId"]}" alt="${data["name"]
      }" title="${data["name"]}">
            <div class="list_item_content">
                <p class="list_item_rating"></a>
                </p></br>
                <h3 class="list_item_title"><a href="#">${data["name"]}</a></h3>
                <div class="list_item_desc">${data["description"].slice(
        0,
        150
      )}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector("#tes").innerHTML = dataList;
});

// Menu
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
