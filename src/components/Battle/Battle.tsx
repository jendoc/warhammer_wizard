import {
    Stepper,
    Button,
    Box,
    Step,
    StepLabel,
    StepContent,
    Typography,
    Paper,
    Tooltip,
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
    const getUnderdogMessage = (vp1: number, vp2: number) => {
        if (vp1 < vp2) return 'Underdog: Player 1';
        if (vp2 < vp1) return 'Underdog: Player 2';
        return 'No underdog — the players are tied.';
    };
    const getUnderdogEmoji = (player: 1 | 2) => {
        if (player1Vp === player2Vp) return null; // No underdog

        const isUnderdog =
            player === 1 ? player1Vp < player2Vp : player2Vp < player1Vp;

        return isUnderdog ? (
            <Tooltip arrow title='Underdog – fewer victory points this round'>
                <span role='img' aria-label='underdog'>
                    {' '}
                    🐶
                </span>
            </Tooltip>
        ) : null;
    };

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
                        sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '5px',
                                fontSize: '10px',
                                padding: '5px',
                                margin: '5px',
                                maxWidth: 'fit-content',
                                backgroundColor: '#F8D882cc'
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
                        <Paper
                            elevation={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '5px',
                                fontSize: '10px',
                                padding: '5px',
                                margin: '5px',
                                maxWidth: 'fit-content',
                                backgroundColor: '#F8D882cc'
                            }}
                        >
                            <InfoOutlineIcon
                                style={{ height: '10px', width: '10px' }}
                            />{' '}
                            {getUnderdogMessage(player1Vp, player2Vp)}
                        </Paper>
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
                        <Paper
                            elevation={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '5px',
                                fontSize: '10px',
                                padding: '5px',
                                margin: '5px',
                                maxWidth: 'fit-content',
                                backgroundColor: '#F8D882cc'
                            }}
                        >
                            <InfoOutlineIcon
                                style={{ height: '10px', width: '10px' }}
                            />{' '}
                            {getUnderdogMessage(player1Vp, player2Vp)}
                        </Paper>
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
        <div className='battle'>
            <Box
                style={{
                    backgroundColor: '#ffffffe6',
                    padding: '10px',
                    borderRadius: '10px',
                    margin: '0 10px',
                }}
            >
                <Typography variant='h6'>🔥 FIRE AND JADE BATTLE 🐲</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p>ROUND {roundCount}</p>
                    <p>
                        Player 1 VP: {player1Vp} {getUnderdogEmoji(1)}
                    </p>
                    <p>
                        Player 2 VP: {player2Vp} {getUnderdogEmoji(2)}
                    </p>
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
                                {index === 0 && (
                                    <Typography
                                        sx={{ mt: 2 }}
                                        color='secondary'
                                    ></Typography>
                                )}
                                <Button
                                    onClick={() =>
                                        scrollToRef?.current.scrollIntoView()
                                    }
                                >
                                    See actions
                                </Button>
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
                {activeStep === steps.length && (
                    <Paper
                        elevation={2}
                        sx={{
                            p: 3,
                            borderRadius: '10px',
                            marginTop: '10px',
                            width: '80vw',
                        }}
                    >
                        {roundCount !== 4 ? (
                            <>
                                <Typography>Round complete!</Typography>
                                <div style={{ display: 'flex' }}>
                                    <Button
                                        onClick={() =>
                                            setPlayer1Vp(player1Vp + 1)
                                        }
                                    >
                                        Player 1 +
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            setPlayer2Vp(player2Vp + 1)
                                        }
                                    >
                                        Player 2 +
                                    </Button>
                                    <Button
                                        variant='outlined'
                                        sx={{ mt: 1, mr: 1, ml: 'auto' }}
                                        onClick={() => {
                                            handleReset();
                                            setRoundCount(roundCount + 1);
                                        }}
                                    >
                                        Next round
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Typography variant='h6'>
                                    BATTLE COMPLETE
                                </Typography>
                                <Typography>
                                    {player1Vp === player2Vp
                                        ? 'The game is a TIE! 🫱🏿‍🫲🏽'
                                        : `WINNER: ${
                                              player1Vp > player2Vp
                                                  ? 'PLAYER 1 💪'
                                                  : 'PLAYER 2 💪'
                                          }`}
                                </Typography>
                            </>
                        )}
                    </Paper>
                )}
            </Box>
            <section
                className='battle__actions'
                id='battle__actions'
                ref={scrollToRef}
                style={{
                    marginTop: '10px',
                    marginBottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#fff',
                    rowGap: '10px',
                }}
            >
                <Actions phase={activeStep} />
            </section>
        </div>
    );
}

export default Battle;
