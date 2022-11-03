import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumAction, subNumAction } from "../store/home/actions";
export class Home extends PureComponent {
  addNum(num) {
    console.log("addNum---------");
    this.props.addNumAction(num);
  }
  subNum(num) {
    console.log("subNum---------");
    this.props.subNumAction(num);
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={(e) => this.addNum(1)}>+1</button>
        <button onClick={(e) => this.subNum(1)}>-1</button>
        <h1>{count}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.home.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumAction(num) {
      dispatch(addNumAction(num));
    },
    subNumAction(num) {
      dispatch(subNumAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
