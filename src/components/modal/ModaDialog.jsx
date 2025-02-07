import React from "react";

export default function ModaDialog({
  option,
  titre,
  content,
  actions,
  fonction,
}) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {option}
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{titre}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <form method="dialog">
              {actions.map((action, i) => (
                <button key={i} onClick={fonction} className="btn">
                  {action.name}
                </button>
              ))}
              <button className="btn">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
