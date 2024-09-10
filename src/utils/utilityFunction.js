export const viewConverter = (views) => {
    if (views > 1000000) {
        return Math.floor(views / 1000000) + "M";
    } else if (views > 1000) {
        return Math.floor(views / 1000) + "K";
    } else return views;
};

export const subscriberConverter = (views) => {
    if (views > 1000000) {
        return (views / 1000000).toFixed(2) + "M";
    } else if (views > 1000) {
        return (views / 1000).toFixed(2) + "K";
    } else {
        return views;
    }
};

export const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
