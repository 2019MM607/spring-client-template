import { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { api } from "../api/api";
import { Link } from "react-router-dom";
import { AddClient } from "../components/modal/AddClient";

export const Client = () => {
  const [clients, setClients] = useState([]);
  const [open, setOpen] = useState(false);

  const loadClients = async () => {
    const { data } = await api.get("clients");
    data ? setClients(data) : setClients([]);
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <main>
      <Nav />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {clients.map((client) => (
              <tr key={client?.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{client?.name}</div>
                      <div className="text-sm opacity-50">
                        {client?.apelido}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {client?.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{client?.city?.name}</td>
                <th>
                  <Link to={`${client?.id}`} className="btn btn-primary btn-xs">
                    Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="bg-primary rounded-full p-5 shadow-lg fixed right-10 bottom-10 z-10"
        onClick={() => setOpen(!open)}
      >
        ADD
      </button>

      {
        // Modal

        open && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/90 flex justify-center items-center">
            <AddClient setOpen={setOpen} />
          </div>
        )
      }
    </main>
  );
};
