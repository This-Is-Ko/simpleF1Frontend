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
    const TEAM_LOGO_BASE_LOCATION = "../assets/logos/";

    return (
      <div className="results-table">
        <TableContainer component={Card} sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Results</strong>
            </Typography>
            <Table sx={{ minWidth: 350 }} stickyHeader size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Team</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.raceResults.map((resultEntry) => (
                        <TableRow
                            key={resultEntry.position}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                                ...(resultEntry.fastestLap !== "" && {
                                    backgroundColor: '#9b0ec9',
                                })
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {resultEntry.position}
                            </TableCell>
                            <TableCell align="center" sx={{ paddingX: 0}}>
                                <img className='team-logo' alt={resultEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/logos/' + resultEntry.teamLogoUri + '.png'}/>
                            </TableCell>
                            <TableCell sx={{...(resultEntry.fastestLap !== "" && {color: 'white',})}}>{resultEntry.name}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLap !== "" && {color: 'white',})}}>{resultEntry.time}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLap !== "" && {color: 'white',})}}>{resultEntry.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
}

export default ResultsTable;