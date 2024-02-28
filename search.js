const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
    handleInputChange(inputElement);
  });
  search_icon.addEventListener("click", handleSearchCloseOnClick);
  sort_wrapper.addEventListener("click", handleSortIconOnClick);