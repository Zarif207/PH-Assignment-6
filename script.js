// Categories API 

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const listDiv = document.createElement("div");
    listDiv.innerHTML = `
      <button class="hover:bg-[#16803c] hover:text-white cursor-pointer p-2 rounded-lg text-left transition-colors duration-200 w-[250px]"> ${category.category_name} </button>
    `;
    categoriesContainer.appendChild(listDiv);
  });
};

loadCategory();





//Plants API 


const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data); 
      displayAllTrees(data.plants); 
    });
};

const displayAllTrees = (plants) => {
  const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  const allTreesBtn = document.createElement("button");
  allTreesBtn.className =
    "bg-[#16803c] text-white cursor-pointer p-2 rounded-lg text-left w-[250px] mb-2";
  allTreesBtn.innerText = "All Trees";
  allTreesBtn.onclick = loadAllTrees;
  plantsContainer.appendChild(allTreesBtn);



  const middle = document.getElementById("middle");
  middle.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className = "max-w-sm bg-white rounded-2xl shadow p-4";

    card.innerHTML = `
  
      <div class="bg-gray-200 w-full h-50 rounded-lg flex items-center justify-center">
        <img src="${plant.image}" alt="${
      plant.name
    }" class="w-[350px] h-[200px] object-cover rounded-lg">
      </div>
  
      <div class="mt-4">
        <h2 class="text-lg font-semibold text-gray-900">${plant.name}</h2>
        <p class="text-sm text-gray-600 mt-1">
          ${plant.description}.slice(0, 80)}...
        </p>
        <div class="flex items-center justify-between mt-3">
          <span class="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            ${plant.category}
          </span>
          <span class="text-gray-900 font-semibold">৳${plant.price}</span>
        </div>
        <button class="w-full mt-4 bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-full transition">
          Add to Cart
        </button>
      </div>
    `;

    middle.appendChild(card);
  });
};

loadAllTrees();
