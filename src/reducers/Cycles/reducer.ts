import { CycleActionTypes } from './actions'

export interface Cycle {
  id: string
  minutesAmount: number
  startDate: Date
  task: string
  finishedDate?: Date
  interruptedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(
  currentState: CyclesState,
  action: { type: keyof typeof CycleActionTypes; payload?: any },
) {
  switch (action.type) {
    case 'ADD_NEW_CYCLE':
      return {
        ...currentState,
        activeCycleId: action.payload.newCycle.id,
        cycles: [...currentState.cycles, action.payload.newCycle],
      }
    case 'INTERRUPT_CURRENT_CYCLE':
      return {
        ...currentState,
        activeCycleId: null,
        cycles: currentState.cycles.map((cycle) => {
          if (cycle.id === currentState.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
      }
    case 'MARK_CURRENT_CYCLE_AS_FINISHED':
      return {
        ...currentState,
        activeCycleId: null,
        cycles: currentState.cycles.map((cycle) => {
          if (cycle.id === currentState.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
      }
    default:
      return currentState
  }
}
