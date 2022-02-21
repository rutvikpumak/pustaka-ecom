const humberBtn = document.querySelector(".drawer-hamberg-btn")
const filterContainer = document.querySelector(".filter-container");
const container = document.querySelector(".product-list-container");

humberBtn.addEventListener("click",()=>{
    filterContainer.classList.add("trans-on");
    filterContainer.classList.remove("trans-off");
})

function closeDrawer(){
    filterContainer.classList.remove("trans-on");
    filterContainer.classList.add("trans-off");
}

container.addEventListener("click",closeDrawer)
