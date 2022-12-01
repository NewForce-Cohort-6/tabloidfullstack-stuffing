import { getCurrentUserId } from "./PostManager";

const apiUrl = "https://localhost:5001/api";

// Get subscriptions for the current user, currently unsu
export const getSubscriptions = () => {
    return fetch(`${apiUrl}/Subscription/${getCurrentUserId()}`)
    .then((res) => res.json())
};

// Get subscription for the current user for a particular post with null response handling
export const getSubscriptionForPost = (postId) => {
    return fetch(`${apiUrl}/Subscription/${getCurrentUserId()}/Post/${postId}`)
    .then((res) => res.text())
	.then((text) => text.length ? JSON.parse(text) : {})
	.catch((error) => {
		throw error;
	});
}

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
export const unsubscribeFromUser = (sub) => {
    return fetch(`${apiUrl}/Subscription/${sub.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sub)
      })
}
