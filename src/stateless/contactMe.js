import React, {Component} from 'react';
import '../App.css';


class Contact extends Component {
    render() {
        return(
            <footer className="">
                <div>

                </div>

                <div className="contact-me col">
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
                </div>

            </footer>
        )
    }
}
export default Contact