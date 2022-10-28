// toast

import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Đã thêm thành công");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Có lỗi xảy ra");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Đã xóa");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Không thể xóa do có lỗi");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Đã đánh dấu");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("Không thể đánh dấu do có lỗi");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
