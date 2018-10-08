export declare function getBit(n: number, mask: number): boolean;
export declare function setBit(n: number, mask: number): number;
export declare function clearBit(n: number, mask: number): number;
export declare function fastHash(str: string): number;
export declare function fastStartsWith(haystack: string, needle: string): boolean;
export declare function fastStartsWithFrom(haystack: string, needle: string, start: number): boolean;
export declare function tokenize(pattern: string): number[];
export declare function tokenizeCSS(pattern: string): number[];
export declare function createFuzzySignature(pattern: string): Uint32Array;