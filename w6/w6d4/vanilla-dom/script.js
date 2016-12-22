document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const handleSubmit = (e) => {
    e.preventDefault();

    const favInput = document.querySelector(".favorite-input");
    const fav = favInput.value;
    favInput.value = "";

    const newList = document.createElement("li");
    newList.textContent = fav;

    const favList = document.getElementById("sf-places");
    favList.appendChild(newList);
  };

  const listBtn = document.querySelector(".favorite-submit");
  listBtn.addEventListener("click", handleSubmit);

  // adding new photos

  // --- your code here!



});
