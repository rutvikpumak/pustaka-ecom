const addressAdd = document.querySelector(".address-add");
const addressCancel = document.querySelector(".address-cancel");

const addressForm = document.querySelector(".address-form-container")

const profileContainer = document.querySelector(".profile-container")

addressAdd.addEventListener("click",()=>{
    addressForm.style.display = "block"
    profileContainer.style.backgroundColor = "rgba(0,0,0,0.4)";
}
)

addressCancel.addEventListener("click",()=>{
    addressForm.style.display = "none"
  profileContainer.style.backgroundColor = "#f8f8f8";
}
)