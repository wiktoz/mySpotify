const getSpotifyPeriod = (period) => {
    switch(period){
        case "4-weeks": 
            return "short_term"
            break
        case "6-months":
            return "medium_term"
            break
        case "lifetime":
            return "long_term"
            break
        default:
            return "short_term"
    }
}

export default getSpotifyPeriod