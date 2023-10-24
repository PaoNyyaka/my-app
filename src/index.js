import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

const inputClick = () => console.log('Click')
const helpText = 'Help Text'

const elements = (<div className='name'>
  <h1>{helpText}</h1>
  <input placeholder={helpText}
  onClick={inputClick} />
  <p>{helpText === 'Help Text!сдуcle' ? 'Yes' : 'No'}</p>
</div>)


const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(elements)