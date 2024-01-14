var moment = require('moment');

function getQuarterByWeek(week, year){ // Nhập thứ tự tuần và năm, trả về thứ tự quý trong năm
    const date = moment().year(year).week(week);
    const quarter = date.quarter();
    return quarter
}

function checkFirstWeekOfQuarter(week, year){ // Nhập vào tuần, quý trả kiểm tra tuần đó có phải tuần đầu tiên của quý không ?

    const date    = moment().year(year).week(week);
    const quarter = date.quarter();
    const end_week_of_quater_before = getEndWeekOfQuarter(quarter - 1, year)
    const start_week_of_quater = end_week_of_quater_before + 1

    if(week == start_week_of_quater) return true
    return false
}

function getEndWeekOfQuarter(quarter_number, year){ // Nhập vào năm, quý, trả về tuần cuối cùng của quý đó
    // Hàm này sẽ trả về tuần cuối cùng của quý, nếu tuần cuối cùng của quý đó là thứ 7 hoặc chủ nhật thì sẽ trừ đi 3 ngày
    // để tính ra tuần cuối cùng của quý đó

    let endDateOfQuarter    = moment().quarter(quarter_number).set('year', year).endOf('quarter');

    let weekday             = endDateOfQuarter.day()
    if(weekday == 0 || weekday == 6) { // 0 - Chủ nhật, 6 - Thứ 7
        endDateOfQuarter = endDateOfQuarter.subtract(3, 'days')
    }

    let endWeekOfQuater     = endDateOfQuarter.isoWeek()
    if(quarter_number <= 3) return endWeekOfQuater
    if(quarter_number == 4) return getEndWeekOfYear(year)
}

function getEndWeekOfYear(year){ // Nhập vào năm trả về tuần cuối cùng của năm
    let endDateOfYear    = moment().set('year', year).endOf('year');

    let weekday          = endDateOfYear.day()
    if(weekday == 0 || weekday == 6) { // 0 - Chủ nhật, 6 - Thứ 7
        endDateOfYear = endDateOfYear.subtract(3, 'days')
    }

    let EndWeekOfYear  = endDateOfYear.isoWeeksInYear()
    return EndWeekOfYear
}

function getWeekFromDate(date){ // Nhập vào ngày trả về tuần của ngày đó
    let week = moment(date).isoWeek()
    return week
}

module.exports = {
    getQuarterByWeek,
    checkFirstWeekOfQuarter,
    getEndWeekOfQuarter,
    getEndWeekOfYear,
    getWeekFromDate
}