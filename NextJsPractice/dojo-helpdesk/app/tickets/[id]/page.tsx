import { fetchTicketDetail } from "@/app/services/TicketService";

export default async function TicketDetail({ params } : any) {

    const ticket: any = await fetchTicketDetail(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
