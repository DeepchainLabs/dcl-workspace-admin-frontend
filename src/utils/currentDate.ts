const currentDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const currentFormattedDate = `${dayNames[currentDate.getDay()]}, ${currentDate.getDate()} ${
        monthNames[currentDate.getMonth()]
    }, ${currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`;