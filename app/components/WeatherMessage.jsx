import React from 'react'

const WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h3>It's it {temp} in {location}</h3>
      </div>
    );
  }

module.exports = WeatherMessage;
