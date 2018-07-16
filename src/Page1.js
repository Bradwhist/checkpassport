import React from 'react';

export default class Page1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2 className="page1">Meow Page1</h2>
        <button onClick={() => this.props.redirect("Page2")}>Go to Page 2</button>
      </div>
    )
  }
}
