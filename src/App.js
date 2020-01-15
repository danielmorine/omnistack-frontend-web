import React from 'react';
import './Global.css';

import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
              <label htmlFor="Nome">Usuário GitHub</label>
              <input name="gitHubUser" id="gitHubUser"/>
          </div>
          <div className="input-block">
              <label htmlFor="technology">Tecnologias</label>
              <input name="technology" id="technology"/>
          </div>
          <div className="input-group">
            <div className="input-block">
                <label htmlFor="Nome">Latitude</label>
                <input name="gitHubUser" id="gitHubUser"/>
            </div>
            <div className="input-block">
                <label htmlFor="Nome">Longitude</label>
                <input name="gitHubUser" id="gitHubUser"/>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src={`https://avatars3.githubusercontent.com/u/30440137?s=460&v=4`} alt="img from github"/>
              <div className="user-info">
                <strong>Daniel Haro</strong>
                <spa>C#, ReactJS</spa>
              </div>
            </header>
            <p>Desenvolver FullStack</p>
            <a href="/">Acessar perfil no GitHub</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
