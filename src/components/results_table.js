import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, Typography } from '@mui/material';

function ResultsTable(props) {
    const TEAM_LOGO_BASE_LOCATION = "../assets/logos/";

    return (
      <Card className="results-table" sx={{ boxShadow: 0, paddingBottom: 5 }}>
        <Typography variant="h4" component="div">
                <strong>Results</strong>
            </Typography>
        <TableContainer component={Card} sx={{ boxShadow: 0, height:{lg:"70vh",xl:"775px"},  overflowY: "auto" }}>
            <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
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
                            hover
                            key={resultEntry.position}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                                '&.MuiTableRow-root:hover':{
                                    backgroundColor: 'lightgrey' 
                                },
                                ...(resultEntry.fastestLapRank === 1 && {
                                    '&.MuiTableRow-root:hover':{
                                        backgroundColor: '#9b0ec9' 
                                      },
                                    backgroundColor: '#9b0ec9',
                                })
                            }}
                        >
                            <TableCell component="th" scope="row" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>
                                {resultEntry.position}
                            </TableCell>
                            <TableCell align="center" sx={{ paddingX: 0}}>
                                <img className='team-logo' alt={resultEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/logos/' + resultEntry.teamLogoUri + '.png'}/>
                            </TableCell>
                            <TableCell sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.name}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.time}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Card>
    );
}

export default ResultsTable;