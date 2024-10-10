// Cache to store previous requests
let cache = new Map();

const getStockScreenerData = async (rules) => {
  console.log("Checking cache and fetching new data if needed");

  // Extract the rule names
  let getRuleOfList = rules?.map((rule) => rule.name) || [];

  // Convert the rule set into a string key for the cache
  const ruleKey = JSON.stringify(getRuleOfList);

  // Check if data for this rule set is already in the cache
  if (cache.has(ruleKey)) {
    console.log("Returning cached data");
    return cache.get(ruleKey);
  }

  // Fetch new data if it's not in the cache
  const postData = { ruleOfList: getRuleOfList };
  const response = await fetch("/api/stock-screener-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const output = await response.json();

  // Store the new data in the cache
  cache.set(ruleKey, output);

  return output;
};

onmessage = async (event) => {
  const { ruleOfList } = event.data || {};

  const output = await getStockScreenerData(ruleOfList);

  const stockScreenerData = output?.filter((item) =>
    Object?.values(item)?.every(
      (value) =>
        value !== null &&
        value !== undefined &&
        (typeof value !== "object" ||
          Object.values(value)?.every(
            (subValue) => subValue !== null && subValue !== undefined
          ))
    )
  );

  postMessage({ message: "success", stockScreenerData });
};

export {};
