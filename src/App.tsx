import { atcb_action, atcb_init } from 'add-to-calendar-button'
import { useEffect, useState } from 'react'
import { FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi'

import 'add-to-calendar-button/assets/css/atcb.min.css'
import 'animate.css'
import './App.scss'
import { func } from 'prop-types'

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
        <h1>Batizado do Lucas</h1>
        <div className="aside-content">
          <h2 className="confirm">Meu Aniversário</h2>
          <div className="details">
            <div>
              <p>
                Após o Batismo, vamos comemorar o meu um aninho na casa da minha
                vovó Beta.
              </p>
              <p>Conto com a sua presença.</p>
            </div>
          </div>
        </div>

        <div className="aside-content">
          <h2>Adicionar ao calendário</h2>
          <div className="details">
            <FiCalendar />
            <div>
              <p>Dia 29.01.2023, a partir de 08:00 horas.</p>
              <div className="atcb">
                {'{'}
                "name":"BATIZADO DO LUCAS", "description":"Chegou o dia do meu
                batizado e papai do céu vai me abençoar. Espero voces ness dia
                especial. Convite:→
                [url]https://lucas-convite.vercel.app/[/url]",
                "startDate":"2023-01-29T08:00", "endDate":"2023-01-29T18:00",
                "location":"R. Davi Mussi, 35 - Novo Cruzeiro, MG, 39820-000,
                Brasil", "label":"Adicionar ao calendário", "options":[ "Apple",
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
              <h3>Igreja Matriz de Novo Cruzeiro</h3>
              <br />
              <a target="_blank" href="https://goo.gl/maps/XzijNdn72hTboyW68">
                Ver no mapa do google
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* <section className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63607526.30450975!2d-55.750230280919084!3d13.331897585614913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb3212bcee9c047%3A0xb6d0d580599b6df7!2sIgreja%20Matriz%20Par%C3%B3quia%20de%20S%C3%A3o%20Bento!5e0!3m2!1spt-BR!2sde!4v1673810972792!5m2!1spt-BR!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> */}
    </main>
  )
}

export default App
