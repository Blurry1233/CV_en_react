import React from 'react';
import './App.css'; 

function App () {
  return (
    <div className='contenedor'>
      <div className="encabezado">
        <h1 className="centrado">Daniel Ruiz Guzman</h1>
        <h3 className="centrado">
        <a href="https://github.com/Blurry1233">GitHub</a>
        </h3>
        <h3 className="centrado">druiz063@gmail.com | 9932276380</h3>
      </div>

      <div className="educacion">
        <h3>Educación</h3>
        <div class="divider"></div>

        <br></br>
        <p className="enlinea">Universidad: Juarez Autonoma de Tabasco</p>
        <p className="enlinea derecha">México, Tabasco</p>
        <br></br>
        <br></br>
        <p className="enlinea">Ingeniero en sistemas computacionales</p>
      
        <p className="enlinea derecha">Mayo 2025</p>
        

      </div>

      <div className="Habilidades Tecnicas">
        <h3 className='centrado'>Habilidades Tecnicas</h3>
        <br></br>
        <p className="centrado"> Lenguajes de programación: Python, Java</p>
        <br></br>
        <p className="centrado"> Desarrollo web: HTML, CSS, JavaScript</p>
        <p className="centrado">Bases de datos: MySQL, SQLite</p>
        <br></br>
        <p className="centrado">Herramientas: Git, VS Code</p>
        <br></br>
      </div>

      <div classname="Idiomas">
        <br></br>
        <p className="centrado">Idiomas</p>
      <br></br>
      <p className="centrado"> Español — Nativo</p>
      <br></br>
      <p className="centrado">Inglés — Intermedio</p>
      <br></br>
      </div>
      
      <div className="Datos de interes">
        <br></br>
        <p className="centrado">DATOS DE INTERES</p>
      <br></br>
      <p className="centrado">Disponibilidad para prácticas o proyectos escolares</p>
      <br></br>
      <p className="centrado">Facilidad de trabajo en equipo</p>
      <br></br>
      <p className="centrado">Interés en ciberseguridad, desarrollo web y automatización</p>
      <br></br>
      </div>
    </div>  
  );
};

export default App;
