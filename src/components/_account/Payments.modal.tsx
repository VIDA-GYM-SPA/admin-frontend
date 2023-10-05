interface IModal {
  user_id: number
  from?: string | Date
  to?: string | Date
}

function PaymentsModal({}: IModal) {
  return (
    <div>PaymentsModal</div>
  )
}

export default PaymentsModal