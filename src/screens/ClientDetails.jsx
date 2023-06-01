import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { api } from "../api/api";
import { UpdateClient } from "../components/modal/UpdateClient";

export const ClientDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();

  const toggleModal = () => {
    setOpen(!open);
  };

  const getUserData = async () => {
    const { data } = await api.get(`clients/${id}`);
    data ? setData(data) : setData({});
  };

  const handleDelete = async () => {
    await api.delete(`clients/${id}`);
    navigation("/clients");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">ID: {data?.id}</h1>{" "}
          <h1 className="text-5xl font-bold">
            {data?.name} {data?.apelido}
          </h1>{" "}
          <div className="flex flex-col w-full gap-5">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center mt-10">
              {data?.email}
            </div>
            <div className="divider"></div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
              {data?.city?.name}
            </div>
          </div>
          <div className="flex gap-5 justify-center">
            <button className="btn btn-primary mt-10" onClick={toggleModal}>
              Edit
            </button>
            <button className="btn btn-primary mt-10" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {
        // Modal

        open && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/90 flex justify-center items-center">
            <UpdateClient setOpen={setOpen} data={data} id={data?.id} />
          </div>
        )
      }
    </div>
  );
};
