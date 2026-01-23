document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".role-selector button");
  const sections = document.querySelectorAll("section[data-role]");
  const cvLink = document.getElementById("cvDownload");

  const cvFiles = {
    general: "Aymen_Khazri_CV_General.pdf",
    business: "Aymen_Khazri_CV_Business.pdf",
    data: "Aymen_Khazri_CV_Data.pdf"
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const role = button.dataset.role;

      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      sections.forEach(section => {
        section.style.display =
          section.dataset.role === role ? "block" : "none";
      });

      cvLink.href = "./" + cvFiles[role];
    });
  });
});
