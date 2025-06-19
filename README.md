# CryptoCoin 💰

**A modern cryptocurrency information hub built with React, providing real-time crypto market data, price tracking, and detailed coin analytics.**

🌐 **Live Demo:** [cryptocoin23.netlify.app](https://cryptocoin23.netlify.app/)

## ✨ Key Features

### 📊 Market Overview
- **Real-time cryptocurrency data** from CoinGecko API
- **Top 10 crypto rankings** with market cap, prices, and 24h changes
- **Multi-currency support** (USD and other major currencies)
- **Live price updates** with color-coded 24h change indicators

### 🔍 Search & Discovery
- **Intelligent search functionality** with autocomplete suggestions
- **Quick coin lookup** from comprehensive cryptocurrency database
- **Instant filtering** of results as you type

### 📈 Detailed Analytics
- **Individual coin pages** with comprehensive market data
- **Interactive price charts** showing historical trends
- **Market statistics** including rank, market cap, and 24h high/low
- **Clean, responsive design** optimized for all devices

## 🛠️ Technical Stack

**Frontend:**
- **React 18** with functional components and hooks
- **Vite** for fast development and optimized builds
- **React Router** for client-side navigation
- **Context API** for efficient state management

**Data & Visualization:**
- **CoinGecko API** for real-time cryptocurrency data
- **Google Charts** for interactive price visualizations
- **Custom data processing** for chart formatting and currency conversion

**Styling & UX:**
- **Custom CSS** with responsive design principles
- **Modern UI/UX** with intuitive navigation
- **Mobile-first approach** ensuring cross-device compatibility

## 🏗️ Architecture

```
React App (Vite) ←→ CoinGecko API
     ↓
Context Provider (State Management)
     ↓
Components (Home, Coin, Chart, Navbar)
     ↓
Google Charts (Data Visualization)
```

## 📱 Screenshots

### Cryptocurrency Market Overview
![CryptoCoin Homepage](https://github.com/user-attachments/assets/aa40d657-136b-4c92-a96c-d9b81d7baf3b)
*Real-time crypto market data with search functionality and top 10 rankings*

<br>
<br>

### Detailed Coin Analytics  
![Bitcoin Detail Page](https://github.com/user-attachments/assets/fc93a729-8cf2-45fd-9884-e8763c804eb9)
*Individual coin pages with interactive charts and comprehensive market statistics*

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- CoinGecko API key (free tier available)

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/programmerKJ/CryptoCoin.git
cd CryptoCoin
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**
Create a `.env` file in the root directory:
```env
VITE_CG_API_KEY=your_coingecko_api_key
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Access the application:**
- Local development: `http://localhost:5173`
- Live demo: [cryptocoin23.netlify.app](https://cryptocoin23.netlify.app/)

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎯 Technical Highlights

- **Real-time Data Integration:** Seamless API integration with error handling and loading states
- **Responsive Design:** Mobile-first approach ensuring optimal experience across devices
- **State Management:** Efficient Context API implementation for global state
- **Performance Optimization:** Vite build system for fast development and optimized production builds
- **Search Implementation:** Real-time search with autocomplete using native datalist
- **Chart Integration:** Interactive data visualization with Google Charts library

## 📊 API Integration

**CoinGecko API Endpoints:**
- `/coins/markets` - Market data for all cryptocurrencies
- `/coins/{id}` - Detailed information for specific coins
- `/coins/{id}/market_chart` - Historical price data for charts

**Features:**
- Real-time price updates
- Historical data visualization
- Multi-currency support
- Comprehensive market statistics

## 🔮 Future Enhancements

- [ ] Portfolio tracking functionality
- [ ] Price alerts and notifications
- [ ] Social sentiment analysis
- [ ] Advanced charting options (candlestick, volume)
- [ ] Favorites/watchlist feature
- [ ] Price prediction indicators

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Krishna Joshi**  
[LinkedIn](https://linkedin.com/in/krishnajoshi28) | [Portfolio](https://krishnasportfolio23.netlify.app)
