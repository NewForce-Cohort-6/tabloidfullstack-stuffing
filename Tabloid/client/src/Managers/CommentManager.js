const baseUrl = 'https://localhost:5001/api';


export const addComment = (singleComment) => {
    return fetch(`${baseUrl}/Comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleComment),
    });
};