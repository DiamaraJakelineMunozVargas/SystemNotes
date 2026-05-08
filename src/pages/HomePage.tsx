import ModalComponente from "../componentes/ModalComponente";
import List from "../componentes/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Inicio = ({ data }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/notas");
        setNotes(response.data);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);
  return (
    <div className="grid grid-cols- [repeat(auto-fit, _minmax(280px, -1fr))] gap-4 mt-16 xl:grid-cols-[repeat(auto-fit, _minmax(350px, -1fr))]">
      <ModalComponente data={data} />
      <List />
    </div>
  );
};

export default Inicio;
