import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  let productRow;
  const [data, setData] = React.useState<any>();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Product name", width: 200 },
    { field: "color", headerName: "Color", width: 100 },
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
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              navigate(`/admin/updateproduct/${cellValues.row.id}`);
            }}
          >
            edit
          </Button>
        );
      },
    },
  ];

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then(async function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (data) {
    productRow = data.map((el: any) => {
      return {
        id: el._id,
        name: el.name,
        color: el.color,
        price: el.price,
        quantity: el.quantity,
      };
    });
  } else {
    productRow = [{ id: "" }];
  }

  const rows = productRow;

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
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterSelectedRowCount={true}

            // checkboxSelection
          />
        </div>
      )}
    </>
  );
};

export default ProductList;
