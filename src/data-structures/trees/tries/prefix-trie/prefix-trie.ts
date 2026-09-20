import type { Node } from "@ds/graphs/graph-view/graph-view";

class PrefixTrie {
    // Root is a sentinel node; its children hold the first characters of words.
    root: Node<string, string>;
    word_count: number;
    char_count: number;

    constructor() {
        this.word_count = 0;
        this.char_count = 0;
        this.root = {
            key: "",
            value: "",
            children: new Map()
        };
    }

    insert(word: string): boolean {
        // Follow existing character nodes or create the missing suffix one character at a time.
        let temp: Node<string, string> | undefined = this.root;

        for (let index = 0; index < word.length; index++) {
            if (!(temp?.children instanceof Map)) {
                throw new Error("Trie node children must be a Map");
            }

            if(typeof temp?.children?.get(word[index]) === 'undefined') {
                temp.children.set(word[index], {
                    key: word[index],
                    value: word[index],
                    children: new Map()
                });

                // Only a newly allocated character node changes the trie node count.
                this.char_count++;
            }

            temp = temp?.children?.get(word[index]);
        }

        // A terminal node represents a complete word, not merely a traversable prefix.
        if (temp?.isEndOfWord) {
            temp.occurrences = (temp.occurrences ?? 0) + 1;
        } else {
            temp!.isEndOfWord = true;
            this.word_count++;
        }

        return true;
    }

    private _find(word: string): Node<string, string> | undefined {
        // Traverse an existing character path without mutating the trie.
        let temp: Node<string, string> | undefined = this.root;

        for (let index = 0; index < word.length; index++) {
            if (!(temp?.children instanceof Map)) {
                throw new Error("Trie node children must be a Map");
            }

            if(typeof temp?.children?.get(word[index]) !== 'undefined') {
                temp = temp?.children?.get(word[index]);
            } else {
                return undefined;
            }
        }

        return temp
    }

    contains(word: string): boolean {
        return !!this._find(word)?.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        return typeof this._find(prefix) !== 'undefined';
    }

    private recurse(node: Node<string, string>, word: string, index: number): boolean {
        // Reaching the end clears the terminal marker for the word being removed.
        if(index >= word.length) {
            node.isEndOfWord = false;
            this.word_count--;
            return true;
        }

        if (!(node?.children instanceof Map)) {
            throw new Error("Trie node children must be a Map");
        }

        const child = node?.children?.get(word[index]);

        if(typeof child !== 'undefined') {
            if(this.recurse(child, word, index + 1)) {
                if (!(child?.children instanceof Map)) {
                    throw new Error("Trie node children must be a Map");
                }

                // Prune a child only when no remaining word needs its prefix node.
                if(child?.children?.size === 0 && !child.isEndOfWord) {
                    node.children.delete(word[index]);
                    this.char_count--;
                }

                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    remove(word: string): boolean {
        // Prefixes and missing paths are not removable unless they are stored words.
        if(!this._find(word)?.isEndOfWord) {
            return false;
        }

        return this.recurse(this.root, word, 0);
    }

    size(): number {
        return this.word_count;
    }
};

export { PrefixTrie };
export default PrefixTrie;
