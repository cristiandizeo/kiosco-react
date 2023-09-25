import { useContext } from "react";
import KioscoContext from "../Context/KioscoProvider";

const useKiosco = () => {
    return useContext (KioscoContext)
}

export default useKiosco