// Module Pattern: ShoppingCartModule
const ShoppingCartModule = (function () {
	// Private variable to store items in the cart
	let cart = [];

	// Private method to update the cart display
	function updateDisplay() {
			const cartDiv = document.getElementById('cart');
			cartDiv.innerHTML = '';

			if (cart.length === 0) {
					cartDiv.innerHTML = 'Cart is empty';
			} else {
					cart.forEach((item, index) => {
							const itemDiv = document.createElement('div');
							itemDiv.classList.add('item');
							itemDiv.innerText = `Item ${index + 1}: ${item}`;
							cartDiv.appendChild(itemDiv);
					});
			}
	}

	// Public API (methods exposed to the outside world)
	return {
			addItem: function (item) {
					cart.push(item);
					updateDisplay();
			},
			removeItem: function () {
					if (cart.length > 0) {
							cart.pop(); // Remove the last item
					}
					updateDisplay();
			},
			getCart: function () {
					return [...cart]; // Return a copy of the cart
			}
	};
})();

// Handling button clicks to interact with the module
document.getElementById('addItem').addEventListener('click', () => {
	const newItem = `Item ${ShoppingCartModule.getCart().length + 1}`;
	ShoppingCartModule.addItem(newItem);
});

document.getElementById('removeItem').addEventListener('click', () => {
	ShoppingCartModule.removeItem();
});
