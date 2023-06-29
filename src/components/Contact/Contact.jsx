import './Contact.scss';


function Contact() {

    return (
        <>
       <article className='contact'>
            <h1 className='contact__header'>Lets get in touch!</h1>
            <form className='contact__forms' action="">
                <div className='contact__form'>
                    <label className='contact__form__label' htmlFor="name">Name:</label>
                    <input className='contact__form__input' type="text" />
                </div>
                <div className='contact__form'>
                    <label className='contact__form__label' htmlFor="">Email:</label>
                    <input className='contact__form__input' type="text" />
                </div>
                <div className='contact__form'>
                    <label className='contact__form__label' htmlFor="">Message:</label>
                    <textarea className='contact__form__textarea' name="" id="" rows="10"></textarea>
                </div>
                <button className='contact__form__button'>send</button>
            </form>
        </article>
        </>
    );
}

export default Contact;