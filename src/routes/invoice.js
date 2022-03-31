import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(location);
  return (
    <main>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delte
        </button>
      </p>
    </main>
  );
}
