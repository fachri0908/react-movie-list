const Modal = (props) => {
    return (
        <div className="modal" data-testid="modal">
            <div className="modal-content">
                <div className="modal-close-button" onClick={() => props.onClosePosterModal()}>&times;</div>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
