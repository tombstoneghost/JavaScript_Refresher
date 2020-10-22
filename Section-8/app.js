/*Error Handling*/
try {
    //Produce a reference error
    //myFunction();

    //You can get various type of errors depending upon the condition you choose to test.

    //throw new SyntaxError('User has no name');
} catch (err) {
    console.log(err.message);
} finally {
    console.log('Finally runs regardless of results');
}

/*Regular Expressions*/
let re;
re=/hello/i; //i = case insensitive
re=/hello/g; //g = global search

//exec() - Return result in a array or null
const result = re.exec('hello world');
console.log(result);

//test() - Returns true or false
const result2 = re.test('Hello');
console.log(result2);

//match() - Return result array or null
const str1 = 'Hello There';
const result3 = str.match(re);
console.log(result3);

//search() - Returns index of the first match if not found returns -1
const str2 = 'Hello There';
const result4 = str.search(re);
console.log(result4);

//replace() - Returns new string with some or all matches of a person
const str3 = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);

/*Metacharacter Symbols
*
*   ^h            ->  Must Start with 'h'
*   d$            ->  Must End with 'd'
*   ^hello$       ->  Must Begin and End with Hello
*   ^h.llo$       ->  Matches any One Character
*   ^h*llo$       ->  Matches any character 0 or more times
*   gre?y         ->  Optional Characters
*   gre?y\?       ->  Escape Characters
* */

/*Character Sets
*
*   [ae]          ->  Must be an a or e
*   [GF]          ->  Must be a G or F
*   [^GF]         ->  Match anything except a G or F
*   [A-Z]         ->  Matches any uppercase letter
*   [A-Za-z]      ->  Match any letter
*   [0-9]         ->  Match any digit
* */

/*Qualifiers
*
*   Hel{2}o       ->  Must occur exactly {m} times
*   Hel{2,4}o     ->  Must occur exactly {m to n} times*/

/*Grouping
*
* This means Grouping of various RE types
*
* Eg: ^([0-9]x){3}*/

/*Shorthand Character Class
*
*   w             ->  Word Character
*   w+            ->  + means one or more
*   W             ->  Non-Word Character
*   d             ->  Digit
*   d+            ->  Digits one or more times
*   D             ->  Non-Digit Character
*   s             ->  Whitespace Character
*   S             ->  Non-Whitespace Character
*   b             ->  Word Boundary*/