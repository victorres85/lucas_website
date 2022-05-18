function Contato() {
    return (
        <section id="contact">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading">
                        <p className="title text-left">
                            Interessado no meu trabalho?
                            <br></br>
                            Me passe uma mensagem e conversamos:
                        </p>
                    </div>

                </div>
                <form id="contact-form" action="#" className="table">
                    <input className='input_espace row' placeholder="Name" name="name" type="text" required />
                    <input className='input_espace row' placeholder="Email" name="email" type="email" required />
                    <textarea id="text_area" className='row' cols="50" placeholder="Message" type="text" name="message" />
                    <button type="button" class="btn btn-outline-warning button_submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}
export default Contato