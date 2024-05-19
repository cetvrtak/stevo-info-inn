'use client';
export default function Modal({ onToggleModal }) {
  return (
    <div>
      <div className="overlay" onClick={onToggleModal}></div>
      <div className="modal">
        <h3>Вы действительно хотите перейти на внешний ресурс?</h3>
        <div className="modal-buttons">
          <button onClick={onToggleModal}>Отказался</button>
          <button>Перейти</button>
        </div>
      </div>
    </div>
  );
}
