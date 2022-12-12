export default {
    methods: {
        stripTags (text) {
            text = text ? text : ''
            let doc = new DOMParser().parseFromString(text, 'text/html')
            return doc.body.textContent || ''
        },

        ensureUrl (str) {
            str = _.trim(str)

            if(
                str.toLowerCase().indexOf('://') == -1
                && str.toLowerCase().substr(0, 7) != 'mailto:'
                && str.toLowerCase().substr(0, 7) != 'tel:'
                && str.substr(0, 1) != '/'
            ) {
                str = 'https://'+str
            }

            return str
        },

        nl2br (str) {
            let replaceStr = '$1<br />$2';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
        },

        raw (obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    }
};
