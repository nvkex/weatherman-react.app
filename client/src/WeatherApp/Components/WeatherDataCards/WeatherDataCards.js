import React from 'react';
import './WeatherDataCards.css';

class WeatherDataCards extends React.Component {

    render() {

        return (
            <div className="data-box">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h2>Temperature</h2>
                            <p>{this.props.data.temp} °C</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Weather Conditions</h2>
                            <p>{this.props.data.weather.description}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Pressure</h2>
                            <p>{this.props.data.pres}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>UV</h2>
                            <p>{this.props.data.uv}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h2>Wind Direction</h2>
                            <p>{this.props.data.wind_cdir}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Wind Speed</h2>
                            <p>{this.props.data.wind_spd} m/s</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Precipitation</h2>
                            <p>{this.props.data.precip} mm/hr</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Visibility</h2>
                            <p>{this.props.data.vis} KM</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h2>Air Quality Index</h2>
                            <p>{this.props.data.aqi}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Relative Humidity</h2>
                            <p>{this.props.data.rh}%</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Sea Level Pressure</h2>
                            <p>{this.props.data.slp} mb</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h2>Cloud Coverage</h2>
                            <p>{this.props.data.clouds}%</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default WeatherDataCards;