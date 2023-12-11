class DataSource {

    static searchMovie(keyword) {
        const baseUrl = 'http://www.omdbapi.com/?apikey=92db2cf5&s='
        return fetch(`${baseUrl}${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Search) {
                    return Promise.resolve(responseJson.Search)
                } else {
                    return Promise.reject(`${keyword} Is Not Found`)
                }
            })
    }
}

export default DataSource;