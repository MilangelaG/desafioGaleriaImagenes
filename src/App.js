import './App.css';
import './Header.jsx';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de Imagenes" />
      <div class="row">
        <Card titulo="Girasol" direccion="girasol.jpg" descripcion="Helianthus annuus" />
        <Card titulo="Margarita" direccion="margarita.jpg" descripcion="Bellis perennis" />
        <Card titulo="Rosa" direccion="rosa.jpg" descripcion="Rosaceae" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
