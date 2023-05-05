(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      modalBlock: document.querySelector('.madal-block')
    };
    document.addEventListener('keydown', keyDown);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
    
    function keyDown(event) {
      if (event.code === 'Escape' ) {
        document.removeEventListener('keydown', keyDown);
        toggleModal();
      }
    }
    function open() {
      document.addEventListener('keydown', keyDown);
      toggleModal()
    }
    
    refs.openModalBtn.addEventListener("click", open);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modalBlock.addEventListener("click", function(event) {
      if (!event.target.closest('.madal-container')) {
        toggleModal();
      }
    });
  })();