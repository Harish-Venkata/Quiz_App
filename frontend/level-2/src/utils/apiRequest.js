async function apiRequest(options) {
  //Destructure the options object to get the endpoint, method, include Auth and Body
  const {
    endpoint,
    method = "GET",
    includeAuth = true,
    body = undefined,
  } = options;

  //Create a new Headers Object
  const headers = new Headers();

  //If the body is an object, set the "Content-Type" header to "application/json" and stringfy the body
  let requestBody = body;
  if (body && typeof body === "object") {
    headers.append("Content-Type", "application/json");
    requestBody = JSON.stringify(requestBody);
  }

  //If includeAuth is true and there is an access token in Localstorage
  if (includeAuth && localStorage.getItem("accessToken")) {
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("accessToken")}`
    );
  }

  //Create a new URL object with the base url from the environment variables and the endpoints

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = new URL(endpoint, baseUrl);

  //Make  a fetch request to the API endpoint with specific methods,headers and body

  const response = await fetch(url, {
    method,
    headers,
    body: requestBody,
  });

  //Return the response from the API

  return response;
}

export default apiRequest;
