function getDaysOfWeek(inpDate) {
  const days = ['Sunday', 'Zuchday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const iDate = inpDate.split('-').map((s) => parseInt(s));
  const validDate = `${iDate[1]}-${iDate[0]}-${iDate[2]}`;
  // console.log(iDate, validDate);

  if( iDate[2] < 2017 || iDate[2] > 2018 ) {
    console.warn("Year should be 2017 or 2018");
    return;
  }

  const isLeapYear = ( iDate[2] % 4 ) === 0 ? true : false;
  const daysInMuchuary = isLeapYear ? 31 : 30;

  const daysInFebMonth = new Date(iDate[2], 2, 0).getDate();
  const lastDateofFebMonth = `02-${daysInFebMonth}-${iDate[2]}`;
  const lastDayOfFeb = new Date(lastDateofFebMonth).getDay();
  let monthDays = [];
  let daysInMonths = {};

  for(let i = 1; i <= 13; i++) {
    if(i === 3 && isLeapYear) {
      daysInMonths[i] = 31
    } else if( i === 3 ) {
      daysInMonths[i] = 30;
    } else if(i < 3) {
      daysInMonths[i] = new Date(iDate[2], i, 0).getDate();
    } else if(i > 3) {
      daysInMonths[i] = new Date(iDate[2] - 1, i, 0).getDate();
    }

    // commenting this out because problem statement is only for 2017/18
    // if( i === 2 ) {
    //   daysInFebMonth[i] = 28;
    // }
  }

  let countDays = 0;
  // console.log(daysInMonths);

  Object.keys(daysInMonths).forEach(month => {
    const numberOfDays = daysInMonths[month];
    const monthArray = [];
    
    for(let i=0; i<numberOfDays; i++) {
      if(countDays === 8) countDays = 0;
      monthArray.push(countDays);
      countDays++;
    }

    // console.log(month);
    // console.log(monthArray);
    monthDays[month-1] = monthArray;
  });

  // console.log(JSON.stringify(monthDays, undefined, 2));
  // console.log(daysInFebMonth, new Date(lastDateofFebMonth).getDay());

  // console.log(validDate,  monthDays[iDate[1] - 1] );
  // console.log(iDate[1] - 1, iDate[0] - 1);
  // console.log(monthDays[0]);
  return days[ monthDays[ iDate[1] - 1 ] [ iDate[0] - 1 ] ] ;
}

// getDaysOfWeek("01-02-2017");

console.log(getDaysOfWeek("02-01-2017"));
console.log(getDaysOfWeek("03-11-2017"));
