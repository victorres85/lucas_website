

function Modal({ closeModal, videoLink }) {
    

    return (
        <div>
            <div id="modal-container" onClick={() => closeModal(false)}>
                <div class="modal-background">
                    <iframe width="100%" height="100%" id='iframe' src={videoLink} title="video player" frameborder="2" allow="" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Modal;
