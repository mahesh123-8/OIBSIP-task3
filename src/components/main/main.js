
import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToFahrenheit = () => {
    const f = parseFloat(celsius) * (9 / 5) + 32;
    setFahrenheit(f.toFixed(2));
  };

  const convertToCelsius = () => {
    const c = (parseFloat(fahrenheit) - 32) * (5 / 9);
    setCelsius(c.toFixed(2));
  };

  return (
    <div className="container mx-auto my-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mt-[300px] bg-white p-4 text-center shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-black">Temperature Converter</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <input
          type="number"
          placeholder="Enter Fahrenheit"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
          className="border p-2 mb-2 sm:mb-0 sm:mr-2 border-red-500"
        />
        <button onClick={convertToCelsius} className="bg-blue-500 rounded-md text-white p-2 sm:w-auto">Convert to Celsius</button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
        <input
          type="number"
          placeholder="Enter Celsius"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          className="border p-2 mb-2 sm:mb-0 sm:mr-2 border-red-500"
        />
        <button onClick={convertToFahrenheit} className="bg-blue-500 rounded-md text-white p-2 sm:w-auto hover:green-600 transition-colors duration-700">Convert to Fahrenheit</button>
      </div>

      <p className="mt-4">
        {fahrenheit && `${celsius}°C is equal to ${fahrenheit}°F`}
        {celsius && `${fahrenheit}°F is equal to ${celsius}°C`}
      </p>
    </div>
  );
};

export default TemperatureConverter;