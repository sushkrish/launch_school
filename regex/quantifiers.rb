# QUANTIFIERS 

=begin
* zero or more occurrences of the pattern to its left
+ one or more occurrences of the pattern to its left.
? zero or one occurrence of the pattern to its left. 

{} a range of occurrences
p{m} exactly m occurrences of pattern p 
p{m,} m or more occurrences of pattern p 
p{m,n} m or more occurrences of p but not more than n

The longest possible match is made. A lazy match can be done by adding a ? after the main quantifier. 
e.g. /a[abc]*?c/ matches abc or ac
=end

=begin
1. /\bb[a-z]*e\b/
2. /.*\?$/
3. /^.+?$/
4. /^https?:\/\/\S*$/
5. /^\s*https?:\/\/\S*\s*$/
6. /\bhttps?:\/\/\S*$/
7. /\b([a-z]*i+[a-z]*){3,}\b/i
8. /\S+$/
9. /^,(\d+,){3,6}$/
10. /^(\d+,){2,5}\d+$/
11. /(^(\d+,){2}\d+$)|(^(\d+,){5,}\d+$)/
12. /<[a-z][0-9]?>.*?<\/[a-z][0-9]?>/
=end

