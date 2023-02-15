import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./data.json";
import { Columns } from "./columns";
import './table.css';

const ReactTableExample1 = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } =
    tableInstance;
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {
                    row.cells.map(cell=>{
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTableExample1;
