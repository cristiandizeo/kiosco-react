import { productos } from '../data/productos'
import Producto from '../components/Producto'
import useKiosco from '../hooks/useKiosco'

export default function Inicio() {

  const { categoriaActual } = useKiosco();

  return (
    <>
    <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
    <p className='text-2xl my-10'>
      Elige y personaliza tu pedido
    </p>
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {productos.map(producto => (
        <Producto 
          key={producto.imagen}
          producto={producto}
        />
      ))}
    </div>
    
    </>
  )
}
