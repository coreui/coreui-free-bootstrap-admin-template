/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template scheduler.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const pad = n => String(n).padStart(2, '0')
const format = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

const weekDay = offset => {
  const date = new Date()
  date.setDate(date.getDate() - ((date.getDay() + 6) % 7) + offset)
  return format(date)
}

const day = offset => {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return format(date)
}

const events = [
  {
    id: 'standup', title: 'Standup', start: `${weekDay(0)}T09:00`, end: `${weekDay(0)}T09:15`, rrule: 'FREQ=DAILY;COUNT=5'
  },
  {
    id: 'design', title: 'Design review', start: `${weekDay(1)}T10:00`, end: `${weekDay(1)}T11:30`, color: '#2eb85c'
  },
  {
    id: 'sync', title: 'Team sync', start: `${weekDay(1)}T10:30`, end: `${weekDay(1)}T11:00`
  },
  {
    id: 'lunch', title: 'Lunch & learn', start: `${weekDay(2)}T12:00`, end: `${weekDay(2)}T13:00`, color: '#f9b115'
  },
  {
    id: 'onboarding', title: 'Onboarding', start: `${weekDay(3)}T09:30`, end: `${weekDay(3)}T12:00`, color: '#e55353'
  },
  {
    id: 'retro', title: 'Retro', start: `${weekDay(4)}T15:00`, end: `${weekDay(4)}T16:00`
  },
  {
    id: 'conf', title: 'CoreUI Conf', start: weekDay(3), end: weekDay(5), allDay: true
  },
  {
    id: 'planning', title: 'Planning', start: `${weekDay(8)}T10:00`, end: `${weekDay(8)}T12:00`
  },
  {
    id: 'audit', title: 'Audit', start: weekDay(9), end: weekDay(11), allDay: true, color: '#e55353'
  }
]

const resources = [
  { id: 'room-1', label: 'Room 1' },
  { id: 'room-2', label: 'Room 2', color: '#2eb85c' },
  { id: 'room-3', label: 'Room 3', color: '#e55353' },
  { id: 'room-4', label: 'Room 4', color: '#f9b115' }
]

const schedulerElement = document.getElementById('scheduler')

if (schedulerElement) {
  // eslint-disable-next-line no-new
  new coreui.Scheduler(schedulerElement, {
    view: 'month',
    monthMaxEventsPerDay: 3,
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5], startHour: 9, endHour: 17
    },
    events
  })
}

const schedulerResourcesElement = document.getElementById('schedulerResources')

if (schedulerResourcesElement) {
  // eslint-disable-next-line no-new
  new coreui.Scheduler(schedulerResourcesElement, {
    view: 'resource',
    dayStartHour: 8,
    dayEndHour: 18,
    resources,
    events: [
      {
        id: 'board', title: 'Board meeting', resourceId: 'room-1', start: `${day(0)}T09:00`, end: `${day(0)}T11:00`
      },
      {
        id: 'workshop', title: 'Workshop', resourceId: 'room-2', start: `${day(0)}T09:30`, end: `${day(0)}T12:00`
      },
      {
        id: 'interview', title: 'Interview', resourceId: 'room-3', start: `${day(0)}T10:00`, end: `${day(0)}T10:45`
      },
      {
        id: 'training', title: 'Onboarding training', resourceId: 'room-4', start: `${day(0)}T09:00`, end: `${day(0)}T13:00`
      },
      {
        id: 'all-hands', title: 'All hands', resourceId: 'room-1', start: `${day(0)}T14:00`, end: `${day(0)}T15:00`
      },
      {
        id: 'demo', title: 'Sprint demo', resourceId: 'room-2', start: `${day(0)}T14:30`, end: `${day(0)}T16:00`
      },
      {
        id: 'maintenance', title: 'Maintenance', resourceId: 'room-3', start: `${day(0)}T12:00`, end: `${day(0)}T18:00`, color: '#636f83'
      }
    ]
  })
}

const schedulerTimelineElement = document.getElementById('schedulerTimeline')

if (schedulerTimelineElement) {
  // eslint-disable-next-line no-new
  new coreui.Scheduler(schedulerTimelineElement, {
    view: 'timeline',
    timelineDays: 3,
    timelineHourWidth: 13,
    resources,
    events: [
      {
        id: 'board', title: 'Board meeting', resourceId: 'room-1', start: `${day(0)}T09:00`, end: `${day(0)}T13:00`
      },
      {
        id: 'sprint', title: 'Sprint', resourceId: 'room-1', start: `${day(0)}T10:00`, end: `${day(1)}T16:00`
      },
      {
        id: 'rehearsal', title: 'Rehearsal', resourceId: 'room-2', start: `${day(0)}T13:00`, end: `${day(0)}T18:00`
      },
      {
        id: 'workshop', title: 'Workshop', resourceId: 'room-2', start: `${day(1)}T09:00`, end: `${day(2)}T12:00`
      },
      {
        id: 'maintenance', title: 'Maintenance', resourceId: 'room-3', start: `${day(0)}T08:00`, end: `${day(0)}T20:00`, color: '#636f83'
      },
      {
        id: 'audit', title: 'Audit', resourceId: 'room-3', start: day(1), end: day(3), allDay: true
      },
      {
        id: 'training', title: 'Onboarding training', resourceId: 'room-4', start: `${day(0)}T09:00`, end: `${day(0)}T15:00`
      },
      {
        id: 'interviews', title: 'Interviews', resourceId: 'room-4', start: `${day(2)}T10:00`, end: `${day(2)}T18:00`, color: '#f9b115'
      }
    ]
  })
}
