import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MySnackbar from "../Snackbar/MyScanckbar";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

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

const ProductList = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [deletedData, setDeletedData] = React.useState<string>("");
  const [successAndError, setSuccessAndError] = React.useState({});
  const [modalStatus, setModalStatus] = React.useState<boolean>(false);
  const [deleteProductID, setDeleteProductID] = React.useState<string>("");

  let productRow;
  const [data, setData] = React.useState<any>();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Product name", width: 200 },
    { field: "color", headerName: "Color", width: 100 },
    { field: "describtion", headerName: "Description", flex: 100 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 90,
    },
    {
      field: "Action",
      width: 170,
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
                navigate(
                  `/admin/productlist/updateproduct/${cellValues.row.id}`
                );
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
                setModalStatus(true);
                setDeleteProductID(cellValues.row.id);
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
  const handlerDeleteProduct = (id: string) => {
    axios
      .delete(`http://localhost:5000/api/v1/products/${id}`)
      .then(function (response) {
        // handle success
        setDeletedData(response.data);
        setSuccessAndError(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setSuccessAndError({ error: error.message });
        console.log(error);
      });
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [deletedData]);

  if (data) {
    productRow = data.map((el: any) => {
      return {
        id: el._id,
        name: el.name,
        color: el.color,
        price: el.price,
        quantity: el.quantity,
        describtion: el.describtion,
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
        <div className="container" style={{ height: 400, width: "100%" }}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                onClick={() => navigate("/admin/productlist/createproduct")}
                sx={{ m: 2 }}
                variant="contained"
                size="small"
                color="success"
              >
                Add product
              </Button>
            </Grid>
          </Grid>
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
      <ConfirmDialog
        value={deleteProductID}
        open={modalStatus}
        setOpen={setModalStatus}
        evokeFunction={handlerDeleteProduct}
      />
    </>
  );
};

export default ProductList;
