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
    const [battleComplete, setBattleComplete] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    // const [activePlayer, setActivePlayer] = React.useState(0);
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
        if (roundCount === 4) {
            setBattleComplete(true);
        } else {
            setRoundCount((prev) => prev + 1);
            setActiveStep(0);
        }
    };

    // const handlePlayerChange = (evt) => {
    //     setActivePlayer(evt.target.value as number);
    // };

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
                            backgroundColor: '#F8D882cc',
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
                        player has the fewest victory points is the underdog for
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
                                backgroundColor: '#F8D882cc',
                            }}
                        >
                            <InfoOutlineIcon
                                style={{ height: '10px', width: '10px' }}
                            />{' '}
                            {getUnderdogMessage(player1Vp, player2Vp)}
                        </Paper>
                        Each player gets 4 COMMAND POINTS to spend this round.
                        The underdog gets an additional point.
                    </Typography>

                    <Typography component='div'>
                        3. <strong> Start of Turn Abilites</strong> The active
                        player can use a Start of Turn ability.
                    </Typography>
                    <Typography component='div'>
                        4. <strong> Choose Battle Tactic</strong> Can't be done
                        if player chose to take a double turn.
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
                    {/* <FormControl fullWidth>
                        <InputLabel id='active-player-label'>
                            Active Player
                        </InputLabel>
                        <Select
                            labelId='active-player-label'
                            value={activePlayer}
                            label='Active Player'
                            onChange={handlePlayerChange}
                        >
                            <MenuItem value={1}>Player 1</MenuItem>
                            <MenuItem value={2}>Player 2</MenuItem>
                        </Select>
                    </FormControl> */}
                    <Typography component='div'>
                        2. <strong> Determine the Underdog.</strong> Whichever
                        player has the fewest victory points is the underdog for
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
                                backgroundColor: '#F8D882cc',
                            }}
                        >
                            <InfoOutlineIcon
                                style={{ height: '10px', width: '10px' }}
                            />{' '}
                            {getUnderdogMessage(player1Vp, player2Vp)}
                        </Paper>
                        Each player gets 4 COMMAND POINTS to spend this round.
                        The underdog gets an additional point.
                    </Typography>
                    <Typography component='div'>
                        3. <strong> Start of Turn Abilites</strong> Activate any
                        start of turn abilities.
                    </Typography>
                </>
            ),
        },
        {
            label: 'Hero Phase',
            description: (
                <>
                    Each player may perform 1 HERO ability, starting with the
                    active player.
                </>
            ),
        },
        {
            label: 'Movement Phase',
            description: (
                <>
                    Each player may perform 1 MOVEMENT ability, starting with
                    the active player.
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
                            backgroundColor: '#F8D882cc',
                        }}
                    >
                        <InfoOutlineIcon
                            style={{ height: '10px', width: '10px' }}
                        />{' '}
                        Remember that you may not end your regular move action
                        in your oponent's combat range.
                    </Paper>
                </>
            ),
        },
        {
            label: 'Shooting Phase',
            description: (
                <>
                    The active player performs 1 SHOOTING ability.
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
                            backgroundColor: '#F8D882cc',
                        }}
                    >
                        <InfoOutlineIcon
                            style={{ height: '10px', width: '10px' }}
                        />{' '}
                        Champions get +1 to shooting attacks.
                    </Paper>
                </>
            ),
        },
        {
            label: 'Charge Phase',
            description: <>The active player performs 1 CHARGE ability.</>,
        },
        {
            label: 'Combat Phase',
            description: (
                <>
                    The active player performs 1 COMBAT ability.{' '}
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
                            backgroundColor: '#F8D882cc',
                        }}
                    >
                        <InfoOutlineIcon
                            style={{ height: '10px', width: '10px' }}
                        />{' '}
                        Units are considered to be in combat range if they are
                        within 3" of eachother.
                    </Paper>
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
                            backgroundColor: '#F8D882cc',
                        }}
                    >
                        <InfoOutlineIcon
                            style={{ height: '10px', width: '10px' }}
                        />{' '}
                        Champions get +1 to weapon attacks.
                    </Paper>
                </>
            ),
        },
        {
            label: 'End of Turn',
            description: (
                <>
                    The active player may perform an END OF TURN ability. Check
                    for Objective Control: Who has the most 'Bravery'
                </>
            ),
        },
    ];

    const scrollToRef = useRef<HTMLDivElement>(null);

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
                                    onClick={() => {
                                        if (scrollToRef.current) {
                                            scrollToRef.current.scrollIntoView();
                                        }
                                    }}
                                >
                                    See abilites
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
                        {battleComplete ? (
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
                        ) : (
                            <>
                                <Typography>
                                    Round {roundCount} complete!
                                </Typography>
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
                                        onClick={handleReset}
                                    >
                                        {roundCount === 4
                                            ? 'Complete Battle'
                                            : 'Next Round'}
                                    </Button>
                                </div>
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
