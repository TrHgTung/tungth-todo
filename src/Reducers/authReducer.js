import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("Chào bạn");
      return state;
    case "SIGN_IN_ERR":
      toast.error("Lỗi đăng nhập");
      return state;
    case "SIGN_OUT":
      toast("Lỗi đăng xuất");
      return state;
    case "SIGN_UP":
      toast("Hãy bắt đầu với To-do app");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Lỗi đăng ký");
      return state;
    default:
      return state;
  }
};

export default authReducer;
