"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatesByWeekOrMonth = void 0;
const getDatesByWeekOrMonth = (weekOrMonth, start, end) => {
    const currentDate = new Date();
    let startDate;
    let endDate;
    switch (weekOrMonth) {
        case 'week':
            const currentDayOfWeek = currentDate.getDay();
            startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - (currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1));
            endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 6);
            break;
        case 'month':
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            break;
        case 'today':
            startDate = new Date(currentDate);
            endDate = new Date(currentDate);
            break;
        case 'custom':
            if (!start || !end) {
                throw new Error('For "custom" type, both start and end dates must be provided.');
            }
            startDate = new Date(start);
            endDate = new Date(end);
            if (startDate > endDate) {
                throw new Error('Start date must be before end date.');
            }
            const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 90) {
                throw new Error('The date range should not exceed 3 months.');
            }
            break;
        default:
            throw new Error('Invalid option. Please choose "week", "month", or "today".');
    }
    const dates = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date).toISOString().split('T')[0]);
    }
    return dates;
};
exports.getDatesByWeekOrMonth = getDatesByWeekOrMonth;
//# sourceMappingURL=date.helper.js.map