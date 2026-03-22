import React from 'react'
import './Styles/Companies.css'

const Companies= () => {
  return (
    <div className='company-con'>
      <div className='company-hold'>
<div className='text-con'>
    <h1>The world's top companies <br /> trust Asana</h1>
    <button>see all case studies</button>
</div>
<div className='comp-hero'>
    <div className='hero-right'>

<div className='comp-img'><img src="https://assets.asana.biz/m/37f23cc2d55080f/original/Danone_40px_quote.svg" alt="" />
</div>
<hr />
<div>
<h6>COMPANY SIZE</h6>
<h4>Enterprise</h4>
</div>
<div>
  <h6>INDUSTRY</h6> 
  <h4>Food & hospitality</h4> 
</div>
    </div>
    <div className='hero-left'>
<div className='company-text'>
    <h3>"Asana makes everything shareable, which saves us time executing programs because it's so much easier to replicate and learn from what others have done.</h3>
<div><h5>Simon Levinson</h5>
<h5>Global Digital Manufacturing Process Innovation Manager, Danone</h5></div>
</div>
<div className='comp-btn'><button>Read case study</button></div>
    </div>
</div>
      </div>
    </div>
  )
}


export default Companies
