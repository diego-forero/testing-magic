# MTG Backend API

A TypeScript + Express backend for catalog management and pricing of **Magic: The Gathering** cards.  
This API exposes endpoints to retrieve card information and prices, connecting to a **Supabase** database.

## 🚀 Requirements

- Node.js 18 or higher
- A Supabase account (to obtain access keys)
- Environment variables in a `.env` file

---

## ⚙️ Installation & Setup


# 1. Clone the repository
git clone https://github.com/your_username/mtg-backend.git
cd mtg-backend

# 2. Install dependencies
```
npm install
```

# 3. Create the `.env` file
In the root of your project, create a file named `.env` and add environment variables (Fill in your own Supabase credentials)

# 4. Build the project:
```
npm run build
```

# 5. Start the compiled build:
```
npm start
```


##  Main Endpoints
```
GET /api/catalog/:setCode
```