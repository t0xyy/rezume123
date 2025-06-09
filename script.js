const qualities = [
    { name: "Скромный", rating: 4 },
    { name: "Целеустремлённый", rating: 5 },
    { name: "Талантливый", rating: 4 }
  ];

  const container = document.getElementById("qualities");

  qualities.forEach((q, index) => {
    const wrapper = document.createElement("div");

    const label = document.createElement("span");
    label.textContent = q.name + ": ";
    wrapper.appendChild(label);

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.textContent = i <= q.rating ? "★" : "☆";
      star.style.cursor = "pointer";
      star.style.fontSize = "22px";
      star.style.marginRight = "4px";
      star.dataset.quality = index;
      star.dataset.value = i;

      star.addEventListener("click", function () {
        qualities[index].rating = i;
        updateStars();
      });

      wrapper.appendChild(star);
    }

    container.appendChild(wrapper);
  });

  function updateStars() {
    const stars = container.querySelectorAll("span[data-value]");
    stars.forEach(star => {
      const index = star.dataset.quality;
      const value = star.dataset.value;
      star.textContent = value <= qualities[index].rating ? "★" : "☆";
    });
  }
