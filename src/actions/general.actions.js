import {UPDATENAME, VALIDATENAME, PROFILEPIC} from './actions.type';

export function updateName(name) {
    return {
        type: UPDATENAME,
        data: {
            name
        }
    };
}

export function validateName() {
    return {
        type: VALIDATENAME,
    };
}

export function profilePic(pic) {
    return {
        type: PROFILEPIC,
        data: {
            pic
        }
    };
}

export function dynamicDate(current, previous) {
    const _minutes = 60 * 1000,
          _hours = _minutes * 60,
          _day = _hours * 24,
          _month = _day * 30,
          _years = _day * 365,
          elapsed = current - previous;

    // function to return rounded time
    const mathRounder = (__x) => {
        return Math.round(elapsed/__x);
    }

    if (elapsed < _minutes) {
        return `${mathRounder(1000) } seconds ago`;
    }

    else if (elapsed < _hours) {
        return `${mathRounder(_minutes) } minutes ago`;
    }

    else if (elapsed < _day ) {
        return `${mathRounder(_hours )} hours ago`;
    }

    else if (elapsed < _month) {
        return `${mathRounder(_day)} days ago`;
    }

    else if (elapsed < _years) {
        return `${mathRounder(_month)} months ago`;
    }

    else {
        return `${mathRounder(_years )} years ago`;
    }
}
