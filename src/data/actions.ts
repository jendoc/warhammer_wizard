export default {
    start: [
        {
            phase: 'Start of Any Turn',
            title: 'Activate Place of Power',
            desc: "Declare: Pick a friendly HERO within 3\" of any Places of Power to use this ability. Effect: Roll a die. On a 1, inflict D3 mortal damage on that HERO. On a 2+: if that HERO is a WIZARD or PRIEST, add 1 to casting rolls or chanting rolls for that HERO this turn. If that HERO is not a WIZARD or PRIEST, they can use the 'Unbind or 'Banish Manifestation' ability this turn if they had WIZARD (1) Keywords: CORE",
        },
        {
            phase: 'Once Per Battle Round, Start of Your Turn',
            title: 'Tactical Gambit',
            desc: 'You cannot use this ability if you went second in the previous battle round and chose to go first in the current battle round. Effect: Pick 1 battle tactic that you have not yet attempted. You can attempt to complete that battle tactic this turn.',
        },
    ],
    hero: [
        {
            phase: 'Your Hero Phase',
            title: 'Banish Manifestation',
            desc: 'Declare: Pick a friendly WIZARD or PRIEST to use this ability, pick a menifestation within 30" of them to be the target, then make a banishment roll of 2D6. Add 1 to the banishment roll for each additional enemy manifestation on the battlefiend after the first Effect: If the banishment roll equals or exceeds the banishment value listed on the manfestation\'s warscroll, it is banished and removed from play. You cannot pick the same manifestation as the target of this ability more than once per turn. Keywords: BANISH',
        },
        {
            phase: 'Enemy Hero Phase 1CP',
            title: 'Magical Intervention',
            desc: 'Declare: Pick a friendly WIZARD or PRIEST to use this ability. Effect: That friendly unit can use a SPELL or PRAYER ability (as appropriate) as if it were your hero phase. If you do so, subtract 1 from casting rolls or chanting rolls made as part of that ability.',
        },
        {
            phase: 'Any Hero Phase 1CP',
            title: 'Rally',
            desc: 'Declare: Pick a friendly unit that is not in combat to use this ability. Effect: Make 6 rally rolls of D6. For each 4+, you receive 1 rally point. Rally points can be spent in the following ways: - For each rally point spent, Heal (1) that unit. - You can spend a number of rally points equal to the Health characteristic of that unit to return a slain model to that unit. You can spend the rally points in any combination of the above. Unspent rally points are then lost.',
        },
        {
            phase: 'Passive',
            title: 'Musician',
            desc: "Effect: While this unit contains any musicians, if it uses the 'Rally' command, you can make one additional rally roll of D6.",
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
