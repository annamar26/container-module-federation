import { dispatchRoute } from "./routes";


window.history.pushState({}, '/auth', window.location.origin + '/auth')
dispatchRoute('/auth')


