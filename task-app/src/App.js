import React, {Component} from "react";
import "./App.css";
import uniquid from "uniquid";
import Overview from "./Overview.js"
export default class App extends Component{
  constructor(){
    super();
    this.state={
      task: {
        text: '',
        id: uniquid()
      },
      tasks: [],
    };
  }
  handleChange=(e)=>{
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask=(e)=>{
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniquid
      },
    });
  };
  render(){
    const{task, tasks} = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
          />
          <button type="submit" onClick={this.onSubmitTask}>
            Add task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
}
}
