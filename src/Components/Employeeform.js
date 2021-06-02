import React from "react";

const Employeeform = ({
  name,
  unit,
  grade,
  contact,
  email,
  handleChange,
  handlePost,
}) => {
  return (
    <div className="employee-add">
      <form className="ui-form" autoComplete="off" onSubmit={handlePost}>
        <h2>Add New Employee</h2>
        <label>Name:</label>
        <input
          autoFocus
          name="name"
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <label>Unit:</label>
        <input
          name="unit"
          type="text"
          required
          placeholder="React, Node etc"
          value={unit}
          onChange={handleChange}
        />

        <label>Grade:</label>

        <input
          name="grade"
          type="text"
          required
          placeholder="Grade"
          value={grade}
          onChange={handleChange}
        />
        <label>Contact:</label>
        <input
          name="contact"
          type="text"
          required
          placeholder="Contact"
          pattern="[0-9]{10}"
          value={contact}
          onChange={handleChange}
        />
        <label>Email :</label>
        <input
          name="email"
          type="text"
          required
          placeholder="email@gmail.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email}
          onChange={handleChange}
        />

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Employeeform;
