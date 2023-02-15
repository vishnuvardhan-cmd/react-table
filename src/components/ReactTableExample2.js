import React from "react";
import { useTable } from "react-table";
const ReactTableExample2 = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "minisk",
        col2: 27,
        col3: "rain",
      },
      {
        col1: "Vilnius",
        col2: "30",
        col3: "rain",
      },
      {
        col1: "London",
        col2: "23",
        col3: "rain",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "City",
        accessor: "col1",
      },
      {
        Header: "Temperature",
        accessor: "col2",
      },
      {
        Header: "WeatherForecast",
        accessor: "col3",
      },
    ],
    []
  );
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          border: "10px solid gray",
          height: "94vh",
          margin:'10px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <table
          {...getTableProps()}
          style={{
            border: "4px solid blue",
            maxWidth:'700px',
            margin:'auto',
            height:'50vh',
            display:'inline-table',
            alignItems:'center',
            justifyContent:'center',
            width:'100%'
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px red",
                      color: "black",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  style={{ border: "1px solid black" }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReactTableExample2;
