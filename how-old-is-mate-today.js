function calculateAge(birthDate) {
    const dateParts = birthDate.split('-').map(part => parseInt(part));
    const birthYear = dateParts[0];
    const birthMonth = dateParts[1];
    const birthDay = dateParts[2];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths = 12 + ageMonths;
        if (ageDays < 0) {
            ageMonths--;
            ageDays = daysInMonth(currentMonth - 1, currentYear) + ageDays;
        }
    } else if (ageMonths === 0 && ageDays < 0) {
        ageYears--;
        ageMonths = 11;
        ageDays = daysInMonth(currentMonth - 1, currentYear) + ageDays;
    } else if (ageDays < 0) {
        ageMonths--;
        ageDays = daysInMonth(currentMonth - 1, currentYear) + ageDays;
    }

    return `Máté is ${ageYears} year${ageYears > 1 ? 's' : ''} ${ageMonths} month${ageMonths > 1 ? 's' : ''} and ${ageDays} day${ageDays > 1 ? 's' : ''} old.`;
}

/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} month - The month (0-11).
 * @param {number} year - The year.
 * @return {number} The number of days in the given month and year.
 */
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

document.addEventListener('DOMContentLoaded', function() {
    const birthDate = '2022-01-21';
    const ageString = calculateAge(birthDate);
    console.log(ageString);
    document.getElementById('mate-age').innerHTML = ageString;
});
