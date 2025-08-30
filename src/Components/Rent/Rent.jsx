import React, { useState } from "react";


const Rent = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup: ${pickup}, Dropoff: ${dropoff}`);
  };
    return (
        <div className="w-full flex justify-center -mt-15 relative z-10">
            <div className="bg-white shadow-lg rounded-xl p-6 w-[90%] md:w-[700px]">
                <h2 className="text-xl font-bold mb-4">
                    Rent ukil
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    {/* Pickup Input */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Your name</label>
                        <input
                            type="text"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            placeholder="type name"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Drop-off Input */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">your location</label>
                        <input
                            type="text"
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                            placeholder="type location"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">your location</label>
                        <input
                            type="text"
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                            placeholder="type location"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Rent
