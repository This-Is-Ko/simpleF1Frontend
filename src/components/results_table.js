import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function ResultsTable(props) {
    const [showExtra, setShowExtra] = React.useState(false);

    const handleShowExtra = (event) => {
        setShowExtra(event.target.checked);
    }

    return (
      <Card className="results-table" sx={{ boxShadow: 0, paddingBottom: 5 }}>
        <Typography variant="h4" component="div">
                <strong>Results</strong>
        </Typography>
        <FormGroup>
            <FormControlLabel sx={{margin: "auto"}} control={<Switch sx={{margin: "auto"}} checked={showExtra} onChange={handleShowExtra}/>} label="Show more" />
        </FormGroup>
        <TableContainer component={Card} sx={{ boxShadow: 0, height:{lg:"70vh",xl:"775px"},  overflowY: "auto" }}>
            <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
                <TableHead>
                    {showExtra ? 
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Points</TableCell>
                            <TableCell align="right">Change</TableCell>
                            <TableCell align="right">Grid</TableCell>
                        </TableRow>
                        : 
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Points</TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody>
                    {props.raceResults.map((resultEntry) => (
                        showExtra ? 
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
                            <TableCell sx={{minWidth:"115px", ...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.name}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.time}</TableCell>
                            <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.points}</TableCell>
                            {
                                resultEntry.positionChange > 0 ? 
                                    <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>
                                        <img className='position-change-arrow' alt={resultEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/images/green-up.png'}/>
                                        {resultEntry.positionChange}
                                    </TableCell>
                                :
                                (
                                    resultEntry.positionChange < 0 ? 
                                    <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>
                                        <img className='position-change-arrow' alt={resultEntry.teamLogoAlt} src={process.env.PUBLIC_URL + '/assets/images/red-down.png'}/>
                                        {resultEntry.positionChange * -1}
                                    </TableCell>
                                    :
                                    <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>
                                        {resultEntry.positionChange}
                                    </TableCell>
                                )

                            }
                            <TableCell align="right" sx={{...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.gridPosition}</TableCell>
                        </TableRow>
                        :
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
                            <TableCell sx={{minWidth:"115px", ...(resultEntry.fastestLapRank === 1 && {color: 'white',})}}>{resultEntry.name}</TableCell>
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