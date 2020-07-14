import React from 'react';
import WeatherDataCards from './Components/WeatherDataCards/WeatherDataCards';
import './WeatherApp.css';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {},
            empty: true
        };
    }

    getWeather = async (city) => {

        const base = "https://abracadabrant-choucroute-66376.herokuapp.com/weather?city=" + city;
        const response = await fetch(base);
        const data = await response.json();
        return data;
    }

    callAPI() {
        this.getWeather(document.getElementById('cityInput').value).then((data) => {
            this.setState({ weatherData: data, empty: false });
        })
        .catch( err => {
            this.setState({ empty: true });
        });
    }

    
    render() {
        let body = null;
        if (!this.state.empty) {
            if (!this.state.weatherData.err) {
                body = (
                    <div>Fetching.....</div>
                )
                body = (
                    <WeatherDataCards data = {this.state.weatherData.data}/>
                );
            }
            else{
                body = (
                    <div className = "err-msg">
                        Error: Cannot connect to the server!
                    </div>
                )
            }
        }

        return (
            <div>
                <div className="header">
                    <input type="text" className="search-box" id="cityInput" placeholder = "Enter city"></input>
                    &nbsp;<button onClick = {() => this.callAPI()}>Search</button>
                </div>
                {body}
            </div>
        );
    }

}

export default WeatherApp;