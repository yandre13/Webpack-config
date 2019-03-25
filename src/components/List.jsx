import React from 'react';

export default ({name, list})=>(
 <div className="container center row">
  <h2 className="col s12 blue-text">{name}</h2>
  <br/>
  <div className="col s12 flex-elsf">
   {list.map(el=>(
    <div key={el.src} className="card item">
    <div className="card-image">
      <img src={el.src}/>
    </div>
    <div className="card-content">
      <span className="card-title">{el.name}</span>
      <p>I am a very simple card. I am good at containing small bits of information.</p>
    </div>
  </div>
   ))} 
  </div>
</div>
)