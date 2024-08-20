let btnAlterarCor = document.getElementById("btn-alterar-cor");
// console.log(btnColorido);

btnAlterarCor.addEventListener("click", function () {
  btnAlterarCor.classList.contains("azul")
    ? btnAlterarCor.classList.remove("azul")
    : btnAlterarCor.classList.add("azul");
});
