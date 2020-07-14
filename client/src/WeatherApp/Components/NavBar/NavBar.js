import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {


    render() {

        return (
            <div className = "navbar">
                <ul>
                    <li><b>WEATHER MAN</b></li>
                    <li><a href = "/"><button>Home</button></a></li>
                    <li><a href = "https://github.com/nvkex/weatherman-react/"><button>Github</button></a></li>
                </ul>
            </div>
        );
    }

}

export default NavBar;