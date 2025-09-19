import './App.css';
import Header from './components/Header';
import StaffCarousel from './components/StaffCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      {/* Contenedor con snap SOLO para las secciones */}
      <div className="scroll-container">
        <section id="home" className="section section-1">
          <div className="section-content">
            <h1>Due Derma</h1>
            <p>Dermatología Clínica & Estética</p>
          </div>
        </section>
        
        <section id="about" className="section section-2">
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

        <section id="team" className="section section-3">
          <div className="team-content">
            {/* Carrusel para mobile */}
            <StaffCarousel />
            
            {/* Grid para desktop - Staff Médico */}
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

        <section id="commitment" className="section section-4">
          <div className="section-content">
            <h1>Compromiso con la Calidad</h1>
            <p>En Due Derma nos comprometemos a:</p>
            <ul className="commitment-list">
              <li>
                <i className="fas fa-stethoscope"></i>
                Brindar atención médica de excelencia
              </li>
              <li>
                <i className="fas fa-shield-heart"></i>
                Mantener los más altos estándares de bioseguridad
              </li>
              <li>
                <i className="fas fa-desktop"></i>
                Ofrecer tecnología actualizada
              </li>
              <li>
                <i className="fas fa-handshake"></i>
                Proporcionar un ambiente cálido y profesional
              </li>
              <li>
                <i className="fas fa-lock"></i>
                Respetar la privacidad y confidencialidad de nuestros pacientes
              </li>
            </ul>
          </div>
        </section>
      </div>
      
      {/* Footer fuera del scroll snap */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=5491131420521&text=Hola%20Due%20Derma,%20quisiera%20recibir%20más%20información%20sobre..." 
         target="_blank" 
         rel="noopener noreferrer" 
         className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
