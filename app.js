const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MySQL Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Update with your MySQL password if needed
  database: 'feature2_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Routes
app.use('/', require('./routes/menu'));

// API endpoint for filtered meals
app.get('/api/meals', async (req, res) => {
  try {
    const { caloriesMax, proteinMax, carbsMax, fatsMax } = req.query;
    
    const connection = await pool.getConnection();
    
    let query = 'SELECT * FROM meals WHERE 1=1';
    const params = [];
    
    if (caloriesMax) {
      query += ' AND calories <= ?';
      params.push(parseInt(caloriesMax));
    }
    if (proteinMax) {
      query += ' AND protein <= ?';
      params.push(parseInt(proteinMax));
    }
    if (carbsMax) {
      query += ' AND carbs <= ?';
      params.push(parseInt(carbsMax));
    }
    if (fatsMax) {
      query += ' AND fats <= ?';
      params.push(parseInt(fatsMax));
    }
    
    const [meals] = await connection.execute(query, params);
    connection.release();
    
    res.json(meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Smart Menu app running on http://localhost:${PORT}`);
});