import axios from "axios";

const API = "http://localhost:3000";

export async function fetchFromApi(endpointURL, opts) {
  const bodytoSend = { ...opts };
  const stripeRes = await axios.post(
    `${API}/${endpointURL}/`,
    { ...bodytoSend },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return stripeRes.data;
}
