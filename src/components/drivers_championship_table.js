import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function DriversChampionshipTable(props) {
    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 5 }}>
            <Typography variant="h4" component="div">
                <strong>Drivers' Championship</strong>
            </Typography> 
            <TableContainer component={Card} sx={{ boxShadow: 0, height:"35vh",  overflowY: "auto" }}>
                <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.driverStandings.map((driverEntry) => (
                        <TableRow
                            key={driverEntry.position}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                                '&.MuiTableRow-root:hover':{
                                    backgroundColor: 'lightgrey' 
                                }
                             }}
                            >
                            <TableCell component="th" scope="row">
                                {driverEntry.position}
                            </TableCell>
                            <TableCell align="center">
                                <img className='team-logo' alt={driverEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/logos/' + driverEntry.teamLogoUri + '.png'}/>
                            </TableCell>
                            <TableCell>{driverEntry.name}</TableCell>
                            <TableCell align="right">{driverEntry.points}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default DriversChampionshipTable;