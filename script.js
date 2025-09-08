// categories fetch
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";
  for (let category of categories) {
    console.log(category);
    const listDiv = document.createElement("div");
    listDiv.innerHTML = `
                  
                  
                  <button class="hover:bg-[#16803c] hover:text-white cursor-pointer p-2 rounded-lg text-left transition-colors duration-200 w-[250px]"> ${category.category_name} </button>
    `;
    categoriesContainer.append(listDiv);
  }
};
loadCategory();



// All Trees fetch
const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((load) => displayAllTrees(load.data)); 
};

const displayAllTrees = (plants) => {
  const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  const allTreesBtn = document.createElement("button");
  allTreesBtn.className =
    "bg-[#16803c] text-white cursor-pointer p-2 rounded-lg text-left w-[250px]";
  allTreesBtn.innerText = "All Trees";
  plantsContainer.append(allTreesBtn);


  plants.forEach((plant) => {
    const plantDiv = document.createElement("div");
    plantDiv.className =
      "flex items-center gap-3 border p-3 rounded-lg shadow-sm bg-white mt-2";

    plantDiv.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="w-16 h-16 object-cover rounded-md">
      <div>
        <h3 class="font-semibold">${plant.name}</h3>
        <p class="text-sm text-gray-600">${plant.description.slice(0, 60)}...</p>
        <p class="text-green-700 font-bold">৳${plant.price}</p>
      </div> 
    `;

    plantsContainer.append(plantDiv);
  });
};

loadAllTrees();
