import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

const NavItems = ({ signOut, uid }) => {
  if (uid) {
    return (
      <Link to="/signin" className="nav-link" onClick={signOut}>
        Đăng Xuất
      </Link>
    );
  } else {
    return (
      <>
        <Link to="/signup" className="nav-link">
          Đăng Ký
        </Link>
        <Link to="/signin" className="nav-link">
          Đăng Nhập
        </Link>
        <Link to="/about" className="nav-link">
          Tác Giả
        </Link>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);
