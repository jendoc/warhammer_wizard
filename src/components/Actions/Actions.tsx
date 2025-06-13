import ActionCard from '../ActionCard/ActionCard';
import {
    OutlinedFlag,
    Security,
    OpenInFull,
    Moving,
    DirectionsRun,
    LocalFireDepartment,
    DoneOutline,
    AutoAwesome
} from '@mui/icons-material';
import actions from '../../data/actions';

interface Action {
    desc: string;
    phase: string;
    title: string;
}

function Actions({ phase }: { phase: number }) {
    const phaseMap: Record<number, { name: string; color: string }> = {
        0: { name: 'start', color: '#040100' },
        1: { name: 'hero', color: '#A39048' },
        2: { name: 'movement', color: '#808080' },
        3: { name: 'shooting', color: '#265670' },
        4: { name: 'charge', color: '#AA682E' },
        5: { name: 'combat', color: '#871C1D' },
        6: { name: 'end', color: '#614679' },
    };

    const phaseIconMap: Record<number, React.ReactNode> = {
    0: <OutlinedFlag />,
    1: <Security />,
    2: <OpenInFull />,
    3: <Moving />,
    4: <DirectionsRun />,
    5: <LocalFireDepartment />,
    6: <DoneOutline />,
};

    const current = phaseMap[phase] || { name: '', color: '#fff' };
    const actionList = actions[current.name];
    const icon = phaseIconMap[phase] || <AutoAwesome />;

    if (!actionList || actionList.length === 0) {
        return null;
    }

    return (
        <>
            {actionList.map((action: Action, index: number) => (
                <ActionCard
                    key={index}
                    headerColor={current.color}
                    phase={action.phase}
                    title={action.title}
                    icon={icon}
                >
                    {action.desc}
                </ActionCard>
            ))}
        </>
    );
}

export default Actions;
