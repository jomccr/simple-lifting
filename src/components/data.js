// TODO - replace this with an actual remote CRUD API 
const getPrograms = () => {
    return (
        [
            { 
                id: 0,
                name: "Basic", 
                routine: [

                    { 
                        id: 0,
                        day: "Sunday", 
                        workout: null
                    },

                    {
                        id: 1,
                        day: "Monday",
                        description: "Push",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Bench Press", 
                                percent: 0.5,
                                repeat: 5,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Overhead Press", 
                                percent: 0.6,
                                repeat: 3,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 2, 
                                movement: "Tricep Extensions", 
                                percent: null,
                                repeat: 5,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 3, 
                                movement: "Dips", 
                                percent: null,
                                repeat: 3,
                                count: 5,
                                toFailure: false
                            }
                        ]
                    },

                    {
                        id: 2,
                        day: "Tuesday",
                        description: "Pull",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Lat Pull Down", 
                                percent: null,
                                repeat: 5,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Barbell Rows", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 3, count: 5, toFailure: false }
                                ]
                            },
                            { 
                                id: 2, 
                                movement: "Dumbell Curls", 
                                percent: null,
                                repeat: 4,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 3, 
                                movement: "Dumbell Rows", 
                                percent: null,
                                repeat: 3,
                                count: 5,
                                toFailure: false
                            }
                        ]
                    }, 

                    {
                        id: 3,
                        day: "Wednesday",
                        description: "Legs",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Bodyweight Lunges", 
                                percent: null,
                                repeat: 3,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Barbell Squat", 
                                percent: 0.6,
                                repeat: 5,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 2, 
                                movement: "Leg Extensions", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 2, count: 5, toFailure: true }
                                ]
                            },
                            { 
                                id: 3, 
                                movement: "Hamstring Curls", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 2, count: 5, toFailure: true }
                                ]
                            }
                        ]
                    },

                    {
                        id: 4,
                        day: "Thursday",
                        description: "Push",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Bench Press", 
                                percent: 0.5,
                                repeat: 5,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Overhead Press", 
                                percent: 0.6,
                                repeat: 3,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 2, 
                                movement: "Tricep Extensions", 
                                percent: null,
                                repeat: 5,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 3, 
                                movement: "Dips", 
                                percent: null,
                                repeat: 3,
                                count: 5,
                                toFailure: false
                            }
                        ]
                    },

                    {
                        id: 5,
                        day: "Friday",
                        description: "Pull",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Lat Pull Down", 
                                percent: null,
                                repeat: 5,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Barbell Rows", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 3, count: 5, toFailure: false }
                                ]
                            },
                            { 
                                id: 2, 
                                movement: "Dumbell Curls", 
                                percent: null,
                                repeat: 4,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 3, 
                                movement: "Dumbell Rows", 
                                percent: null,
                                repeat: 3,
                                count: 5,
                                toFailure: false
                            }
                        ]
                    }, 

                    {
                        id: 6,
                        day: "Saturday",
                        description: "Legs",
                        workout: [
                            { 
                                id: 0, 
                                movement: "Bodyweight Lunges", 
                                percent: null,
                                repeat: 3,
                                count: 10,
                                toFailure: true
                            },
                            { 
                                id: 1, 
                                movement: "Barbell Squat", 
                                percent: 0.6,
                                repeat: 5,
                                count: 5,
                                toFailure: true
                            },
                            { 
                                id: 2, 
                                movement: "Leg Extensions", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 2, count: 5, toFailure: true }
                                ]
                            },
                            { 
                                id: 3, 
                                movement: "Hamstring Curls", 
                                percent: null,
                                counts: [
                                    { repeat: 2, count: 10, toFailure: true },
                                    { repeat: 2, count: 5, toFailure: true }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    );
}

export default getPrograms;
