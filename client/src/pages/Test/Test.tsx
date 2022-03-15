import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../State/Redux/action";
import { Token } from "../../State/StateTypes/stateTypes";

const Test = () => {
  const tokenObject: Token = useSelector((state: RootStateOrAny) => state.token);
  console.log(tokenObject.token);

  const decoded: any = jwt_decode(tokenObject.token);

  const date = new Date(decoded.exp * 1000) > new Date();
  console.log(date);

  console.log(decoded);
  // const dispatch = useDispatch();

//   useEffect(() => {
    
// dispatch(saveToken(decoded));
//   },[])



  return <div>test</div>;
};

export default Test;
