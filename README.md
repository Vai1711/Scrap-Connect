# ♻️ Scrap-Connect – Scrap Trading & Pricing Platform

## Overview
ScrapConnect is a **demo web application** that connects scrap sellers with traders by providing **instant price estimation** based on scrap type and quantity.  
The platform calculates the total value of scrap and includes a **platform commission**, simulating a real-world scrap marketplace.

This project is built as a **Minimum Viable Product (MVP)** to demonstrate product thinking, backend logic, and form-based workflows.

---

## Problem Statement
In the unorganized scrap market:
- Sellers often don’t know the fair value of their scrap
- Pricing is inconsistent and non-transparent
- There is no quick way to estimate scrap value before contacting a dealer

---

## Solution
ScrapConnect solves this by:
- Allowing sellers to enter scrap details
- Instantly calculating the estimated value
- Clearly showing platform commission
- Removing dependency on manual negotiation

---

## Features
- Scrap type selection (Paper, Plastic, Metal, E-Waste)  
- Quantity-based pricing (in kilograms)  
- Instant price calculation in **Indian Rupees (₹)**  
- Platform commission calculation  
- Simple and clean UI  
- No login required (demo MVP)

---

## Pricing Logic
| Scrap Type | Price per kg |
|-----------|--------------|
| Paper     | ₹14          |
| Plastic   | ₹8           |
| Metal     | ₹24          |
| E-Waste   | ₹28          |

**Platform Commission:** 5% of total value

> Note: Prices are static and used only for demonstration purposes.

---

## Tech Stack
- **Frontend:** React + Tailwind CSS  
- **Backend:** Node.js / API Routes  
- **Database:** PostgreSQL (via Drizzle ORM)  
- **Validation:** Zod  
- **Hosting:** Replit (Free Tier)

---

## How It Works
1. Seller enters scrap details  
2. System calculates total value  
3. Platform commission is applied  
4. Final quote is displayed instantly

---

## Project Status
This project is a **demo MVP** and does not support:
- Real payments  
- Real pickups  
- User authentication

---

## Future Improvements
- Dynamic scrap pricing using APIs  
- Trader dashboard  
- Pickup scheduling  
- User authentication  
- Payment integration

---

## Demo
Try it live here: [ScrapConnect Demo] (https://scrap-connect--vaibhavichaturv.replit.app)

> Hosted on Replit (Free Tier) for demo purposes.

---

## Author
**Vaibhavi Chaturvedi**  


## Disclaimer
This application is built for **learning and demonstration purposes only** and does not represent a production-ready marketplace.
