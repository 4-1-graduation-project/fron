import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(No, UserName, Id, UserAddress, gender) {
  return { No, UserName, Id, UserAddress, gender };
}

const rows = [
  createData('1', "홍길동", 6.0, 24, 4.0),
  createData('2', "김순지", 9.0, 37, 4.3),
  createData('3', "철부지", 16.0, 24, 6.0),
  createData('4', "기영이", 3.7, 67, 4.3),
  createData('5', "신짱구", 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">이름</TableCell>
            <TableCell align="right">아이디&nbsp;</TableCell>
            <TableCell align="right">집주소&nbsp;</TableCell>
            <TableCell align="right">성별&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.No}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.No}
              </TableCell>
              <TableCell align="right">{row.UserName}</TableCell>
              <TableCell align="right">{row.Id}</TableCell>
              <TableCell align="right">{row.UserAddress}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}