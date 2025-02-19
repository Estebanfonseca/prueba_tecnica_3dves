function buildTrie(...words) {
    const tree = {};

    for (let word of words) {
        if (!word) continue;

        let currentObject = tree;

        for (let i = 0; i < word.length; i++) {
            let index = word.slice(0, i + 1);

            if (!(index in currentObject)) {
                currentObject[index] = {};
            }

            if (currentObject[index] === null) {
                currentObject[index] = {};
            }

            if (i === word.length - 1) {
                currentObject[index] = null;

            } else {
                currentObject = currentObject[index];
            }
        }
    }
    return tree;
}

console.log(buildTrie())
console.log(buildTrie(""))
console.log(buildTrie("trie"))
console.log(buildTrie("tree"))
console.log(buildTrie("A", "to", "tea", "ted", "ten", "i", "in", "inn"))
console.log(buildTrie("true", "trust"))