const ruleButton = document.getElementById("ruleButton");
const ruleBox = document.querySelector(".rule_envelop");
const closeButton = document.querySelector(".rule_close");

let isRuleBox = true;
if (isRuleBox) {
  ruleWrapper.style.display = "none";
}
ruleButton.addEventListener("click", () => {
  if (isRuleBox) {
    ruleWrapper.style.display = "flex";
    isRuleBox = true;
  }
});
closeButton.addEventListener("click", () => {
  ruleWrapper.style.display = "none";
  isRuleBox = true;
});