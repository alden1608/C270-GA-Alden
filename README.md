# Smart Metric-Filtered Menu

A modern Node.js + Express web application featuring dynamic meal filtering based on nutritional metrics.

## Features

- 🍽️ Restaurant partner integration with meal catalog
- 📊 Real-time nutritional filtering without page reload
- 🎯 Interactive range sliders for Calories, Protein, Carbs, and Fats
- 💾 MySQL database with 15+ sample meals
- 🎨 Bootstrap 5 responsive UI
- ⚡ Vanilla JavaScript for dynamic filtering

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap 5, Vanilla JavaScript
- **Database**: MySQL
- **Port**: 3000

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm
- MySQL Server

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/alden1608/C270-Feature2-SmartMenu.git
   cd C270-Feature2-SmartMenu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   - Open MySQL and run:
   ```bash
   mysql -u root -p < db/menu.sql
   ```
   - This creates the `feature2_db` database with sample meals

4. **Configure database connection** (if needed)
   - Edit `app.js` and `routes/menu.js`
   - Update the `password` field in the connection pool if your MySQL has a password:
   ```javascript
   password: 'your_mysql_password'
   ```

5. **Start the application**
   ```bash
   npm start
   ```
   - Server runs on `http://localhost:3000`

## Project Structure

```
C270-Feature2-SmartMenu/
├── app.js                 # Express server configuration
├── routes/
│   └── menu.js           # Route handlers for menu
├── views/
│   └── index.ejs         # Main page template
├── public/
│   └── css/
│       └── style.css     # Styling and responsive design
├── db/
│   └── menu.sql          # Database schema and sample data
├── package.json          # Dependencies configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Features in Detail

### Dynamic Filtering
- **Calories**: 0 - 1000 kcal
- **Protein**: 0 - 100g
- **Carbs**: 0 - 200g
- **Fats**: 0 - 100g

Filters update meal display instantly without page reload using vanilla JavaScript.

### Meal Display
Each meal card shows:
- Meal name
- Restaurant partner
- Calories (kcal)
- Protein content (grams)
- Carbohydrates (grams)
- Fats (grams)

### Responsive Design
- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: Single column layout

## Sample Data

The database includes 15 meals from various restaurant partners with nutritional values:
- Healthy Eats
- Garden Fresh
- Ocean Bistro
- Quick Bites
- Plant Power
- Mediterranean Grill
- Prime Cuts
- Zen Kitchen
- Italian Kitchen
- Tokyo Express
- Taco Fiesta
- Asian Fusion
- Morning Glory
- Harbor Grill
- Comfort Kitchen

## Usage

1. Open `http://localhost:3000` in your browser
2. Adjust the nutrition sliders to filter meals:
   - Move the Calories slider to set maximum calorie limit
   - Move the Protein slider to set maximum protein limit
   - Move the Carbs slider to set maximum carb limit
   - Move the Fats slider to set maximum fat limit
3. View filtered meals in real-time as you adjust the sliders
4. Click "Reset Filters" to return to all meals (max values)

## API Endpoints

- `GET /` - Home page with all meals displayed
- `GET /api/meals` - Get filtered meals based on query parameters
  - Query params: `caloriesMax`, `proteinMax`, `carbsMax`, `fatsMax`
  - Example: `/api/meals?caloriesMax=300&proteinMax=50&carbsMax=100&fatsMax=15`

## File Descriptions

- **app.js** - Express server setup with MySQL connection pool and API endpoint for filtering
- **routes/menu.js** - Route handler that loads all meals from database and renders home page
- **views/index.ejs** - EJS template with Bootstrap UI, filter sliders, and vanilla JavaScript for dynamic filtering
- **public/css/style.css** - Custom CSS with responsive design, animations, and theme styling
- **db/menu.sql** - SQL script to create database and populate with 15 sample meals
- **package.json** - Node.js dependencies: express, ejs, mysql2, nodemon (dev)

## Troubleshooting

### Database Connection Error
- Ensure MySQL is running (`mysql -u root -p`)
- Verify the database credentials in `app.js` and `routes/menu.js`
- Check that `feature2_db` database exists (run `db/menu.sql`)
- Common fix: Update password field in connection pool

### Port 3000 Already in Use
- Change the PORT constant in `app.js`
- Or kill the process using port 3000:
  - macOS/Linux: `lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9`
  - Windows: `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`

### Meals Not Displaying
- Verify the database was properly initialized with `db/menu.sql`
- Check MySQL connection pool settings in `app.js` and `routes/menu.js`
- Ensure credentials match your MySQL setup

### Sliders Not Working
- Check browser console for JavaScript errors (F12)
- Verify `public/css/style.css` is being loaded
- Clear browser cache and refresh page

## Future Enhancements

- User authentication and accounts
- Save favorite meals
- Advanced filtering by cuisine type, ingredients
- Nutritional goal tracking
- Restaurant ratings and reviews
- Add to cart functionality
- Order history

## License

MIT License © 2024 alden1608

## Author

Created by alden1608 for C270 Feature Development

---

**Last Updated**: June 29, 2024
