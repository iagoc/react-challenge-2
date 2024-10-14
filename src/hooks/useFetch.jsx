import React from "react";

const useFetch = () => {

  const fetch = React.useCallback(async (form) => {
    let response;
    let json;

    console.log(form)

    return response = await fetch('https://ranekapi.origamid.dev/json/api/produto', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  })

  return fetch
}

export default useFetch
