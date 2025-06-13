import {
    Stepper,
    Button,
    Box,
    Step,
    StepLabel,
    StepContent,
    Typography,
    Paper,
} from '@mui/material';
import { Link } from 'react-router';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import './Battle.css';
import React, { useRef } from 'react';
import Actions from '../Actions/Actions';

function Battle() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [roundCount, setRoundCount] = React.useState(1);
    const [player1Vp, setPlayer1Vp] = React.useState(0);
    const [player2Vp, setPlayer2Vp] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = [
        {
            label: 'Start of Turn',
            description: (
                <>
                    <Typography component='div'>
                        1. <strong> Determine the Active Player.</strong> The
                        players make a roll-off called the{' '}
                        <strong> priority roll</strong> and the winner decides
                        who will take the first turn. If the roll-off is a{' '}
                        <strong> tie</strong>, the player who took the first
                        turn in the previous battle round decides who will take
                        the first turn in the current battle round.
                    </Typography>

                    <Paper
                        elevation={2}
                        style={{
                            fontSize: '10px',
                            padding: '5px',
                            margin: '5px',
                        }}
                    >
                        <InfoOutlineIcon
                            style={{ height: '10px', width: '10px' }}
                        />{' '}
                        When it is a player's turn, regardless of whether they
                        take the first or second turn, they are refferred to as
                        the active player.
                    </Paper>

                    <Typography component='div'>
                        2. <strong> Determine the Underdog.</strong> Whichever
                        player has the fewest victory points it the underdog for
                        the battle round. If the players are tied, there is no
                        underdog.
                    </Typography>

                    <Typography component='div'>
                        2. <strong> Start of Round Abilites</strong> The active
                        player can use any Start of Battle Round abilities
                        first, then their opponent can do the same.
                    </Typography>
                </>
            ),
            round1Description: (
                <>
                    <Typography component='div'>
                        1. <strong> Determine the Active Player.</strong> The
                        player who finished setting up their army first (the
                        attacker during the setup phase) will take the first
                        turn.
                    </Typography>
                    <Typography component='div'>
                        2. <strong> Determine the Underdog.</strong> Whichever
                        player has the fewest victory points it the underdog for
                        the battle round. If the players are tied{' '}
                        <i>(as they are now in the first round)</i>, there is no
                        underdog.
                    </Typography>
                    <Typography component='div'>
                        3. <strong> Start of Round Abilites</strong> The active
                        player can use any Start of Battle Round abilities
                        first, then their opponent can do the same.
                    </Typography>
                </>
            ),
        },
        {
            label: 'Hero Phase',
            description: (
                <>
                    Starting with the active player, use any HERO PHASE
                    abilities. Their opponent then does the same.
                </>
            ),
        },
        {
            label: 'Movement Phase',
            description: (
                <>
                    Starting with the active player, MOVE your units as
                    described on their warscrolls. Retreat Run Their opponent
                    then does the same.
                </>
            ),
        },
        {
            label: 'Shooting Phase',
            description: (
                <>
                    Starting with the active player, SHOOT with your units as
                    described on their warscrolls. Their opponent then does the
                    same.
                </>
            ),
        },
        {
            label: 'Charge Phase',
            description: <>Use CHARGE abilites</>,
        },
        {
            label: 'Combat Phase',
            description: (
                <>
                    Use COMBAT abilites Units are considers to be IN COMBAT if
                    they are within 3" of eachother.
                </>
            ),
        },
        {
            label: 'End of Turn',
            description: <></>,
        },
    ];

    const scrollToRef = useRef(null);

    return (
        <>
            <Box style={{ backgroundColor: '#fff', padding: '10px' }}>
                <Typography variant='h6'>🔥 FIRE AND JADE BATTLE 🐲</Typography>
                <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
                    <p>ROUND {roundCount}</p>
                    <p>Player 1 VP: {player1Vp}</p>
                    <p>Player 2 VP: {player2Vp}</p>
                </Box>
                <Link to='/'> Return Home</Link>
                <Stepper activeStep={activeStep} orientation='vertical'>
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                                {roundCount === 1 && activeStep === 0
                                    ? step.round1Description
                                    : step.description}
                                    <Button onClick={() => scrollToRef?.current.scrollIntoView()}>See actions</Button>
                                <Box sx={{ mb: 2 }}>
                                    <Button
                                        variant='contained'
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1
                                            ? 'Finish'
                                            : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && roundCount !== 4 && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Round complete!</Typography>
                        <Button onClick={() => setPlayer1Vp(player1Vp + 1)}>
                            Player 1 +
                        </Button>
                        <Button onClick={() => setPlayer2Vp(player2Vp + 1)}>
                            Player 2 +
                        </Button>
                        <Button
                            variant='outlined'
                            sx={{ mt: 1, mr: 1 }}
                            onClick={() => {
                                handleReset();
                                setRoundCount(roundCount + 1);
                            }}
                        >
                            Next round
                        </Button>
                    </Paper>
                )}{' '}
                {activeStep === steps.length && roundCount === 4 && (
                    <Paper elevation={2}>
                        <h6>BATTLE COMPLETE</h6>
                        <p>
                            WINNER:{' '}
                            {player1Vp > player2Vp ? 'PLAYER 1' : 'PLAYER 2'}
                        </p>
                    </Paper>
                )}
            </Box>
            <section className='battle__actions' id='battle__actions' ref={scrollToRef}>
                <Actions phase={activeStep}/>
            </section>
        </>
    );
}

export default Battle;
