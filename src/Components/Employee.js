import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";
import instance from "../firebase/instance";
import Employeeform from "./Employeeform";
import EmployeeList from "./EmployeeList";

class Employee extends Component {
  state = {
    name: "",
    unit: "",
    grade: "",
    contact: "",
    email: "",
    results: [],
    modelIsOpen: false,
  };
  componentDidMount() {
    trackPromise(
      instance.get("/Employee.json").then((res) => {
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({ ...res.data[key], id: key });
        }
        this.setState({
          results: fetchedData,
        });
      })
    );
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handlePost = (e) => {
    e.preventDefault();
    const Data = {
      name: this.state.name,
      unit: this.state.unit,
      grade: this.state.grade,
      contact: this.state.contact,
      email: this.state.email,
    };
    trackPromise(
      instance.post("/Employee.json", Data).then((response) => {
        const results = [
          ...this.state.results,
          { ...Data, id: response.data.name },
        ];
        this.setState({
          name: "",
          unit: "",
          grade: "",
          contact: "",
          email: "",
          results: results,
        });
        toast.success("You added a new entry...");
      })
    );
  };
  handleDelete = (id) => {
    instance.delete(`/Employee/${id}.json`).then((res) => {
      console.log(res);
    });
    this.setState({
      results: this.state.results.filter((result) => result.id !== id),
    });
    toast.error("Entry removed...");
  };
  handleModelOpen = (id) => {
    const result = this.state.results.find((result) => result.id === id);
    this.setState({
      name: result.name,
      unit: result.unit,
      grade: result.grade,
      contact: result.contact,
      email: result.email,
      id: result.id,
      modelIsOpen: true,
    });
  };
  handleModelClose = () => {
    this.setState({
      modelIsOpen: false,
      name: "",
      grade: "",
      unit: "",
      contact: "",
      email: "",
    });
  };
  handleUpdate = (e) => {
    e.preventDefault();
    this.setState({
      modelIsOpen: false,
    });
    const Data = {
      name: this.state.name,
      unit: this.state.unit,
      grade: this.state.grade,
      contact: this.state.contact,
      email: this.state.email,
    };
    trackPromise(
      instance.put(`/Employee/${this.state.id}.json`, Data).then((res) => {
        console.log(res);

        instance.get("/Employee.json").then((res) => {
          const fetchedData = [];
          for (let key in res.data) {
            fetchedData.push({ ...res.data[key], id: key });
          }
          this.setState({
            results: fetchedData,
            name: "",
            unit: "",
            grade: "",
            contact: "",
            email: "",
          });
        });
        toast.info("Entry Updated");
      })
    );
  };
  render() {
    const { name, unit, grade, results, contact, email, modelIsOpen } =
      this.state;
    return (
      <div className="container">
        <Employeeform
          name={name}
          unit={unit}
          grade={grade}
          contact={contact}
          email={email}
          handleChange={this.handleChange}
          handlePost={this.handlePost}
        />
        <EmployeeList
          results={results}
          handleDelete={this.handleDelete}
          handleModelOpen={this.handleModelOpen}
          handleModelClose={this.handleModelClose}
          modelIsOpen={modelIsOpen}
          name={name}
          unit={unit}
          grade={grade}
          contact={contact}
          email={email}
          handleChange={this.handleChange}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default Employee;
