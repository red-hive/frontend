export const load = async ({ locals }) => {
  const getJapaneseStocksUS = async () => {
    const { apiURL, apiKey } = locals;

    const postData = { filterList: "JP" };

    const response = await fetch(apiURL + "/filter-stock-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify(postData),
    });

    const output = await response.json();

    return output;
  };

  // Make sure to return a promise
  return {
    getJapaneseStocksUS: await getJapaneseStocksUS(),
  };
};
