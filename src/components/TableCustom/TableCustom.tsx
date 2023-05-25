
// import everything neccessary from material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { EventTable } from '../../constants/events';
// Please be fixed 
interface TableCustomProps {
    eventTable: EventTable[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const TableCustom = ({eventTable}: TableCustomProps) => {
  return (
    <TableContainer sx={{my: 5}}>
    <Table sx={{minWidth: 650}}>
        <TableHead>
            <TableRow >
                
                <StyledTableCell sx={{fontWeight:700}}>Time</StyledTableCell>
                <StyledTableCell>Topic</StyledTableCell>
                <StyledTableCell>Speaker</StyledTableCell>
                <StyledTableCell>Session Chair </StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {eventTable?.map((row: any, index: number) => (
                <StyledTableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.date_time}
                </TableCell>
                <TableCell>{row.topic.split("\n").map((paragraph: string, index: number) => (
  <p key={index}>{paragraph}</p>
))}</TableCell>
                <TableCell>{row.speaker}</TableCell>
                <TableCell>{row.session_chair}</TableCell>
                </StyledTableRow>
            ))}

        </TableBody>
    </Table>
</TableContainer>
  )
}

export default TableCustom; 