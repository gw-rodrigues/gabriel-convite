import { atcb_init } from 'add-to-calendar-button'
import { useEffect, useState } from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

import 'add-to-calendar-button/assets/css/atcb.min.css'
import 'animate.css'
import './App.scss'

function App() {
  const [openInvite, setOpenInvite] = useState(false)

  function handleOpenEnvelope() {
    setTimeout(() => {
      document.getElementById('envelope-bg')?.classList.add('leave-bg')
      setTimeout(() => {
        document.getElementById('envelope')?.classList.remove('leave')
        document.getElementById('envelope-bg')?.classList.remove('leave-bg')
        setOpenInvite(true)
      }, 500)
    }, 1500)
    document.getElementById('envelope')?.classList.add('leave')
  }
  useEffect(() => {
    if (openInvite) {
      atcb_init()
    }
  }, [openInvite])

  return !openInvite ? (
    <main id="envelope-bg" className="container-intro">
      <div id="envelope">
        <button onClick={handleOpenEnvelope} type="button" className="envelope">
          <img src="/envelope.jpeg" alt="envelope" />
          <p className="desc">Click para abrir o convite!</p>
        </button>
      </div>
    </main>
  ) : (
    <main className="container">
      <article>
        <img src="/invite.jpeg" alt="invite" />
      </article>
      <aside>
        <h1>Convite do Gabriel</h1>
        <div className="aside-content">
          <h2 className="confirm">Batizado & Aniversário</h2>
          <div className="details">
            <div>
              <h3>Eliene e Erivelton</h3>
              <p>
                Tem o prazer de convidar para o Batizado e aniversário de 2 anos
                do Gabriel.
              </p>
              <p>Ficaremos muitos felizes com sua presença.</p>
              <br />
              <small>
                *Pedimos que cada pessoa leva a sua bebida - refri, sucos,
                cerveja ou o que desejar .
              </small>
            </div>
          </div>
        </div>

        <div className="aside-content">
          <h2>Adicionar ao calendário</h2>
          <div className="details">
            <FiCalendar />
            <div>
              <p>Dia 23.07.2023, Batizado 9:00 hrs, Aniversário 12:00 hrs.</p>
              <div className="atcb">
                {'{'}
                "name":"Batizado & Aniversário Gabriel", "description":"Tem o
                prazer de convidar para o Batizado e aniversário de 2 anos do
                Gabriel. Convite:→
                [url]https://gabriel-convite.vercel.app/[/url]",
                "startDate":"2023-07-23T09:00", "endDate":"2023-07-23T18:00",
                "location":"Igreja Matriz do Imaculado Coração de Maria, R.
                Antônio Bacchi, 1065 - Paulicéia, Piracicaba - SP, 13424-070",
                "label":"Adicionar ao calendário", "options":[ "Apple",
                "Google", "Outlook.com" ], "timeZone":"Europe/Berlin",
                "inline":true, "trigger":"click"
                {'}'}
              </div>
            </div>
          </div>
        </div>
        <div className="aside-content">
          <h2>ver local do evento</h2>
          <div className="details">
            <FiMapPin />
            <div>
              <h3>Igreja Matriz do Imaculado Coração de Maria</h3>
              <br />
              <a target="_blank" href="https://goo.gl/maps/SYYPQjMyrtf8raF76">
                Ver no mapa do google
              </a>
            </div>
          </div>
          <div className="details">
            <FiMapPin />
            <div>
              <h3>Edicula R & A</h3>
              <br />
              <a target="_blank" href="https://goo.gl/maps/3PyHYZb9hwcaVH2m8">
                Ver no mapa do google
              </a>
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}

export default App
