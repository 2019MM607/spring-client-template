import { useEffect, useState } from "react";
import { api } from "../../api/api";

export const UpdateClient = ({ setOpen, data, id }) => {
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({
    name: data?.name,
    apelido: data?.apelido,
    email: data?.email,
    city: data?.city?.id,
  });
  const close = () => {
    setOpen(false);
  };

  const getAllCities = async () => {
    const { data } = await api.get("city");
    data ? setCities(data) : setCities([]);
  };

  const handleUpdate = async () => {
    const { data } = await api.patch(`clients/${id}`, form);
    data ? close() : alert("Error");
    window.location.reload();
  };

  useEffect(() => {
    getAllCities();
  }, []);

  return (
    <div className=" flex flex-col justify-center gap-5  p-5 rounded-xl">
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered input-primary w-full max-w-xs"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apellido"
        className="input input-bordered input-primary w-full max-w-xs"
        name="apelido"
        value={form.apelido}
        onChange={(e) => setForm({ ...form, apelido: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered input-primary w-full max-w-xs"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <select
        className="select w-full max-w-xs"
        name="city"
        value={form.city.id}
        onChange={(e) =>
          setForm({ ...form, city: { id: parseInt(e.target.value) } })
        }
      >
        <option disabled selected>
          City
        </option>
        {cities.map((city) => (
          <option key={city?.id} value={city?.id}>
            {city?.name}
          </option>
        ))}
      </select>
      <div>
        <button className="btn btn-ghost" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-ghost" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};
