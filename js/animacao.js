document.querySelector(".abrir-menu").onclick = () => {
    document.documentElement.classList.add("menu-ativo");
  }
  
  document.querySelector(".fechar-menu").onclick = () => {
    document.documentElement.classList.remove("menu-ativo");
  }
