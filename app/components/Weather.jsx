import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'

const Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather
