

const List = ({ data, setSelectedNote }) => {
  // {data}
  return (
    <div className="bg-base-100 w-full ">
      <ul className="list bg-base-100 rounded-box shadow-md">


        {data.map((usuarios) => (
          <li
            key={usuarios._id}

            className="list-row hover:bg-base-200 transition cursor-pointer"
          >
            <div className="avatar">
              <div className="w-15 rounded-full">
                <img src="https://i.pravatar.cc/100" />
              </div>
            </div>

            <div>
              <div className="font-semibold text-accent lg: text-2xl" id="name">
                {usuarios.nombre}
                {/* {note.name} */}
              </div>

              <div className="text-lg">
                {usuarios.email}
                {/* {note.title} */}
              </div>


            </div>
            <div className=" flex justify-between items-end text-xs opacity-60 p-2 ">
              <button className="btn btn-ghost btn-sm" onClick={(e) => {
                e.stopPropagation();
                setSelectedNote(usuarios)

              }}>
                Notas
              </button>
            </div>

            {/* <button className="btn btn-primary btn-sm">Abrir</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
