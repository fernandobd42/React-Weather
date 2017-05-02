import React from 'react'

const WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <div>
        <h3>It's it {temp} in {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
