import './form1.css'

function Form() {

    return (
        <>
            <div className="contact-container">
                <div className="contact">
                    <h1>Contact Us</h1>
                    <p>Want to check if our tablets works? Book an appointment now and get a free live trial</p>
                </div>
                <form>
                    <div className="form-group">
                        <label>Name (required)</label>
                        <div className="name-group">
                            <input type="text" id="firstName" placeholder="First Name" required />
                            <input type="text" id="lastName" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Email (required)</label>
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div classNameName="form-group">
                        <label for="message">Adress (required)</label>
                        <textarea id="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>

        </>)

}

export default Form;