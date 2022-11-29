import { getCurrentUserId } from "./PostManager";

const apiUrl = "https://localhost:5001/api";

export const getSubscriptions = () => {
    return fetch(`${apiUrl}/Subscription/${getCurrentUserId()}`)
    .then((res) => res.json())
};

export const subscribeToUser = (body) => {
    return fetch(`${apiUrl}/Subscription`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
};

export const unsubscribeFromUser = (userId) => {
// TODO: Use a PUT method to add a end date
}
