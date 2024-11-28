# Mnadani web App

This project is a responsive navigation-based React application with a user-friendly bottom navigation bar. It is built using `react-router-dom` for routing and `lucide-react` for icons, offering smooth navigation between different pages.

## Features

- **Bottom Navigation Bar**: A fixed bottom navigation bar for quick access to core app sections: Home, Favorites, Sell, and Profile.
- **Dynamic Routing**: Seamlessly navigate between pages using `react-router-dom`.
- **Modern Icons**: Uses `lucide-react` for sleek and modern icons.
- **Responsive Design**: Optimized for mobile devices with a clean layout.

---

## Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── FavoritesPage.js
│   │   ├── SellPage.js
│   │   ├── ProfilePage.js
│   └── NavigationBar.js
├── App.js
└── index.js
```

### Pages
- **HomePage**: Displays the main feed or homepage content.
- **FavoritesPage**: Shows user's favorite items.
- **SellPage**: Allows users to post items for sale.
- **ProfilePage**: Displays user profile and related information.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jimmyurl/mnadani-web.git
   cd mnadani-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. Navigate through the app using the bottom navigation bar.
2. The navigation bar icons and labels are highlighted dynamically based on the active route.
3. Customize page content in the `pages` directory as per your application needs.

---

## Dependencies

- **React**: Frontend library for building user interfaces.
- **React Router**: Handles routing in the application.
- **Lucide React**: Provides modern and scalable SVG icons.

To install these dependencies, run:
```bash
npm install react react-router-dom lucide-react
```

---

## Customization

1. **Adding a New Page**:
   - Create a new component in the `pages` directory.
   - Add a route for the new page in `App.js`.
   - Update the `navItems` array in `NavigationBar` to include the new page.

2. **Styling**:
   - Modify the navigation bar's style by editing the `NavigationBar` component.
   - Update global styles as needed in your CSS or framework.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy coding! 🎉
