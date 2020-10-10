import React, {Component} from 'react';
import '../App.css';


class Contact extends Component {
    render() {
        return(
            <section className="contact-me col">
                <form className="contact-form">
                    <label htmlFor="name">
                        Your Name:
                    <input type="text" name="name" />
                    </label>

                    <label htmlFor="email">
                        Email: 
                        <input type="email" name="email" />
                    </label>

                    <label htmlFor="message">
                        Message:
                        <textarea type="input" name="message" />
                    </label>

                </form>
            </section>
        )
    }
}
export default Contact