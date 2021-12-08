import immutableStructure from './structure/immutable'
import createConnectedRouter from './ConnectedRouter'
import createRouterReducer from './reducer'
import createInitialRouterState from './utils/createInitialRouterState'

export {
  LOCATION_CHANGE,
  CALL_ROUTER_METHOD,
  routerActions,
  push,
  replace,
  go,
  goBack,
  goForward,
  prefetch,
} from './actions'
export { default as routerMethods } from './routerMethods'
import _createRouterMiddleware from './middleware'

export const initialRouterState = createInitialRouterState(immutableStructure)
export const routerReducer = createRouterReducer(immutableStructure)
export const ConnectedRouter = createConnectedRouter(immutableStructure)
export const createRouterMiddleware = _createRouterMiddleware(immutableStructure)