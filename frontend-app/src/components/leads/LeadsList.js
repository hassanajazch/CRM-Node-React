import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    table: {
        minWidth: 650,
    },
    editButton: {
        height: '10px',
    },
    tableHead: {
        fontWeight: '600',
    },
}));

/**
 * UserList component for showign and editing users
 * @returns {JSX.Element}
 * @constructor
 */
const LeadsList = (props) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHead} align="left">Client Name</TableCell>
                        <TableCell className={classes.tableHead} align="left">Client Email</TableCell>
                        <TableCell className={classes.tableHead} align="left">Phone</TableCell>
                        <TableCell className={classes.tableHead} align="left">Edit</TableCell>
                        <TableCell className={classes.tableHead} align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.leadsList.map((lead) => (
                        <TableRow key={lead._id}>
                            <TableCell component="th" scope="row">
                                {lead.name}
                            </TableCell>
                            <TableCell align="left">{lead.email}</TableCell>
                            <TableCell align="left">{lead.phone}</TableCell>
                            <TableCell align="left">
                                <IconButton
                                    aria-label="edit"
                                    className={classes.margin}
                                    onClick = {() => props.editLead(lead)}
                                >
                                    <EditIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                            <TableCell align="left">
                                <IconButton
                                    aria-label="edit"
                                    className={classes.margin}
                                    onClick = {() => props.deleteLead(lead._id)}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LeadsList;