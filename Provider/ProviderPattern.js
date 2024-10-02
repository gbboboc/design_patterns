// Provider Class: ThemeProvider
class ThemeProvider {
	constructor() {
			this.theme = 'light'; // Default theme
	}

	// Method to switch theme
	switchTheme() {
			this.theme = this.theme === 'light' ? 'dark' : 'light';
			this.applyTheme();
	}

	// Method to apply theme (e.g., by adding/removing classes to the document body)
	applyTheme() {
			if (this.theme === 'light') {
					document.body.classList.remove('dark');
					document.body.classList.add('light');
			} else {
					document.body.classList.remove('light');
					document.body.classList.add('dark');
			}
			console.log(`Applied ${this.theme} theme`);
	}

	// Method to get the current theme
	getTheme() {
			return this.theme;
	}
}

// Consumer Component: App
class App {
	constructor(provider) {
			this.provider = provider; // Injecting the provider
	}

	// Render method that displays the current theme and a button to switch themes
	render() {
			const appDiv = document.getElementById('app');
			appDiv.innerHTML = `
					<div>
							<h2>Current Theme: ${this.provider.getTheme()}</h2>
							<button id="themeSwitcher">Switch Theme</button>
					</div>
			`;

			document.getElementById('themeSwitcher').addEventListener('click', () => {
					this.provider.switchTheme();
					this.render(); // Re-render after theme change
			});
	}
}

// Initialize the Provider and Consumer
const themeProvider = new ThemeProvider();
const app = new App(themeProvider);
app.render();

// Apply initial theme
themeProvider.applyTheme();
