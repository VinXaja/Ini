import React from "react";

class AskMe extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [{ guest_name: 'React JS', question: 'The first question...?', time: Date.now() }],
      name: '',
      question: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0 || this.state.question.length === 0) {
      return;
    }

    const newItem = {
      guest_name: this.state.name,
      question: this.state.question,
      time: Date.now()
    };

    this.setState(state => ({
      questions: state.questions.concat(newItem),
      name: '',
      question: ''
    }));
  }

  render() {
    let allQuestions = this.state.questions.map(item => {
      return (
        <li className="list-group-item" key={item.time}>
          <span className="badge bg-info text-dark">{item.guest_name}</span>
          <span className="p-2">{item.question}</span>
          {/* Uncomment the line below to display the timestamp */}
          {/* <span className="text-muted"> {new Date(item.time).toLocaleString()}</span> */}
        </li>
      );
    });

    return (
      <div className="container py-3">
        <h2 className="pb-2 mb-4 border-bottom">Ask Me</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Guest's Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Question.."
              name="question"
              onChange={this.handleChange}
              value={this.state.question}
            />
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
        <ul className="list-group list-group-flush">
          {allQuestions}
        </ul>
      </div>
    );
  }
}

export default AskMe;
