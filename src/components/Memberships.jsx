import React from "react";

const memberships = [
  {
    name: "Silver",
    price: "₹15,999",
    therapies: "10 therapies",
    validity: "6 months",
    bgColor: "bg-gray-200",
    borderColor: "border-gray-400",
  },
  {
    name: "Gold",
    price: "₹29,999",
    therapies: "24 therapies",
    validity: "6 months",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-400",
  },
  {
    name: "Platinum",
    price: "₹45,999",
    therapies: "60 therapies",
    validity: "14 months",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-600",
  },
];

const Memberships = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-4">
      <h1 className="text-4xl text-pink-400 font-bold mb-12 font-heading">Memberships</h1>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/3 p-6 rounded-xl shadow-lg border-2 ${membership.borderColor} ${membership.bgColor} transform transition duration-300 hover:scale-105`}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-2 font-heading">
                {membership.name}
              </h2>
              <p className="text-4xl font-extrabold text-pink-500 mb-4 font-body">
                {membership.price}
              </p>
              <p className="text-xl text-gray-700">{membership.therapies}</p>
              <p className="text-sm text-gray-500 mt-2 font-highlight">
                Valid for {membership.validity}
              </p>
              <a
                href={`https://wa.me/+917440744919?text=I%20am%20interested%20in%20the%20${membership.name}%20Membership%20(${membership.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-2 text-white bg-pink-400 font-bold rounded-full hover:bg-pink-500 transition duration-300 font-body"
              >
                Join via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memberships;
