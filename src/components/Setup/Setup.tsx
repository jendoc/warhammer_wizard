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
import React from 'react';
import battlefieldAPath from '../../assets/battlefield_a.jpg';
import battlefieldBPath from '../../assets/battlefield_b.jpg';
import { Link } from 'react-router';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const steps = [
    {
        label: 'Roll off',
        description: (
            <>
                The winner of the roll off chooses who is the
                <strong> attacker</strong> and who is the
                <strong> defender</strong>.
            </>
        ),
    },
    {
        label: 'Determine realm',
        description: (
            <>
                The <strong> defender</strong> chooses which side of the realm
                battlefield the players will fight on:{' '}
                <strong> Aqshy or Ghyran.</strong>
            </>
        ),
    },
    {
        label: 'Determine territories',
        description: (
            <>
                The <strong>defender</strong> picks one of the deployment maps
                below and chooses which territory belongs to which player.
                <img className='battle__map' src={battlefieldAPath} />
                <img className='battle__map' src={battlefieldBPath} />
            </>
        ),
    },
    {
        label: 'Deploy terrain',
        description: (
            <>
                The <strong> defender</strong> sets up their terrain features,
                followed by the <strong> attacker</strong>. <br /> Each terrain
                feature must be set up wholly within friendly territory, more
                than 6" from all other terrain features and more than 3" from
                both <strong> long</strong> battlefield edges and enemy
                territory.
                <Paper
                    elevation={2}
                    style={{ fontSize: '10px', padding: '5px', margin: '5px' }}
                >
                    <InfoOutlineIcon
                        style={{ height: '10px', width: '10px' }}
                    />{' '}
                    Terrain features cannot be set up on top of the objectives
                    (either wholly or partially).
                </Paper>
            </>
        ),
    },
    {
        label: 'Deploy armies',
        description: (
            <>
                Do not deploy armies as described in the Core Rules. Instead,
                the <strong> attacker</strong> sets up <strong> all</strong> the
                units in their army first, followed by the{' '}
                <strong> defender.</strong> Each unit must be set up wholly
                within friendly territory and more than 6" from enemy territory.
            </>
        ),
    },
    {
        label: 'Prepare spearhead deck',
        description: (
            <>
                <p>
                    Shuffle the twist deck that corresponds to the side of the
                    battlefield the players are fighting on and place it face
                    down next to the battlefield{' '}
                    <i>(the other twist deck is not used).</i>
                </p>
                <p>
                    Each player takes one battle tactic deck, shuffles it, and
                    places it face down where they can reach it during battle.
                </p>
            </>
        ),
    },
];

function Setup() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    // add form to add faction to player 1 and player 2
    // player context?

    return (
        <>
            <Box style={{ backgroundColor: '#fff', padding: '10px' }}>
                <Typography variant='h6'>🔥 FIRE AND JADE SETUP 🐲</Typography>
                <Stepper activeStep={activeStep} orientation='vertical'>
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                                {step.description}
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
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>
                            Setup completed - you're prepared for battle! 📜
                        </Typography>
                        <Button variant='outlined' sx={{ mt: 1, mr: 1 }}>
                            <Link to='/battle'>Round 1</Link>
                        </Button>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}{' '}
                <Link to='/'> Return Home</Link>
            </Box>
        </>
    );
}

export default Setup;
