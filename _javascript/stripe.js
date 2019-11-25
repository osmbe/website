import redirect from "./stripe/redirect";
import createSource from "./stripe/source";

(function() {
  if (window.location.hash === "#success") {
    document.getElementById("donation-result-success").style.display = "";
    document.getElementById("donation-result-success").scrollIntoView();
  } else if (window.location.hash === "#cancel") {
    document.getElementById("donation-result-cancel").style.display = "";
    document.getElementById("donation-result-cancel").scrollIntoView();
  }

  // Recurring donation
  document.querySelectorAll(".donation-btn[data-plan-id]").forEach(element => {
    element.addEventListener("click", event => {
      const plan = event.target.dataset.planId;

      redirect({
        plan,
        lang: window.app.lang || "en",
        url: window.app.url || "https://openstreetmap.be"
      });
    });
  });

  // Single donation Credit Card (predefined amount)
  document.querySelectorAll(".donation-btn[data-amount]").forEach(element => {
    element.addEventListener("click", event => {
      const amount = parseInt(event.target.dataset.amount);

      redirect({
        amount,
        lang: window.app.lang || "en",
        url: window.app.url || "https://openstreetmap.be"
      });
    });
  });

  // Single donation Credit Card (custom amount)
  ["change", "blur", "keyup"].forEach(type => {
    document.getElementById("donation-amount").addEventListener(type, event => {
      const amount = parseInt(event.target.value);

      if (amount > 0) {
        document.getElementById("donation-submit").removeAttribute("disabled");
      } else {
        document.getElementById("donation-submit").setAttribute("disabled", "");
      }
    });
  });

  document
    .getElementById("donation-submit")
    .addEventListener("click", event => {
      const amount = parseInt(document.getElementById("donation-amount").value);

      event.preventDefault();

      redirect({
        amount,
        lang: window.app.lang || "en",
        url: window.app.url || "https://openstreetmap.be"
      });
    });

  // Single donation Bancontact (custom amount)
  ["change", "blur", "keyup"].forEach(type => {
    document
      .getElementById("donation-amount-bancontact")
      .addEventListener(type, event => {
        const amount = parseInt(event.target.value);

        if (amount > 0) {
          document
            .getElementById("donation-submit-bancontact")
            .removeAttribute("disabled");
        } else {
          document
            .getElementById("donation-submit-bancontact")
            .setAttribute("disabled", "");
        }
      });
  });

  document
    .getElementById("form-bancontact")
    .addEventListener("submit", event => {
      const name = document.getElementById("donation-name-bancontact").value;
      const email = document.getElementById("donation-email-bancontact").value;
      const amount = parseInt(
        document.getElementById("donation-amount-bancontact").value
      );

      event.preventDefault();

      document
        .querySelectorAll("#donation-result > div")
        .forEach(element => (element.style.display = "none"));

      document.querySelector(".overlay").style.display = "";

      createSource(
        name,
        email,
        amount,
        window.app.url || "https://openstreetmap.be",
        window.app.lang || "en"
      ).then(source => {
        document.location.href = source.redirect.url;
      });
    });
})();
