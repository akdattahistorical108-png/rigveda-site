// Helper functions for converting numbers to Bengali numerals and formatting references

/**
 * Converts a number to Bengali numeral string.
 * @param {number} number - The number to convert.
 * @returns {string} - The Bengali numeral representation of the number.
 */
function convertToBengaliNumerals(number) {
    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().split('').map(digit => bengaliNumerals[parseInt(digit)]).join('');
}

/**
 * Formats a reference string in a standardized way.
 * @param {string} author - The author of the work.
 * @param {string} title - The title of the work.
 * @param {number} year - The year of publication.
 * @returns {string} - The formatted reference string.
 */
function formatReference(author, title, year) {
    return `${author}. ${title}. (${year}).`;
}

module.exports = { convertToBengaliNumerals, formatReference };