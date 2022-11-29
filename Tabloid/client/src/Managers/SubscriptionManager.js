import { getCurrentUserId } from "./PostManager";

const apiUrl = "https://localhost:5001/api";

export const getSubscriptions = () => {
    return fetch(`${apiUrl}/Subscription/${getCurrentUserId()}`)
    .then((res) => res.json())
};

export const subscribeToUser = (userId) => {
    return fetch(`${apiUrl}/Subscription`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(`{subscriberUserProfileId:${getCurrentUserId()}, providerUserProfileId: ${userId}}`)
    })
        .then((res) => res.json())
};

export const unsubscribeFromUser = (userId) => {
// TODO: Use a POST method to add a end date
}