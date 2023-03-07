const request = async (method, url, data, customHeaders) => {
    try {
      const user = localStorage.getItem('auth');
      const auth = JSON.parse(user || '{}');
  
      const headers = {
        ...customHeaders,
        ...(auth.accessToken ? { 'X-Authorization': auth.accessToken } : {}),
      };
  
      const fetchOptions = {
        method,
        headers,
      };
  
      if (method !== 'GET' && method !== 'HEAD') {
        fetchOptions.body = data;
      }
  
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const get = request.bind({}, 'GET');
  export const post = request.bind({}, 'POST');
  export const patch = request.bind({}, 'PATCH');
  export const put = request.bind({}, 'PUT');
  export const del = request.bind({}, 'DELETE');
  