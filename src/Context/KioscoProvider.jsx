import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias';

const KioscoContext = createContext();

const KioscoProvider = ({ children }) => {

    const [ categorias, setCategorias ] = useState(categoriasDB);    
    const [ categoriaActual, setCategoriaActual ] = useState(categorias[0]);    
    return (
        <KioscoContext.Provider
            value={{
                categorias,
                categoriaActual 
            }}
            >{children}</KioscoContext.Provider>
    )
}

export {
    KioscoProvider
}
export default KioscoContext