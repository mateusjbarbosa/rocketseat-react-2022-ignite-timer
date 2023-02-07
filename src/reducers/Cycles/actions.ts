import { Cycle } from './reducer'

export enum CycleActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  // eslint-disable-next-line no-unused-vars
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  // eslint-disable-next-line no-unused-vars
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CycleActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: CycleActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: CycleActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
