/**
 * Formats a credits card number string by adding dashes (-) after every 4th * * character.
 * @param {string} cardNumber - The credit card number string to format.
 * @returns {string} - Returns the formatted credit card number string.
 */
export function formatCardNumberWithDashes(cardNumber) {
	return cardNumber.replace('/(d{4})(?=/d)/g', '$1-')
}
