# tedxbbau
# TEDx Ticket Booking Website – Project Requirements

1. Project Overview
The TEDx Ticket Booking Website is a platform for users to register for TEDx events, book tickets, and make secure payments. The system will provide a seamless booking experience with real-time ticket availability, automated email confirmations, and an intuitive user interface.

2. Technology Stack
- **Frontend**: React.js (with Tailwind CSS or Material UI)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (MongoDB Atlas for cloud storage)
- **Authentication**: JWT-based authentication (for admin access)
- **Payment Gateway**: Paytm Payment Gateway
- **Deployment**:
  - Frontend: Vercel/Netlify
  - Backend: Render/Heroku

3. Core Features

 a) User Features
- **Event Listing & Details**
  - Browse TEDx events with date, venue, and ticket pricing.
  - View event details, speaker information, and schedule.

- **Ticket Booking**
  - Select ticket type (Regular, VIP, etc.).
  - View real-time ticket availability.
  - Secure online payment through Paytm.
  - Receive instant booking confirmation via email.

- **User Authentication (Optional, for registered users)**
  - Sign up/login via email and password.
  - Google OAuth integration (optional).
  - View and manage past bookings.
  - 
b) Admin Features
- **Event & Ticket Management**
  - Add, edit, and delete events.
  - Set ticket pricing and availability.

- **Booking & Payments Overview**
  - View all bookings with user details.
  - Monitor payment statuses.

- **Data Analytics (Future Enhancement)**
  - Track ticket sales and revenue.
  - View real-time booking statistics.

 4. Database Schema (MongoDB)

### Collections
#### Users
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "passwordHash": "hashed_password",
  "role": "admin/user"
}
```

#### Events
```json
{
  "title": "TEDx Talk 2025",
  "date": "2025-05-1",
  "venue": "College Auditorium",
  "description": "An inspiring TEDx event featuring industry leaders.",
  "ticketTypes": [
    { "type": "Regular", "price": 500, "available": 100 },
    { "type": "VIP", "price": 1500, "available": 50 }
  ]
}
```

#### Bookings
```json
{
  "userId": "userid_reference",
  "eventId": "eventid_reference",
  "ticketType": "VIP",
  "quantity": 2,
  "paymentStatus": "Completed"
}
```

---

 5. API Endpoints (Express.js)

| Endpoint               | Method | Description                     | Auth |
|------------------------|--------|---------------------------------|------|
| `/api/events`         | GET    | Fetch all events               | ❌  |
| `/api/events/:id`     | GET    | Fetch event details            | ❌  |
| `/api/bookings`       | POST   | Book tickets                   | ✅  |
| `/api/bookings/:id`   | GET    | Get user booking details       | ✅  |
| `/api/admin/events`   | POST   | Create new event               | 🔒 (Admin) |
| `/api/admin/bookings` | GET    | View all bookings              | 🔒 (Admin) |

---

 6. Payment Gateway Integration (Paytm)
- Secure payments via Paytm Payment Gateway.
- Payment success/failure will update booking status in the database.
- Email confirmation sent after successful payment.

 7. Deployment Strategy
✅ **Frontend**: Deployed on **Vercel/Netlify**  
✅ **Backend**: Deployed on **Render/Heroku**  
✅ **Database**: Hosted on **MongoDB Atlas**  
