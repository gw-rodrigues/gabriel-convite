import { atcb_action, atcb_init } from "add-to-calendar-button";
import { useEffect, useState } from "react";
import { FiPhone, FiCalendar, FiMapPin } from "react-icons/fi";

import "add-to-calendar-button/assets/css/atcb.min.css";
import "animate.css";
import "./App.scss";
import { func } from "prop-types";

function App() {
  const [openInvite, setOpenInvite] = useState(false);

  function handleOpenEnvelope() {
    setTimeout(() => {
      document.getElementById("envelope-bg")?.classList.add("leave-bg");
      setTimeout(() => {
        document.getElementById("envelope")?.classList.remove("leave");
        document.getElementById("envelope-bg")?.classList.remove("leave-bg");
        setOpenInvite(true);
      }, 500);
    }, 1500);
    document.getElementById("envelope")?.classList.add("leave");
  }
  useEffect(() => {
    if (openInvite) {
      atcb_init();
    }
  }, [openInvite]);

  return !openInvite ? (
    <main id="envelope-bg" className="container-intro">
      <img className="fundo" src="/fundo.png" alt="fundo" />
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
        <h1>Aniversário do Endry</h1>
        <div className="aside-content">
          <h2 className="confirm">Confirme sua presença</h2>
          <div className="details">
            <FiPhone />
            <div>
              <p>
                (+351) 960 057 264 - Chamada ou WhatsApp.
                <br />
                Prazo para confirmações até <strong>10.07.2022</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="aside-content">
          <h2>Adicionar ao calendário</h2>
          <div className="details">
            <FiCalendar />
            <div>
              <p>Dia 17.07.2022, a partir de 14:00 horas.</p>
              <div className="atcb">
                {"{"}
                "name":"ANIVERSÁRIO DO ENDRY", "description":"Estou muito
                ansioso por contar contigo no meu aniversário. A sua presença é
                suficiente para mim, mas caso queria me dar um presente este
                pode ser em dinheiro. Convite:→
                [url]https://github.com/jekuer/add-to-calendar-button[/url]",
                "startDate":"2022-07-17T14:00", "endDate":"2022-07-17T18:00",
                "location":"Quinta Pedagógica Inclusiva - CASCI, R. do Casci
                nº36B, 3830-355, Portugal", "label":"Adicionar ao calendário",
                "options":[ "Apple", "Google", "Outlook.com" ],
                "timeZone":"Europe/Berlin", "inline":true, "trigger":"click"
                {"}"}
              </div>
            </div>
          </div>
        </div>
        <div className="aside-content">
          <h2>ver local do evento</h2>
          <div className="details">
            <FiMapPin />
            <div>
              <h3>Quinta Pedagógica Inclusiva - CASCI</h3>
              <p>R. do Casci nº36B, 3830-355, Portugal.</p>
              <a target="_blank" href="https://goo.gl/maps/imhRaW48FJaqLUbg7">
                Ver no mapa do google
              </a>
            </div>
          </div>
        </div>
      </aside>
      {/* <section className="map">
        <<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.421994773179!2d-8.703594984522212!3d40.62057467934199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23bdf919ca9fa7%3A0x48fc62a532512393!2sQuinta%20Pedag%C3%B3gica%20Inclusiva%20-%20CASCI!5e0!3m2!1spt-PT!2sde!4v1655399071998!5m2!1spt-PT!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> */}
    </main>
  );
}

export default App;
