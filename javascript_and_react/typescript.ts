// TypeScript in 5 minutes: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// Types: https://www.typescriptlang.org/docs/handbook/basic-types.html

let a: number;
//a = 'go!';  //error TS2322: Type '"go!"' is not assignable to type 'number'.
a = 7*11;
console.log(a);

// Generics: https://www.digitalocean.com/community/tutorials/typescript-generics-in-typescript
// With generics
// - don't need to use specific types. Let T denote a type.
// - you can limit output type based on input type
// - you can pass these types to deeper levels

function repeat3times<T>(arg: T): T[] {
    let output = [];
    for (let i=0; i < 3; i++) {
        output.push(arg);
    }
    return output;
}

let strArray: string[];
strArray = repeat3times('la');
console.log(strArray);
//strArray = repeat3times(7);  //error TS2322: Type 'number[]' is not assignable to type 'string[]'.

