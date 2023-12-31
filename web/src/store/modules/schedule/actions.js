import types from "./types";

export function updateSchedule(payload) {
  return { type: types.SCHEDULE_UPDATE, payload };
}

export function addSchedule() {
  return { type: types.SCHEDULE_ADD };
}

export function resetSchedule() {
  return { type: types.SCHEDULE_RESET };
}

export function removeSchedule() {
  return { type: types.SCHEDULE_REMOVE };
}

export function allSpecialties() {
  return { type: types.ALL_SPECIALTIES };
}

export function allCustomers() {
  return { type: types.ALL_CUSTOMERS };
}

export function filterAvailableDays() {
  return { type: types.FILTER_AVAILABLE_DAYS };
}

export function schedulesFilter(start, end) {
  return {
    type: types.SCHEDULES_FILTER,
    start,
    end,
  };
}
