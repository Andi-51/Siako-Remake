import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Kontak = () => {
  const position = [-6.797463, 106.776705];

  return (
    <div className="bg-white h-fit flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl text-center font-semibold">
          Kontak Kami
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <BsFillTelephoneFill className="text-[#42a5f5] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black pt-5">
              (0266) 734-796
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <MdOutlineMailOutline className="text-[#42a5f5] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black pt-5">
              smkinformatikacbi@gmail.com
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <FaSearchLocation className="text-[#42a5f5] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Jl. Koramil RT 02/02 Ds. Purwasari Kec. Cicurug Kab. Sukabumi Kode
              Pos 43357
            </h3>
          </div>
        </div>
        <div className="mt-10 h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={16}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={position}>
              <Popup>SMKS Informatika CBI</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
