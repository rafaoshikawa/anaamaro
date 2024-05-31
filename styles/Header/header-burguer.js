export default function headerBurguer() {
  const button = document.querySelector('[data-burguer="button"]');
  const menu = document.querySelector('[data-burguer="list"]');
  const menuItems = menu.querySelectorAll("li");

  function buttonAriaExpanded() {
    button.classList.contains("active")
      ? (button.ariaExpanded = "true")
      : (button.ariaExpanded = "false");
  }

  button.addEventListener("click", activateBurguerMenu);

  function activateBurguerMenu() {
    button.classList.toggle("active");
    menu.classList.toggle("active");
    buttonAriaExpanded();
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", handleItemClick);
  });

  function handleItemClick() {
    button.classList.remove("active");
    menu.classList.remove("active");
    buttonAriaExpanded();
  }
}
