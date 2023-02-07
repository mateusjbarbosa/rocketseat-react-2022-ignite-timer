import produce from 'immer'
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
  function getCurrentCycleIndex() {
    return currentState.cycles.findIndex(
      (cycle) => cycle.id === currentState.activeCycleId,
    )
  }

  switch (action.type) {
    case 'ADD_NEW_CYCLE':
      return produce(currentState, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case 'INTERRUPT_CURRENT_CYCLE': {
      const currentCycleIndex = getCurrentCycleIndex()

      if (currentCycleIndex < 0) return currentState

      return produce(currentState, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case 'MARK_CURRENT_CYCLE_AS_FINISHED': {
      const currentCycleIndex = getCurrentCycleIndex()

      if (currentCycleIndex < 0) return currentState

      return produce(currentState, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return currentState
  }
}
