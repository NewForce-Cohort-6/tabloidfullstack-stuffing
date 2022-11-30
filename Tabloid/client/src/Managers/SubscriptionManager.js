import { getCurrentUserId } from "./PostManager";

const apiUrl = "https://localhost:5001/api";

// Get subscriptions for the current user
export const getSubscriptions = () => {
    return fetch(`${apiUrl}/Subscription/${getCurrentUserId()}`)
    .then((res) => res.json())
};

// Subscribing means adding a new entry to the Subscription table
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

// Un-subscribing means adding an end date value to the Subscription entry
export const unsubscribeFromUser = (userId) => {
// TODO: Use a PUT method to add a end date
}
