import React, {Component} from 'react';
import '../App.css';


class Nav extends Component {
    render() {
        return(
            <nav className="col-12 navbar">
                <div className="nav-icons">
                    <a href="https://github.com/ramonaspence" alt="" ><i class="fab fa-github"></i></a>

                    <a href="https://www.linkedin.com/in/ramona-spence-she-her-ba606a18a/" alt=""><i class="fab fa-linkedin-in"></i> </a>

                </div>
            </nav>
        )
    }
}
export default Nav