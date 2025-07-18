"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTimeDifferenceV2 = calculateTimeDifferenceV2;
function calculateTimeDifferenceV2(lat1, lon1, lat2, lon2, unit = 'K') {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
        dist = dist * 1.609344;
    }
    if (unit == 'N') {
        dist = dist * 0.8684;
    }
    dist = dist + dist * 0.3;
    const v = 20;
    let timeDifference = (dist / v) * 60;
    if (timeDifference < 5) {
        timeDifference = 5;
    }
    return { time: timeDifference, distance: dist };
}
//# sourceMappingURL=time-calculator.helper.js.map