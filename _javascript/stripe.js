import createPayment from "./stripe/payment";

(function() {
  const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY, {
    stripeAccount: process.env.STRIPE_CONNECT_ACCOUNT
  });

  const successUrl = `${window.app.url}/${window.app.lang}/support.html#success`;
  const cancelUrl = `${window.app.url}/${window.app.lang}/support.html#cancel`;

  if (window.location.hash === "#success") {
    document.getElementById("donation-result-success").style.display = "";
    document.getElementById("donation-result-success").scrollIntoView();
  } else if (window.location.hash === "#cancel") {
    document.getElementById("donation-result-cancel").style.display = "";
    document.getElementById("donation-result-cancel").scrollIntoView();
  }

  document.querySelectorAll(".donation-btn").forEach(element => {
    const plan = element.dataset.planId;
    const sku = element.dataset.skuId;

    const items = [];
    // Single donation
    if (typeof sku !== "undefined") {
      items.push({ sku, quantity: 1 });
    }
    // Recurring donation
    else if (typeof plan !== "undefined") {
      items.push({ plan, quantity: 1 });
    }

    element.addEventListener("click", () => {
      if (items.length === 0) {
        console.error("Invalid donation button: please provide plan or sku id");
      } else {
        stripe
          .redirectToCheckout({
            items,
            successUrl,
            cancelUrl
          })
          .then(result => {
            if (result.error) {
              const { message } = result.error;

              document.getElementById("error-message").innerText = message;
              document.getElementById("donation-result-error").style.display =
                "";
              document.getElementById("donation-result-error").scrollIntoView();
            }
          });
      }
    });
  });

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

      createPayment(amount);
    });
})();
