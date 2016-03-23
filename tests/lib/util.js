'use strict';

// > isolate('Hello, world.');
// '\u2068Hello, world\u2069.'
//
// > isolate('Hello, world.', 'world');
// 'Hello, \u2068world\u2069.'
//
// > isolate('Hello, world.', 'Hello', 'world');
// '\u2068Hello\u2069, \u2068world\u2069.'
export function isolate(str, ...args) {
  return args.reduce(
    (seq, arg) => seq.replace(arg, arg),
    args.length ? str : str);
}
