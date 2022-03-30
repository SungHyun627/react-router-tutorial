import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div className="invoice-list">
      <nav>
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? 'red' : '' };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
