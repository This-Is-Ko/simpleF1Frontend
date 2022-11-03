import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

import AlfaRomeo from './../assets/logos/AlfaRomeo.png'
import AlphaTauri from './../assets/logos/AlphaTauri.png'
import AlpineF1Team from './../assets/logos/AlpineF1Team.png'
import AstonMartin from './../assets/logos/AstonMartin.png'
import Ferrari from './../assets/logos/Ferrari.png'
import HaasF1Team from './../assets/logos/HaasF1Team.png'
import McLaren from './../assets/logos/McLaren.png'
import Mercedes from './../assets/logos/Mercedes.png'
import RedBull from './../assets/logos/RedBull.png'
import Williams from './../assets/logos/Williams.png'

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
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {resultEntry.position}
                            </TableCell>
                            <TableCell align="center" sx={{ paddingX: 0}}>
                                <img className='team-logo' alt={resultEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/logos/' + resultEntry.teamLogoUri + '.png'}/>
                            </TableCell>
                            <TableCell>{resultEntry.name}</TableCell>
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