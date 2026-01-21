document.getElementById("cvType").addEventListener("change", e => {
  const type = e.target.value;

  document.body.classList.remove("data-cv", "business-cv");

  if (type === "data") {
    document.body.classList.add("data-cv");
  }

  if (type === "business") {
    document.body.classList.add("business-cv");
  }
});
