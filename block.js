class Block {
    constructor(timestamp, lasthash, hash, data) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
        
    }
    toString() {
        return `Block - 
        Timestamp: ${this.timestamp}
        Lasthash : ${this.lasthash.subString(0,10)}
        Hash     : ${this.hash.subString(0,10)}
        Data     : ${this.data}`;
    }
}
module.exports = Block;