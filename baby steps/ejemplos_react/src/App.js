import {
  EjemploProps01,
  EjemploProps02,
  EjemploProps03,
  EjemploProps04,
  EjemploProps05,
  ListaPaises,
} from './components/props';

import {
  EjemploEstado01
} from './components/estado';

const nombre2 = "Bones";

const lista = ['pistacho', 'bananas', 'chocolate', 'palta'];
const actividades = ['estudiar', 'entrenar en el gimnasio', 'ver una película'];
const mostrarValor = valor => {
  console.log(valor);
};

function App() {
  return (
    <div>
      <h1>Props</h1>
      {/* propiedad simple y reutilizacion */}
      <EjemploProps01 nombre="Salsita" />
      <EjemploProps01 nombre={nombre2} />
      <hr />

      {/* pasar referecia a variable como prop */}
      <EjemploProps02 elementos={lista} />
      <EjemploProps02 elementos={actividades} />
      <ListaPaises />
      <hr />


      {/* multiples props y destructuring */}
      <EjemploProps03 titulo="Navidad" texto="La mejor noche del año" />
      <hr />

      {/* pasar una funcion */}
      <EjemploProps04 cambiaValor={mostrarValor} />


      {/* este da error cuando escribimos porque no recibe el manejador */}
      <EjemploProps04 />

      {/*qwqw*/}
      <EjemploProps05 eventoClick={mostrarValor} />


      {/* este no da error proque le pusimos la "validacion" de la prop */}
      <EjemploProps05 />

      <h1>Estado</h1>
      <EjemploEstado01 />
    </div>
  );
}

export default App;
