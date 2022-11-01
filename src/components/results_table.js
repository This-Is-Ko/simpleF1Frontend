import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function ResultsTable(props) {
    return (
      <div className="resultsTable">
        <TableContainer component={Card} sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Results</strong>
            </Typography>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.raceResults.map((resultEntry) => (
                    <TableRow
                    key={resultEntry.position}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {resultEntry.position}
                    </TableCell>
                    <TableCell>Team LOGO</TableCell>
                    <TableCell align="right">{resultEntry.name}</TableCell>
                    <TableCell align="right">{resultEntry.time}</TableCell>
                    <TableCell align="right">{resultEntry.points}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
}

export default ResultsTable;