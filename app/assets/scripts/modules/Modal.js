import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton =$(".open-modal");
        this.modal=$(".modal");
        this.closeModalButton=$(".modal__close");
        this.event();


    }

    event(){
        //En cliquant le bouton open modal ouvre l'overlay
        this.openModalButton.click(this.openModal.bind(this));
        //En cliquant la croix cela ferme l'overlay
        this.closeModalButton.click(this.closeModal.bind(this));
        //En appuyant sur echap on ferme l'overlay
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if (e.keyCode==27){
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;

    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");

    }

}

export default Modal;
