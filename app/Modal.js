'use client';
export default function Modal({ onToggleModal, address = 'г Москва, ул Вавилова, д 19' }) {
  const location = `https://www.google.com/maps/search/?api=1&query=${address}`

  return (
    <div>
      <div className="overlay" onClick={onToggleModal}></div>
      <div className="modal">
        <h3>Вы действительно хотите перейти на внешний ресурс?</h3>
        <div className="modal-buttons">
          <button onClick={onToggleModal}>Отказался</button>
          <button><a href={location} target="blank_">Перейти</a></button>
        </div>
      </div>
    </div>
  );
}
