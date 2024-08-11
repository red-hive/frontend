import { getCache, setCache } from '$lib/store';




export const load = async ({parent}) => {
  const getChineseStocksUS = async () => {
    let output;

    // Get cached data for the specific tickerID
    const cachedData = getCache('', 'getChineseStocksUS');
    if (cachedData) {
      output = cachedData;
    } else {
      
      const{ apiURL, apiKey} = await parent();
      
      const postData = {'filterList': 'CN'}

      const response = await fetch(apiURL + '/filter-stock-list', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json", "X-API-KEY": apiKey
        },
        body: JSON.stringify(postData),
      });

      output = await response.json();

      // Cache the data for this specific tickerID with a specific name 'getChineseStocksUS'
      setCache('', output, 'getChineseStocksUS');
    }

    return output;
  };

  // Make sure to return a promise
  return {
    getChineseStocksUS: await getChineseStocksUS()
  };
};