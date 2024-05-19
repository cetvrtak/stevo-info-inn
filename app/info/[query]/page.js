async function fetchData(query) {
  var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
  var token = "237a7776db5718ec773b4319a288282fc9723df2";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({ query: query })
  }

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const suggestions = JSON.parse(result).suggestions;
    const main = suggestions.filter(el => el.data.branch_type === 'MAIN')[0]

    return main
  } catch (error) {
    console.log("error", error);
  }
}

async function fakeAPI(query) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/ability/?limit=20");
    const result = await response.text();
    const results = JSON.parse(result).results;
    const main = results[0]

    return main
  } catch (error) {
    console.log("error", error);
  }
}

async function InfoPage({ params }) {
  const { query } = params;
  const data = await fetchData(query);

  return (
    <div>
      {data ? <div>
        <h1>{data.value}</h1>
        <p>Основатель: {data.data.management.name}</p>
        <p>Должность: {data.data.management.post}</p>
        <p>Адрес: {data.data.address.value}</p>
      </div> : <h2>Произошла ошибка</h2>}
    </div>
  );
}

export default InfoPage