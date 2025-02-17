const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
    handleInputChange(inputElement);
  });
  search_icon.addEventListener("click", handleSearchCloseOnClick);
  sort_wrapper.addEventListener("click", handleSortIconOnClick);

  function handleInputChange(inputElement) {
    const inputValue = inputElement.value;
  
    if (inputValue !== "") {
      document
        .querySelector("#search-close-icon")
        .classList.add("search-close-icon-visible");
    } else {
      document
        .querySelector("#search-close-icon")
        .classList.remove("search-close-icon-visible");
    }
  }

  function handleSearchCloseOnClick() {
    document.querySelector("#search-input").value = "";
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
  
  function handleSortIconOnClick() {
    document
      .querySelector(".filter-wrapper")
      .classList.toggle("filter-wrapper-open");
    document.querySelector("body").classList.toggle("filter-wrapper-overlay");
  }
/* Music and button elements */
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

bgMusic.loop = true;

let musiPlaying = false;
musicToggle.innerText = "Play Music";

musicToggle.addEventListener("click", () => {
    if(musiPlaying) {
        bgMusic.pause();
        musicToggle.innerText = "Play Music";
    } else {
        bgMusic.play();
        musicToggle.innerText = "Pause Music";
    }
    musiPlaying = !musiPlaying;
});