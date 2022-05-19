

function Modal({ closeModal, videoLink }) {
    

    return (
        <div>
            <div id="modal-container" onClick={() => closeModal(false)}>
                <div class="modal-background">
                    {/* <div class="modal"> */}
                    <iframe width="100%" height="100%" src={videoLink} title="YouTube video player" frameborder="2" allow="" allowfullscreen></iframe>
                    {/* <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                        </svg> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal;
