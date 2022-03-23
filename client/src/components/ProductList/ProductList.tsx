import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import axios from "axios";

const ProductList = () => {
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
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log(cellValues);
            }}
            //   onClick={(event) => {
            //     handleClick(event, cellValues);
            //   }}
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
      return { id: el._id, name: el.name, color: el.color, price: el.price, quantity: el.quantity };
    });
  } else {
    productRow = [{ id: ""}];
  }

  const rows = productRow;

  return (
    <>
      {data === undefined ? (
        ""
      ) : (
        <div className="container" style={{ height: 400, width: "100%", marginTop: "2rem" }}>
          <DataGrid
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
