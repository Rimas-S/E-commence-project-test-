import * as React from "react";
import { useParams } from "react-router-dom";
import { UpdateComponent } from "./UpdateComponent";

const UpdateUser = () => {
  const userId = useParams()?.id;

  return <UpdateComponent userId={userId} header sm={6}/>;
};

export default UpdateUser;
