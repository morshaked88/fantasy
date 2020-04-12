import React from 'react';
import styled from 'styled-components';
import * as ReactBootsStrap from 'react-bootstrap';

const Table = () => {

    const teams = [
        { postion: '1', club: 'Tigers', games: '21', won: '20', lost: '0', draw: '1', points: '61' },
        { postion: '2', club: 'Vikings', games: '21', won: '18', lost: '1', draw: '2', points: '56' },
        { postion: '3', club: 'Pokemons', games: '20', won: '18', lost: '2', draw: '0', points: '54' },
        { postion: '4', club: 'RedHead', games: '21', won: '15', lost: '3', draw: '3', points: '48' },
        { postion: '5', club: 'BB Kings', games: '21', won: '12', lost: '5', draw: '4', points: '40' },
        { postion: '6', club: 'Final Road', games: '20', won: '6', lost: '4', draw: '10', points: '28' },
        { postion: '7', club: 'CocoBongo', games: '21', won: '6', lost: '8', draw: '7', points: '25' },
        { postion: '8', club: 'Trumps', games: '21', won: '1', lost: '18', draw: '2', points: '5' }
    ]

    const renderTeams = (team, index) => {
        return (
            <tr key={index}>
                <td>{team.postion}</td>
                <td>{team.club}</td>
                <td>{team.games}</td>
                <td>{team.won}</td>
                <td>{team.lost}</td>
                <td>{team.draw}</td>
                <td>{team.points}</td>
            </tr>
        )
    }

    return (
        <Box>
            <Title>Teams Table</Title>
            <ReactBootsStrap.Table striped bordered style={{ color: '#eee', width: '90%' }}>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Club</th>
                        <th>Games</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Draw</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(renderTeams)}
                </tbody>
            </ReactBootsStrap.Table>
        </Box>
    )
};

export default Table;


const Title = styled.div`
color: #eee;
text-transform: uppercase;
text-align: center;
font-family: 'Archivo Black', sans-serif;
font-size: 2rem;
margin: 1.8rem 0;
`;

const Box = styled.div`
width: 100%;
height: 100%;
`;