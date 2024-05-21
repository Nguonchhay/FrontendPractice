import 'server-only';

export async function fetchTickets() {
  const res = await fetch(
    'http://localhost:8000/tickets',
    {
      next: {
        revalidate: 30 // 30 seconds
      }
    }
  );

  return res.json();
}

export async function fetchTicketDetail(id) {
  const res = await fetch(
    `http://localhost:8000/tickets/${id}`,
    {
      next: {
        revalidate: 3600 // 3600 seconds
      }
    }
  );

  return res.json();
}
