const capitalise = (str) => {
    capStr = str.split('');
    capStr[0] = capStr[0].toUpperCase();
    str = capStr.join('');
    return str;
}

module.exports = capitalise;