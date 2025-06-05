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
        <p> Lenguajes de programación: Python, Java</p>
        <p> Desarrollo web: HTML, CSS, JavaScript</p>
        <p>Bases de datos: MySQL, SQLite</p>
        <p>Herramientas: Git, VS Code</p>
      </div>

      <div classname="Idiomas">
      <p> Español — Nativo</p>
      <p>Inglés — Intermedio</p>
      </div>
      
      <div className="Datos de interes">
      <p>Disponibilidad para prácticas o proyectos escolares</p>
      <p>Facilidad de trabajo en equipo</p>
      <p>Interés en ciberseguridad, desarrollo web y automatización</p>
      </div>
    </div>  
  );
};

export default App;
