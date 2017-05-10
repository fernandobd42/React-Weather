import React from 'react'

const About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather application built on React.</p>
        <p>Here are some of the tools i used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - 
            This was a javascript framework used to build the front-end.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - 
            This was a open weather map used to get the weather forecast by city name.
          </li>
        </ul>
      </div>
    );
  }

module.exports = About
