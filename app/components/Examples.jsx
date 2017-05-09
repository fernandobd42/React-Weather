import React from 'react'
import {Link} from 'react-router'

const Examples = (props) => {
    return (
      <div>
        <h3 className="text-center">Examples</h3>
        <p>Here are a few exemple location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Bom-Despacho'>Bom Despacho - Brasil</Link>            
          </li>
          <li>
            <Link to='/?location=Dois-Vizinhos'>Dois Vizinhos - Brasil</Link>            
          </li>
          <li>
            <Link to='/?location=Perth'>Perth - Austrália</Link>            
          </li>
          <li>
            <Link to='/?location=Quebec'>Quebec - Canadá</Link>            
          </li>
        </ol>
      </div>
    );
  }

module.exports = Examples
