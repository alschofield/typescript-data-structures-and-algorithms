import type { Node } from "@ds/graphs/graph-view/graph-view";

class PrefixTrie {
    root: Node<string, string>;
    word_count: number;
    char_count: number;

    constructor() {
        // Root is a sentinel; its children hold the first characters of words.
        this.word_count = 0;
        this.char_count = 0;
        this.root = { key: "", value: "", children: new Map() };
    }

    insert(word: string): boolean {
        let temp: Node<string, string> | undefined = this.root;
        // Follow existing character nodes or create the missing suffix one character at a time.
        for (let index = 0; index < word.length; index++) {
            if (!(temp?.children instanceof Map)) throw new Error("Trie node children must be a Map");
            if(typeof temp.children.get(word[index]) === 'undefined') {
                temp.children.set(word[index], { key: word[index], value: word[index], children: new Map() });
                this.char_count++;
            }
            temp = temp.children.get(word[index]);
        }

        // A terminal node represents a complete word, not merely a traversable prefix.
        if (temp?.isEndOfWord) temp.occurrences = (temp.occurrences ?? 0) + 1;
        else {
            temp!.isEndOfWord = true;
            this.word_count++;
        }
        return true;
    }

    private _find(word: string): Node<string, string> | undefined {
        let temp: Node<string, string> | undefined = this.root;
        // Traverse an existing character path without mutating the trie.
        for (let index = 0; index < word.length; index++) {
            if (!(temp?.children instanceof Map)) throw new Error("Trie node children must be a Map");
            if(typeof temp.children.get(word[index]) === 'undefined') return undefined;
            temp = temp.children.get(word[index]);
        }
        return temp;
    }

    contains(word: string): boolean { return !!this._find(word)?.isEndOfWord; }
    startsWith(prefix: string): boolean { return typeof this._find(prefix) !== 'undefined'; }

    private recurse(node: Node<string, string>, word: string, index: number): boolean {
        // Clearing the terminal marker removes the completed word at the recursion base.
        if(index >= word.length) {
            node.isEndOfWord = false;
            this.word_count--;
            return true;
        }
        if (!(node.children instanceof Map)) throw new Error("Trie node children must be a Map");
        const child = node.children.get(word[index]);
        if(typeof child === 'undefined') return false;

        // Prune a child only after removal succeeds and no retained word needs it.
        if(this.recurse(child, word, index + 1)) {
            if (!(child.children instanceof Map)) throw new Error("Trie node children must be a Map");
            if(child.children.size === 0 && !child.isEndOfWord) {
                node.children.delete(word[index]);
                this.char_count--;
            }
            return true;
        }
        return false;
    }

    remove(word: string): boolean {
        // Prefixes and missing paths are not removable unless they are stored words.
        if(!this._find(word)?.isEndOfWord) return false;
        return this.recurse(this.root, word, 0);
    }

    size(): number { return this.word_count; }
};

export { PrefixTrie };
export default PrefixTrie;
