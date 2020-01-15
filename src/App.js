import React from 'react';
import './Global.css';

import './App.css';
import './Sidebar.css';


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
      <main></main>
    </div>
  );
}

export default App;
