const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Select DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Delete and populate list of facts
factsList.innerHTML = "";
loadFacts();

// Button to show/hide form
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// Populate list with data from array
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
        ${fact.text}
        <a
          href="${fact.source}"
          target="_blank"
          class="source"
          >(Source)</a>
    </p>
        <span class="tag" style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }"
          >${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Load data from Supabase
async function loadFacts() {
  const res = await fetch(
    "https://cawvsutygkrgligfpfcu.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhd3ZzdXR5Z2tyZ2xpZ2ZwZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0OTg0MjcsImV4cCI6MjAyMTA3NDQyN30.LH5REvDnZb3qR4G5gKvy3tVhEn4uGOfCRb1cbOKvnTw",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhd3ZzdXR5Z2tyZ2xpZ2ZwZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0OTg0MjcsImV4cCI6MjAyMTA3NDQyN30.LH5REvDnZb3qR4G5gKvy3tVhEn4uGOfCRb1cbOKvnTw",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}
