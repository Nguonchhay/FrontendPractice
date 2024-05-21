import Link from 'next/link';
import { fetchTickets } from "../services/TicketService";

export default async function Tickets() {
  const tickets = await fetchTickets();

  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>

        <>
          {tickets.map((ticket: any) => (
            <div key={ticket.id} className="card my-5">
              <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                  {ticket.priority} priority
                </div>
              </Link>
            </div>
          ))}
          {tickets.length === 0 && (
            <p className="text-center">There are no open tickets, yay!</p>
          )}
        </>
      </nav>
    </main>
  )
}
