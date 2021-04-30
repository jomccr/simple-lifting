import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import getPrograms from './data.js';

let availablePrograms = getPrograms();

const buildWorkoutString = (workoutItem) => {
    let workoutString = ""; // build off of this

    if (workoutItem.counts == null) {
        workoutString = `${workoutItem.movement}: `
            + `${workoutItem.repeat}x${workoutItem.count}`
            + `${workoutItem.toFailure ? "+" : ""}`
            + `${workoutItem.percent ? " @ " + workoutItem.percent*100 + "%" : ""}`;
    } else {
        let workoutSets = workoutItem.counts.map((set) => {
            return (
                `${set.repeat}x${set.count}`
                + `${set.toFailure ? "+" : ""}`
                + `${set.percent ? " @ " + set.percent : ""}`
            )
        }).join(', ');
        workoutString = `${workoutItem.movement}: ${workoutSets}`
    }

    return <Typography>{ workoutString }</Typography>;
}

const buildSingleCalendarCard = (dayNumber, dayOfWeek, workout, description = "") => {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography variant="h6">
                    { dayOfWeek } { workout == null ? "(Rest Day)" : "(" + description + ")" }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    { workout == null ? "Rest Day" : workout.map((workoutItem) => buildWorkoutString(workoutItem)) }
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

const ProgramContainer = () => {
    let deck = [];

    for (let i = 0; i < availablePrograms.length; ++i) {
        let calendarCards = [];
        const routineName = availablePrograms[i].name;

        for (let j = 0; j < availablePrograms[i].routine.length; ++j) {
            const routineItem = availablePrograms[i].routine[j];
            calendarCards.push(buildSingleCalendarCard(routineItem.id, routineItem.day, routineItem.workout, routineItem.description))
        }

        deck.push({ name: routineName, cards: calendarCards })
    }
    
    return (
        <div>
            <Typography variant="h2">
                Simple Lifting
            </Typography>
            <hr />
            { deck[0].cards }
        </div>
    );
}

export default ProgramContainer;
