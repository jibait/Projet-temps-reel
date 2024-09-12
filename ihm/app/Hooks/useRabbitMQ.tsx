import { useContext } from "react";
import { ComServiceContext } from "../context/ComServiceContext";

export const useComService = () => {
    return useContext(ComServiceContext);
};
