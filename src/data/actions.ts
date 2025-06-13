export default {
    start: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
    hero: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
    movement: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
        {
            phase: 'Your Movement Phase',
            title: 'Normal Move',
            desc: 'Declare: Pick a friendly unit that is not in combat to use this ability. Effect: That unit can move a distance up to its Move characteristic. That unit cannot move into combat during any part of that move. Keywords: CORE, MOVE',
        },
        {
            phase: 'Your Movement Phase',
            title: 'Retreat',
            desc: "Declare: Pick a friendly unit that is in combat to use thisability. Effect: Inflict D3 mortal damage on that unit. Thatunit can move a distance up to its Move characteristic. Thatunit can most through the combat ranges of any enemy unitsbut cannot end that move within an enemy unit's combatrange. Keywords: CORE, RETREAT, MOVE",
        },
        {
            phase: 'Your Movement Phase',
            title: 'Run',
            desc: 'Declare: Pick a friendly unit that is not in combat to usethis ability. Effect: Make a run roll of D6. That unit canmove a distance up to its Move characteristic added to therun roll. That unit cannot move into combat during any part of that move. Keywords: CORE, RUN, MOVE',
        },
        {
            phase: 'Reaction: You declared a RUN ability 1CP',
            title: 'At the Double',
            desc: 'Used By: The unit using the RUN ability. ability. Effect: Do not make a run roll as part of that RUN ability. Instead, add 6" to that unit\'s Move characteristic to determine the distance each model in that unit can move as part of that RUN ability.',
        },
        {
            phase: 'Enemy Movement Phase 1CP',
            title: 'Redeploy',
            desc: ' Declare: Pick a friendly unit that is not in combat to use this ability. Effect: Each model in that unit can move to D6". That move cannot pass through or end within the combat range of an enemy unit. Keywords: RUN, MOVE',
        },
    ],
    shooting: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
    charge: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
    combat: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
    end: [
        {
            phase: 'Passive',
            title: 'Fly',
            desc: 'Effect: As this unit moves, it ignores other models, terrain features and the combat ranges of enemy units. it cannot end its move in combat unless specified in the ability that allowed it to move. Ignore any vertical distance moved for this unit.',
        },
    ],
};
