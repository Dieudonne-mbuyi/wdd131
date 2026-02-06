let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.querySelector("#counter").textContent = count;
document.querySelector("#lastModified").textContent = document.lastModified;