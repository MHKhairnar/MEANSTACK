let pbc = document.querySelector("#parentBlockContainer");
console.log(pbc);

window.addEventListener("load", () => {
  console.log("i am the call once the page load");

  let pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);

  for (i = 0; i < 20; i++) {
    const newelement = pbc.children[0].cloneNode(true);

    newelement.style.display = "flex";
    pbc.insertBefore(newelement, pbc.firstChild);
  }
});
