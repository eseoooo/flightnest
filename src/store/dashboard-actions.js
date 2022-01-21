import DESTINATIONS from "../resources/DESTINATIONS";
import { dashboardActions } from "./dashboard-slice";

export const pickPopularDestinationAsync = () => {
    return dispatch => {
        (async () => {
            const data = await DESTINATIONS
            dispatch(dashboardActions.pickPopularDestination(data))
        })()
    }
}