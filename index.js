const init = () => {
  const wrapper = document.querySelector(".wrapper");
  const filter = document.querySelector(".filter");
  const span = document.querySelectorAll(".wrapper span");
  const img = document.querySelector(".img-container img");

  wrapper.addEventListener("mousedown", () => {
    !filter.classList.contains("show")
      ? wrapper.querySelector("i").classList.replace("fa-eye-slash", "fa-eye")
      : wrapper.querySelector("i").classList.replace("fa-eye", "fa-eye-slash");

    setTimeout(
      () => {
        filter.classList.toggle("show");
        img.setAttribute(
          "src",
          !filter.classList.contains("show")
            ? "./images/avatar.png"
            : "./images/me.jpg"
        );
      },
      !filter.classList.contains("show") ? 0 : 3100
    );

    span.forEach((el) => {
      if (el.classList.contains("animate")) {
        el.classList.toggle("animateReverse");
        el.classList.toggle("animate");
      } else {
        el.classList.remove("animateReverse");
        el.classList.toggle("animate");
      }
    });
  });

  span.forEach((el) => {
    el.addEventListener("mousedown", (e) => {
        e.stopPropagation();
    });
  });
};
