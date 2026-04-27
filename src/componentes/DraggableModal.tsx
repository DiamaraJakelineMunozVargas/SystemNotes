import Draggable from "react-draggable"
import ModalDialog from "react-bootstrap/ModalDialog"
import { useRef } from "react"

function DraggableModal(props) {
  const nodeRef = useRef(null)

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".modal-header"
      cancel=".btn-close"
    >
      <div ref={nodeRef}>
        <ModalDialog {...props} />
      </div>
    </Draggable>
  )
}

export default DraggableModal