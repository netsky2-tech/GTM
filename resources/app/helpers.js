import moment from 'moment'

export default {
    cutText(text, length) {
        if (text.split(' ').length > 1) {
            var string = text.substring(0, length)
            var splitText = string.split(' ')
            splitText.pop()
            return splitText.join(' ') + '...'
        } else {
            return text
        }
    },
    formatDate(date, format) {
        return moment(date).format(format)
    },
    capitalizeFirstLetter(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }
}