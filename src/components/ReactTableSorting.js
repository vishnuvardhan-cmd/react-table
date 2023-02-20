import React, { useMemo } from "react";
import Data from "./data.json";
import { useTable,useSortBy } from "react-table";
import { Columns } from "./columns";
import {BsFillCaretDownFill,BsFillCaretUpFill} from 'react-icons'
const ReactTableSorting = () => {
  // const columns = useMemo(() => [
  //   {
  //     Header: "Id",
  //     accessor: "id",
  //   },
  //   {
  //     Header: "First Name",
  //     accessor: "first_name",
  //   },
  //   {
  //     Header: "Last Name",
  //     accessor: "last_name",
  //   },
  //   {
  //     Header: "Email",
  //     accessor: "email",
  //   },
  //   {
  //     Header: "Date Of Birth",
  //     accessor: "date_of_birth",
  //   },
  // ]);
  const data = useMemo(() => Data);
  const columns = useMemo(() => Columns);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data },useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
              <span>
              {column.isSorted?(column.isSortedDesc?'▼':'▲'):''}  
              </span></th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((foo) => (
              <td {...foo.getFooterProps()}>{foo.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default ReactTableSorting;
