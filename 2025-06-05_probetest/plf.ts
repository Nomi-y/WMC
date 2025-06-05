export class Album {

    genre: string
    year: string
    artist: string
    songs: Song[]
    album: string

    constructor(album: Album) {
        if (arguments.length !== 1) {
            throw new Error();
        }
        if (!Array.isArray(album.songs)) {
            throw new Error();
        }
        if (typeof album != "object") {
            throw new Error();
        }
        if (album.songs.length == 0) {
            throw new Error();
        }
        if (typeof album.songs[0] != "object") {
            throw new Error();
        }

        this.genre = album.genre
        this.songs = album.songs
        this.artist = album.artist
        this.year = album.year
        this.album = album.album
    }

    getTotalDuration(): number {
        return this.songs.reduce((sum, item) => sum + item.duration, 0)
    }

    getLongestSong(): Song {
        return this.songs.reduce((longest, current) => {
            return longest.duration < current.duration ? current : longest
        })
    }

    getShortestSong(): Song {
        return this.songs.reduce((shortest, current) => {
            return shortest.duration > current.duration ? current : shortest
        })
    }

    getSongsSortedByDuration(): Song[] {
        return this.songs.sort(s => s.duration)
    }

    getSongsByTitleCaseInsensitive(title: string): Song[] {
        return this.songs.filter(s => s.title.toLowerCase().includes
            (title.toLowerCase()))
    }
}

export class Song {

    title: string
    duration: number


    constructor(song: Song) {
        if (arguments.length != 1) {
            throw new Error();
        }

        this.title = song.title;
        this.duration = song.duration;
    }
}
