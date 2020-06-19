function getDayName(dateString) {
    // Write your code here
    const dayName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    
    return dayName[(new Date(dateString)).getDay()];
}