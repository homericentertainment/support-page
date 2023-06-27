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

  return (<>
    <div className='header'>Support</div>

    <div className='center'>
      <form onSubmit={sendFeedback}>
        <p>Choose a game :</p>
        <select name='game' required>
          <option>Captain coin</option>
          <option>Marble game</option>
        </select>
        <p>Please describe the issue :</p>
        <textarea name="message" placeholder="I have a problem with..." required/>
        <button className='contact-button'>send mail</button>
      </form>
      <div>
        <div className='gist-wrapper'>
          <p>For more urgent problems, you can use our live chat :</p>
          <button className='contact-button' onClick={() => window.gist.chat('open')}>Live chat</button>
        </div>

      </div>
    </div>
    {popup && <> <div className='dark'/>
    <div className='popup'>
      <p>Thank you! We appreciate your feedback and do our best to improve.</p>
      <button className='contact-button' onClick={()=>setPopup(false)}>Done</button>
    </div>
    </> }

    <div className='footer'>
      ®2023 Homeric entertainment
    </div>
  </>)
}

export default App