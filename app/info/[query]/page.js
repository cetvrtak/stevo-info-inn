'use client'
import { useState, useEffect } from "react";
import Modal from "@/app/Modal";
import SearchBar from "@/app/SearchBar";

async function fetchData(query) {
  var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
  var token = "9952f7bb5df38a1abdf2cd69d3f08ee528d0dab4";

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

function InfoPage({ params }) {
  const { query } = params;
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData(query);
      setData(fetchedData);
    }

    getData();
  }, [query]);

  function handleModalToggle() {
    setIsModalOpen((s) => !s)
  }

  return (
    <div>
      <SearchBar />

      {data ? (
        <div>
          {isModalOpen && <Modal onToggleModal={handleModalToggle} address={data.data.address.value} />}

          <h2>{data.value}</h2>
          <p>Основатель: {data.data.management.name}</p>
          <p>Должность: {data.data.management.post}</p>
          <p className="address" onClick={handleModalToggle}>Адрес: {data.data.address.value}</p>
        </div>
      ) : <h2>Произошла ошибка</h2>}
    </div>
  );
}

export default InfoPage