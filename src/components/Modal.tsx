import './Modal.css'

export default function ({ message, title, show, setShow }) {
  return (
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  )
}