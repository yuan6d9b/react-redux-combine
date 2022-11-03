import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchMultidataAction } from "../store/user/actions";

export class Info extends PureComponent {
  render() {
    const { banners } = this.props;
    return (
      <div>
        <button onClick={(e) => this.props.fetMultiData()}>fetch data</button>
        <ul>
          {banners.map((item) => {
            return <li key={item.title}>{item?.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state-----------:", state);

  return {
    banners: state.user.banners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetMultiData() {
      dispatch(fetchMultidataAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
