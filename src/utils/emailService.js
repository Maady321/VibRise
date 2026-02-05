// Backend API URL
const API_URL = "http://localhost:5001/api/send-message";

export const sendNotification = async (message) => {
  try {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    
    if (data.success) {
        console.log("SUCCESS!", data.message);
        return true;
    } else {
        console.error("FAILED...", data.error);
        return false;
    }

  } catch (err) {
    console.error("NETWORK ERROR...", err);
    return false;
  }
};
