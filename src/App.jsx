import { useState } from 'react'
import emailjs from 'emailjs-com'
import './main.scss'

function App() {
  const [popup, setPopup] = useState(false)

  const sendFeedback = async (ev) => {
    ev.preventDefault()
    emailjs.sendForm('service_41o87fd', 'template_p5h4jyh', ev.target, 'LbDf2ADGOV1EnEJzx')
      .then(() => setPopup(true)
        , (err) => {
          console.log('FAILED...', err)
        })
  }

  return (
    <div className="main">
      <div className='center'>
        <form onSubmit={sendFeedback}>
          <select name='game' required>
            <option>captain coin</option>
            <option>marble game</option>
          </select>
          <textarea name="message" placeholder="hhh" />
          <button className='contact-button'> send mail</button>
        </form>
        <div>
          <p>For more urgent problems, you can use our live chat</p>
          <button className='contact-button' onClick={() => window.gist.chat('open')}>open gist</button>
        </div>
      </div>

      {popup && <div className='popup'>

      </div>}


    </div>
  )
}

export default App