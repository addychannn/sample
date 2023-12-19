import {Box, Chip, Paper, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import React, {Fragment} from "react";
import {USERS} from "../../../config/data";

const columns = [
  {field: "id", headerName: "id", width: 100},
  {
    field: "avatar",
    headerName: "Avatar",
    flex: 1,
    renderCell: (params) => (
      <div style={{display: "flex", alignItems: "center"}}>
        <img
          src={params.row.image}
          alt={params.row.fullName}
          style={{width: 24, height: 24}}
        />
      </div>
    ),
  },
  {field: "fullName", headerName: "Full Name", flex: 1},
  {field: "personalEmail", headerName: "Personal Email", flex: 1},
  {field: "workEmail", headerName: "Work Email", flex: 1},
  {field: "category", headerName: "Category", flex: 1},
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (params) => {
      return (
        <Fragment>
          {params.value === "Active" ? (
            <Chip color="success" label="Active" />
          ) : (
            <Chip color="error" label="Inactive" />
          )}
      </Fragment>
      );
    },
  },
];

export const SampleDataGrid = () => {
  return (
    <Fragment>
      <Typography variant="h4">Data Grid</Typography>

      <Paper style={{width: "100%", textAlign: "center"}}>
        <DataGrid
          rows={USERS}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {page: 0, pageSize: 10},
            },
          }}
          checkboxSelection
          autoHeight
        />
      </Paper>
    </Fragment>
  );
};
