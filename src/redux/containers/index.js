import { connect } from "react-redux";
import { getListAction } from "../actions";
import CrudComponent from "../../components/CrudComponent";

const mapStateToProps = ({ crud }) => {
    console.log(crud)
  return {
    list: crud.data,
    message: crud.error && crud.error
  };
};

export default connect(
  mapStateToProps,
  { getListAction }
)(CrudComponent);
