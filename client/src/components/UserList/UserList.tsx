import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MySnackbar from "../Snackbar/MyScanckbar";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
      {
        outline: "none !important",
      },
    "&.css-1fajery-MuiDataGrid-root .MuiDataGrid-cell:focus-within, &.css-1fajery-MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":
      {
        outline: "none !important",
      },
  },
});

const UsertList = () => {
  // const navigate = useNavigate();
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState<number>(5);
  const [deletedData, setDeletedData] = React.useState<string>("");
  const [successAndError, setSuccessAndError] = React.useState({});
  const [modalStatus, setModalStatus] = React.useState<boolean>(false);
  const [deleteProductID, setDeleteProductID] = React.useState<string>("");

  let productRow;
  const [data, setData] = React.useState<any>();

  const token = useSelector((state: any) => state.token.token);
  console.log(token);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 230, flex: 1 },
    { field: "firstName", headerName: "First name" },
    { field: "lastName", headerName: "Last name" },
    { field: "email", headerName: "E-mail", minWidth: 180, flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 60,
    },
    {
      field: "phone",
      headerName: "Phone",
      minWidth: 150,
      flex: 1,
    },
    { field: "address", headerName: "Address", minWidth: 150, flex: 1 },
    { field: "country", headerName: "Country", minWidth: 100, flex: 1 },
    { field: "city", headerName: "City", minWidth: 80, flex: 1 },
    { field: "role", headerName: "Role", minWidth: 80, flex: 1 },
    {
      field: "Action",
      width: 160,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              size="small"
              variant="outlined"
              color="success"
              onClick={() => {
                // navigate(`/admin/updateproduct/${cellValues.row.id}`);
              }}
            >
              edit
            </Button>
            <Button
              size="small"
              sx={{ marginLeft: 1 }}
              variant="outlined"
              color="error"
              onClick={() => {
                // setModalStatus(true);
                // setDeleteProductID(cellValues.row.id);
              }}
            >
              delete
            </Button>
          </>
        );
      },
    },
  ];

  // Delete pruduct handler
  // const handlerDeleteProduct = (id: string) => {
  //   axios
  //     .delete(`http://localhost:5000/api/v1/products/${id}`)
  //     .then(function (response) {
  //       // handle success
  //       setDeletedData(response.data);
  //       setSuccessAndError(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       setSuccessAndError({ error: error.message });
  //       console.log(error);
  //     });
  // };

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        // handle success
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [deletedData]);

  if (data) {
    productRow = data.map((user: any) => {
      return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        address: user.address,
        phone: user.phone,
        email: user.email,
        country: user.country,
        city: user.city,
        role: user.role,
      };
    });
  } else {
    productRow = [{ id: "" }];
  }

  const rows = productRow;

  // error/success function
  const successAndErrorInfo = (successAndError: any) => {
    if (successAndError && successAndError._id) {
      return (
        <MySnackbar
          status="success"
          message={`Product with id ${successAndError._id} is deleted!`}
          setSuccessAndError={setSuccessAndError}
        />
      );
    } else if (successAndError && successAndError.error) {
      return (
        <MySnackbar
          status="error"
          message={successAndError.error}
          setSuccessAndError={setSuccessAndError}
        />
      );
    }
  };

  return (
    <>
      {data === undefined ? (
        ""
      ) : (
        <div
          className="container"
          style={{ height: 400, width: "100%", marginTop: "2rem" }}
        >
          <DataGrid
            className={classes.root}
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            hideFooterSelectedRowCount={true}
            autoHeight={true}
          />
        </div>
      )}
      {successAndErrorInfo(successAndError)}
      {/* <ConfirmDialog
        value={deleteProductID}
        open={modalStatus}
        setOpen={setModalStatus}
        evokeFunction={handlerDeleteProduct}
      /> */}
    </>
  );
};

export default UsertList;
