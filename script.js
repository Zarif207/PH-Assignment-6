const fixImageUrl = (url) => url ? url.replace("i.ibb.co.com", "i.ibb.co") : "https://via.placeholder.com/350x200?text=No+Image";
let activeButton = null;


const setActiveButton = (btn) => {
  if(activeButton) {
    activeButton.classList.remove('bg-[#16803c]', 'text-white');
  }
  btn.classList.add('bg-[#16803c]', 'text-white');
  activeButton = btn;
}

// main section
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(err => console.error(err));
}

//modal part
const openPlantModal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data => {
      const plant = data.plants;
      const modalBox = document.getElementById("plant-modal-box");

      modalBox.innerHTML = `
        <h3 class="text-2xl font-bold mb-3">${plant.name}</h3>
        <div class="flex flex-col items-left">
          <img src="${fixImageUrl(plant.image)}" alt="${plant.name}" class="w-full h-[250px] object-cover rounded-xl mb-4">
          <p class="text-gray-800 mb-2"><span class="font-semibold">Category:</span> ${plant.category}</p>
          <p class="text-gray-800 mb-2"><span class="font-semibold">Price:</span> ৳${plant.price}</p>
          <p class="text-sm text-gray-800"><span class="font-semibold">Description:</span> ${plant.description}</p>
        </div>
        <div class="modal-action">
          <label for="plant-modal" class="btn bg-[#16803c] text-white hover:bg-green-700">Close</label>
        </div>
      `;

      document.getElementById("plant-modal").checked = true;
    })
    .catch(err => console.error("Modal API Error:", err));
};



const displayCategory = (categories) => {
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.category_name;
    btn.className = "cursor-pointer p-2 rounded-lg text-left w-[220px] mb-1 hover:bg-green-500 hover:text-white transition-colors duration-100";
    btn.onclick = () => {
      setActiveButton(btn);
      loadCategoryPlants(cat.id);
    };
    container.appendChild(btn);
  });
}
// 2nd api call
const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => displayAllTrees(data.plants))
    .catch(err => console.error(err));
}

const loadCategoryPlants = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then(res => res.json())
    .then(data => {
      if(data.plants && data.plants.length > 0){
        displayAllTrees(data.plants);
      } else {
        displayAllTrees([]);
      }
    })
    .catch(err => console.error(err));
}


const displayAllTrees = (plants) => {
  const middle = document.getElementById("middle");
  middle.innerHTML = "";

  if(!plants || plants.length === 0){
    const msg = document.createElement("p");
    msg.textContent = "No plants found in this category.";
    msg.className = "text-center text-red-500 col-span-3";
    middle.appendChild(msg);
    return;
  }

plants.forEach(plant => {
  const card = document.createElement("div");
  card.className = "max-w-sm bg-white rounded-2xl shadow p-4 flex flex-col h-[420px]";

  card.innerHTML = `
<div class="w-full flex items-center justify-center">
  <img src="${fixImageUrl(plant.image)}" alt="${plant.name}" 
       class="w-[350px] h-[200px] object-cover rounded-3xl py-[10px]">
</div>

<div class="flex flex-col h-full">
  <h2 class="text-lg font-semibold text-gray-900 cursor-pointer hover:underline" 
      onclick="openPlantModal(${plant.id})">
    ${plant.name}
  </h2>
  <p class="text-sm text-gray-600 mt-1">
    ${plant.description ? plant.description.slice(0, 80) : "No description"}...
  </p>

  <div class="mt-auto">
    <div class="flex items-center justify-between mt-3">
      <span class="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
        ${plant.category}
      </span>
      <span class="text-gray-900 font-semibold">৳${plant.price}</span>
    </div>
    <button 
      class="w-full mt-4 bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-full transition">
      Add to Cart
    </button>
  </div>
</div>
  `;

  middle.appendChild(card);
});
}

const AllTreesButton = () => {
  const plantsContainer = document.getElementById("plants-container");
  const allBtn = document.createElement("button");
  allBtn.textContent = "All Trees";
  allBtn.className = "cursor-pointer p-2 rounded-lg text-left w-[220px] mb-3 hover:bg-[#16803c] hover:text-white transition-colors duration-200";
  allBtn.onclick = () => {
    setActiveButton(allBtn);
    loadAllTrees();
  };
  plantsContainer.appendChild(allBtn);
  setActiveButton(allBtn);
}

AllTreesButton();
loadCategory();
loadAllTrees();
