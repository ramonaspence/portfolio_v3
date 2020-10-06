import React, {Component} from 'react';
import '../App.css';


class Nav extends Component {
    render() {
        return(
            <nav className="col-12 navbar">
                <div className="nav-icons">
                    <a href="https://github.com/ramonaspence" alt="" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ramona-spence-she-her-ba606a18a/" alt="" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i> 
                    </a>

                    <a href="https://twitter.com/RamonaSpence16" alt="" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>

                </div>

                <div className="nav-text">
                    <span>Ramona E.J. Spence</span>
                    <span>ramonaejspence@gmail.com</span>
                </div>
                
            </nav>
        )
    }
}
export default Nav