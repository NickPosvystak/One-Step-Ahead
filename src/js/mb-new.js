(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-opennew]"),
    closeModalBtn: document.querySelector("[data-modal-closenew]"),
    modal: document.querySelector("[data-modalnew]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hiddennew");
  }
})();
