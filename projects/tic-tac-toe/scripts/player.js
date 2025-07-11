// Player factory function
function createPlayer(name, marker) {
    return {
        name,
        marker,
        getName() {
            return this.name;
        },
        getMarker() {
            return this.marker;
        },
        setName(newName) {
            this.name = newName;
        },
    };
}