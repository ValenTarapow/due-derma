import './App.css';

function App() {
  return (
    <>
      {/* Contenedor con snap SOLO para las secciones */}
      <div className="scroll-container">
        <section className="section section-1">
          <div className="section-content">
            <h1>Due Derma</h1>
            <p>Dermatología Clínica & Estética</p>
          </div>
        </section>
        
        <section className="section section-2">
          <div className="section-content">
            <h1>Quiénes Somos</h1>
            <p>
              Due Derma es un centro especializado en dermatología y estética médica,
              dedicado al bienestar integral de nuestros pacientes. Nos caracterizamos
              por brindar un enfoque personalizado y profesional, combinando la más alta
              calidad médica con la calidez humana que cada paciente merece.
            </p>
            <p>
              Nuestro compromiso es ofrecer tratamientos innovadores y seguros, utilizando
              tecnología de vanguardia en un ambiente cómodo y confiable. Creemos que el
              cuidado de la piel va más allá de la estética: es salud, bienestar y confianza.
            </p>
          </div>
        </section>

        <section className="section section-3">
          <div className="team-content">
            <div className="staff-section">
              <h2 className="section-title">Staff Médico</h2>
              <div className="doctors-grid">
                <div className="doctor-card">
                  <div className="doctor-image">
                    <div className="placeholder-image">Foto</div>
                  </div>
                  <div className="doctor-info">
                    <h3 className="doctor-title">Directora Médica</h3>
                    <h4 className="doctor-name">Dra. Daniela Maleh</h4>
                    <p className="doctor-specialty">Especialista en Dermatología</p>
                  </div>
                </div>
                
                <div className="doctor-card">
                  <div className="doctor-image">
                    <div className="placeholder-image">Foto</div>
                  </div>
                  <div className="doctor-info">
                    <h3 className="doctor-title">Coordinadora Médica</h3>
                    <h4 className="doctor-name">Dra. Agustina Fernández Capiet</h4>
                    <p className="doctor-specialty">Especialista en Dermatología</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-section">
              <h2 className="section-title">Equipo Médico</h2>
              <div className="doctors-grid">
                <div className="doctor-card">
                  <div className="doctor-image">
                    <div className="placeholder-image">Foto</div>
                  </div>
                  <div className="doctor-info">
                    <h4 className="doctor-name">Dra. Ludmila Rodríguez</h4>
                    <p className="doctor-specialty">Especialista en Dermatología</p>
                  </div>
                </div>
                
                <div className="doctor-card">
                  <div className="doctor-image">
                    <div className="placeholder-image">Foto</div>
                  </div>
                  <div className="doctor-info">
                    <h4 className="doctor-name">Dra. Malena Colasanti</h4>
                    <p className="doctor-specialty">Especialista en Dermatología</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-4">
          <div className="section-content">
            <h1>Compromiso con la Calidad</h1>
            <p>En Due Derma nos comprometemos a:</p>
            <ul className="commitment-list">
              <li>Brindar atención médica de excelencia</li>
              <li>Mantener los más altos estándares de bioseguridad</li>
              <li>Ofrecer tecnología actualizada</li>
              <li>Proporcionar un ambiente cálido y profesional</li>
              <li>Respetar la privacidad y confidencialidad de nuestros pacientes</li>
            </ul>
          </div>
        </section>
      </div>
      
      {/* Footer fuera del scroll snap */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Due Derma</h3>
            <p>Dermatología Clínica & Estética</p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>
                <a href="https://api.whatsapp.com/send?phone=5491131420521" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="whatsapp-link">
                  <i className="fab fa-whatsapp"></i> +54 11 3142-0521
                </a>
              </p>
              <p>
                <a href="mailto:duederma@duederma.com.ar" 
                   className="email-link">
                  <i className="fas fa-envelope"></i> duederma@duederma.com.ar
                </a>
              </p>
              <p><i className="fas fa-map-marker-alt"></i> Gallo 1671, 1° Piso, Recoleta, Buenos Aires</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            
            <div className="social-group">
              <h5 className="social-subtitle">Due Derma</h5>
              <div className="social-links">
                <a href="https://www.facebook.com/duederma" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/duederma" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="social-group">
              <h5 className="social-subtitle">Dra. Maleh</h5>
              <div className="social-links">
                <a href="https://www.facebook.com/dradanielamaleh" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/dradanielamaleh" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Due Derma. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=5491131420521" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
