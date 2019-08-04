module.exports = {
    base : {
        development : "http://localhost:8080/",
        production : "/"
    },
    file : {
        upload : "api/upload",
        download : "api/files/{filename:.+}"
    }
}