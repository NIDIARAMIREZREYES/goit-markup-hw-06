(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", handleClickOutside);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
    refs.modal.classList.toggle("is-hidden");
  }

  function handleClickOutside(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }
})();