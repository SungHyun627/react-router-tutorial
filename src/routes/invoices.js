import { Link } from 'react-router-dom';
import { getInvoices } from '../data';

export default function invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoice-list">
      <nav>
        {invoices.map((invoice) => (
          <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
