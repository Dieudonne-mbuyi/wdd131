//display current yeaur//
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Display last modified date//

const modifiedPara = document.getElementById("lastmodified");
modifiedPara.textContent = "lastmodified :" + document.lastModified;