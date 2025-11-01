import './App.css';
import Header from './components/Header';
import StaffCarousel from './components/StaffCarousel';
import Footer from './components/Footer';
import danielaImage from './assets/daniela-nueva.jpeg';
import agustinaImage from './assets/agustina-fernandez-capiet.jpeg';
import ludmilaImage from './assets/ludmila-rodriguez.jpeg';
import malenaImage from './assets/malena-colasanti.jpeg';

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
            {/* Versión completa para desktop */}
            <div className="about-text-desktop">
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
            {/* Versión resumida para mobile */}
            <div className="about-text-mobile">
              <p>
                Due Derma es un centro especializado en dermatología y estética médica,
                dedicado al bienestar integral de nuestros pacientes. Ofrecemos tratamientos
                innovadores y seguros, combinando la más alta calidad médica con un enfoque
                personalizado y profesional. El cuidado de la piel es salud, bienestar y confianza.
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="section section-3">
          <div className="team-content">
            {/* Carrusel para mobile */}
            <StaffCarousel />
            
            {/* Grid para desktop - Equipo Médico */}
            <div className="staff-section">
              <h1 className="main-team-title">Nuestro Equipo Médico</h1>
              <p className="team-subtitle">Profesionales comprometidos con tu bienestar</p>
              
              {/* Grid de cards del equipo */}
              <div className="team-grid">
                <div className="staff-card director-card">
                  <div className="staff-card-image director-image">
                    <img src={danielaImage} alt="Dra. Daniela Maleh" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Daniela Maleh</h3>
                    <p className="staff-card-title">Directora Médica</p>
                    <p className="staff-card-specialty">Dermatóloga (M.N 143.541)</p>
                  </div>
                </div>

                <div className="staff-card">
                  <div className="staff-card-image">
                    <img src={agustinaImage} alt="Dra. Agustina Fernández Capiet" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Agustina Fernández Capiet</h3>
                    <p className="staff-card-title">Coordinadora Médica</p>
                    <p className="staff-card-specialty">Dermatóloga (MN 176752)</p>
                  </div>
                </div>
                
                <div className="staff-card">
                  <div className="staff-card-image">
                    <img src={ludmilaImage} alt="Dra. Ludmila Rodríguez" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Ludmila Rodríguez</h3>
                    <p className="staff-card-title" style={{ visibility: 'hidden' }}>Coordinadora Médica</p>
                    <p className="staff-card-specialty">Dermatóloga (MN 144952)</p>
                  </div>
                </div>
                
                <div className="staff-card">
                  <div className="staff-card-image">
                    <img src={malenaImage} alt="Dra. Malena Colasanti" />
                  </div>
                  <div className="staff-card-info">
                    <h3 className="staff-card-name">Dra. Malena Colasanti</h3>
                    <p className="staff-card-title" style={{ visibility: 'hidden' }}>Coordinadora Médica</p>
                    <p className="staff-card-specialty">Dermatóloga (MN 145893)</p>
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
