import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export default function DataTable({
  columns,
  rows,
  data,
  page,
  handlePageChange,
  loading,
  handleRowClick,
}) {
  return (
    <DataTable.Wrapper style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        rowCount={data?.total || 10}
        onPageChange={handlePageChange}
        page={page - 1}
        paginationMode="server"
        loading={loading}
        onRowClick={(params, event) => {
          event.defaultMuiPrevented = true;
          handleRowClick(params.row.id);
        }}
      />
    </DataTable.Wrapper>
  );
}

DataTable.Wrapper = styled.div`
  .MuiDataGrid-main {
    background: #edeeef;
    border-radius: 8px;
    padding: 0 10px;
  }
  .MuiDataGrid-row {
    margin: 8px 0;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: white !important;
    }
  }
  .MuiDataGrid-cell--textRight {
    justify-content: flex-start !important;
  }
  .MuiDataGrid-columnHeaderTitleContainer {
    flex-direction: row !important;
  }
  .MuiDataGrid-columnHeaderTitle {
    font-weight: 500;
    font-size: 11px;
    line-height: 117%;
    color: #787878;
    text-transform: uppercase;
  }
  .MuiDataGrid-cell {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 117%;
    color: #505050;
  }
`;
