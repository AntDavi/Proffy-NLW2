const Databasse = require('./db')

Database.then((db) => {
    proffys = {
        name: "Anthony Davi", 
        avatar: "https://avatars2.githubusercontent.com/u/69051403?s=460&u=374e5e51ecc3b742364e5210d0d6c1ce1c064b23&v=4", 
        whatsapp: "85 999999999", 
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus, est auctor feugiat convallis, risus felis accumsan mi, quis tincidunt arcu mi at elit.", subject: "História", 
    }

    classValue = {
        subject: "História", 
        cost: "40", 
    }

    classSchedule = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1220,
        },
    ]
const selectedProffys = await db.all("SELECT * FROM proffys")

 const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
`)

})