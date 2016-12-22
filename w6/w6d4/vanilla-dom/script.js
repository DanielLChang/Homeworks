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
  const handleList = (e) => {
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
  listBtn.addEventListener("click", handleList);

  // adding new photos

  // --- your code here!
  const showPhoto = (e) => {
    const photoDiv = document.querySelector(".photo-form-container");
    if (photoDiv.className === "photo-form-container") {
      photoDiv.className = "photo-form-container hidden";
    } else {
      photoDiv.className = "photo-form-container";
    }
  };

  const photoBtn = document.querySelector(".photo-show-button");
  photoBtn.addEventListener("click", showPhoto);


  const handlePhoto = (e) => {
    e.preventDefault();

    const urlInput = document.querySelector(".photo-url-input");
    const url = urlInput.value;
    urlInput.value = "";

    const newImg = document.createElement("img");
    newImg.src = url;

    const newPhoto = document.createElement("li");
    newPhoto.appendChild(newImg);

    const dogPhotosList = document.querySelector(".dog-photos");
    dogPhotosList.appendChild(newPhoto);
  };

  const photoSubmit = document.querySelector(".photo-url-submit");
  photoSubmit.addEventListener("click", handlePhoto);


});
