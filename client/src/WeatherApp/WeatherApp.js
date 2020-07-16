import React from 'react';
import WeatherDataCards from './Components/WeatherDataCards/WeatherDataCards';
import './WeatherApp.css';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {},
            stage: 0
        };
    }

    getWeather = async (city) => {

        const base = "https://abracadabrant-choucroute-66376.herokuapp.com/weather?city=" + city;
        const response = await fetch(base);
        const data = await response.json();
        return data;
    }

    callAPI() {
        this.setState({stage: 1 });
        this.getWeather(document.getElementById('cityInput').value).then((data) => {
            this.setState({ weatherData: data, stage: 2 });
        })
        .catch( err => {
            this.setState({ stage: -1 });
        });
    }

    
    render() {
        let body = null;
        if (this.state.stage === 0) {
            body = (
                <div className="msg">Type in the city name.</div>
            )
        }
        else if(this.state.stage === 1){
            body = (
                <div className="loading">
                    Loading....
                </div>
            )
        }
        else if(this.state.stage === 2){
            if (!this.state.weatherData.err) {
                body = (
                    <WeatherDataCards data = {this.state.weatherData.data}/>
                );
            }
        }
        else{
            body = (
                <div className = "err-msg">
                    Server Error!
                </div>
            )
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