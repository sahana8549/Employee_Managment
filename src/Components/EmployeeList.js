import React from "react";
import EmployeeDisplay from "./EmployeeDisplay";
const EmployeeList = ({
  results,
  handleDelete,
  modelIsOpen,
  handleModelOpen,
  handleModelClose,
  name,
  unit,
  grade,
  contact,
  email,
  handleChange,
  handleUpdate,
}) => {
  return (
    <div className="employee-display">
      <h2>{results.length}-Results Found</h2>
      {results.map((result) => (
        <EmployeeDisplay
          result={result}
          key={result.id}
          handleDelete={handleDelete}
          handleModelOpen={handleModelOpen}
          handleModelClose={handleModelClose}
          modelIsOpen={modelIsOpen}
          name={name}
          grade={grade}
          unit={unit}
          contact={contact}
          email={email}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
