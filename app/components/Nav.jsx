import React from 'react'
import {Link, IndexLink} from 'react-router'


const Nav = () => {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'green'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'green'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'green'}}>Examples</Link>
      </div>
    );
  }

module.exports = Nav;
