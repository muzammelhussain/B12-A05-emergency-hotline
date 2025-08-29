// heart counting
let favCount = 0;
    const countEl = document.getElementById("heart-count");
    const hearts = document.querySelectorAll(".heart-icon");

    hearts.forEach(heart => {
      heart.addEventListener("click", () => {
          favCount++;
          countEl.innerText = favCount;
        })
    })


    // make call funtion

// let coins = 100; 
// const coinCount = document.getElementById("points-count");
// const callHistory = document.getElementById("call-history");
// const callButtons = document.querySelectorAll(".call-btn");

// callButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const card = button.closest("div");
//     console.log(card);
//     const serviceName = card.querySelector(".service-name").innerText;
//     const serviceNumber = card.querySelector(".service-number").innerText;
//     const date = new Date().toLocaleTimeString();
    
//     if (coins < 20) {
//       alert("Not enough coins to make a call!");
//       return;
//     }

//     coins -= 20;
//     coinCount.innerText = coins;

//     // Show alert
//     alert(`Calling ${serviceName} at ${serviceNumber}...`);

//     // Add to Call History
//       const div = document.createElement("div")
//         div.innerHTML=`
//         <div class="flex justify-between items-center mx-5 bg-[#FAFAFA] rounded-xl px-5 py-4">
//                         <div>
//                             <h1>${serviceName} </h1>
//                             <p>${serviceNumber}</p>
//                         </div>
//                         <p>${date}</p>
//                     </div>
//         `

//   });
// });

let coins = 100;
const coinCountEl = document.getElementById("points-count");
const callHistoryEl = document.getElementById("call-history");
const callButtons = document.querySelectorAll(".call-btn");


function updateCoins(amount) {
  coins -= amount;
  coinCountEl.innerText = coins;
}

function addToHistory(serviceName, serviceNumber) {
  const date = new Date().toLocaleTimeString();
  const historyItem = document.createElement("div");

  historyItem.className = "flex justify-between items-center mx-5 my-5 bg-[#FAFAFA] rounded-xl px-5 py-4";
  historyItem.innerHTML = `
    <div>
      <h1>${serviceName}</h1>
      <p>${serviceNumber}</p>
    </div>
    <p>${date}</p>
  `;

  callHistoryEl.appendChild(historyItem);
}

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
  console.log(button)
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    updateCoins(20);

    alert(`Calling ${serviceName}  ${serviceNumber}...`);

    addToHistory(serviceName, serviceNumber);
  });
});


// clear history


 function clearCallHistory() {
    const callHistory = document.getElementById("call-history");
    callHistory.innerHTML = "";
}


let copyCount = 2;
const copyCountSpan = document.getElementById("copy-count");

const copyButtons = document.querySelectorAll(".btn-soft i.fa-copy");

copyButtons.forEach(button => {
  button.closest("button").addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(serviceNumber);
    copyCount++;
    copyCountSpan.innerText = copyCount;
    alert(`Hotline number ${serviceNumber} copied to clipboard!`);
  });
});