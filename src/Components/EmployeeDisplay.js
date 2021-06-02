import React from "react";
import Modal from "react-modal";
import EmployeeUpdate from "./EmployeeUpdate";
Modal.setAppElement("#root");
const EmployeeDisplay = ({
  result,
  handleDelete,
  handleModelOpen,
  handleModelClose,
  modelIsOpen,
  name,
  grade,
  unit,
  contact,
  email,
  handleChange,
  handleUpdate,
}) => {
  return (
    <div className="emp-list">
      <span className="display">{result.name}</span>
      <span className="display">{result.unit}</span>
      <span className="display">{result.grade}</span>
      <span className="display">{result.contact}</span>
      <span className="display">{result.email}</span>

      <button className="remove-btn" onClick={() => handleDelete(result.id)}>
        Delete
      </button>
      <button className="edit-btn" onClick={() => handleModelOpen(result.id)}>
        Update
      </button>
      <hr />
      <Modal
        isOpen={modelIsOpen}
        onRequestClose={() => handleModelClose()}
        style={{
          overlay: { background: "rgba(255,255,255,0.24" },
          content: {
            border: "none",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <EmployeeUpdate
          handleModelClose={handleModelClose}
          name={name}
          unit={unit}
          grade={grade}
          contact={contact}
          email={email}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
        />
      </Modal>
    </div>
  );
};

export default EmployeeDisplay;
