import { useState } from "react";
import Modal from "react-modal";
import imagenGrande from "../../../src/assets/imagen_DetallesTys_grande.webp";

Modal.setAppElement("#root");

export const PlantillaRedesSociales = ({ titulo, imagen, alt }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className="cajaRedesSociales md:w-96 w-80 bg-gray-200 rounded-xl py-8 px-8 shadow-md mb-5 mx-5"
      >
        <div className="cajaImagenRedes bg-white rounded-xl">
          <img
            className="rounded-xl shadow-md w-auto h-auto"
            src={imagen}
            tabIndex={0}
            alt={alt}
          />
        </div>
        <h1 className="mt-4 mb-8 text-black font-bold" tabIndex={0}>
          {titulo}
        </h1>
        <div className="md:flex justify-center">
          <button
            onClick={handleOpenModal}
            tabIndex={0}
            target="_blank"
            id="vistaprevia"
            className="bg-purple-800 block hover:bg-purple-900 font-semibold rounded-lg text-center text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl text-sm tracking-wide"
          >
            Abrir imagen
          </button>
          <Modal
            className="modal md:w-2/4 lg:w-2/5 w-full flex flex-col gap-6 justify-center md:mt-48 mt-60 mx-auto px-4 py-4"
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Imagen más grande"
          >
            <button
              className="bg-purple-800 hover:bg-purple-900 font-semibold rounded-lg text-center text-white hover:scale-105 px-4 py-2 mx-auto cursor-pointer shadow-xl text-sm"
              onClick={handleCloseModal}
            >
              X
            </button>
            <img src={imagenGrande} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
