document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("serviceSelector");
  const priceField = document.getElementById("priceOutput");

  const prices = {
    "Website Design": 200,
    "Landing Page": 100,
    "Form Integration": 50,
    "Website Redesign": 150
  };

  selector.addEventListener("change", () => {
    const selected = selector.value;
    priceField.value = selected ? `$${prices[selected]}` : "";
  });
});
