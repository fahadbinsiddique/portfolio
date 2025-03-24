'use client';

import { useState } from 'react';

export default function DynamicForm() {
  const [fields, setFields] = useState([{ id: 1, name: '', option: '' }]);
  const [errors, setErrors] = useState({});

  const handleChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { id: Date.now(), name: '', option: '' }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    fields.forEach((field, index) => {
      if (!field.name) newErrors[index] = { ...newErrors[index], name: 'Name is required' };
      if (!field.option) newErrors[index] = { ...newErrors[index], option: 'Option is required' };
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Data:', fields);
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3 mb-3 items-center">
            <div>
              <input
                type="text"
                placeholder="Enter name"
                value={field.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="border p-2 rounded w-40"
              />
              {errors[index]?.name && <p className="text-red-500 text-sm">{errors[index].name}</p>}
            </div>

            <div>
              <select
                value={field.option}
                onChange={(e) => handleChange(index, 'option', e.target.value)}
                className="border p-2 rounded w-40"
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              {errors[index]?.option && <p className="text-red-500 text-sm">{errors[index].option}</p>}
            </div>

            <button type="button" onClick={() => removeField(field.id)} className="text-red-500">❌</button>
          </div>
        ))}

        <button type="button" onClick={addField} className="bg-blue-500 text-white p-2 rounded">➕ Add Field</button>
        <button type="submit" className="bg-green-500 text-white p-2 rounded ml-3">Submit</button>
      </form>

      <h3 className="text-lg font-bold mt-5">Form Data</h3>
      <table className="w-full border mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Option</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td className="border p-2">{field.name}</td>
              <td className="border p-2">{field.option}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
