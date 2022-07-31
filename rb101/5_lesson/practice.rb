#Ex1
arr = ['10', '11', '9', '7', '8']
p arr 
arr.sort! {|a,b| b.to_i <=> a.to_i }
puts "Sorted! #{arr}"

#Ex2
books = [
    {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
      {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
        {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
          {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]
p books.sort_by {|h| h[:published].to_i}

#Ex3
arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]

arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]

arr3 = [['abc'], ['def'], {third: ['ghi']}]

hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}

hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}

p arr1[2][1][3]
p arr2[1][:third][0]
p arr3[2][:third][0][0]
p hsh1['b'][1]
p hsh2[:third].keys[0]

#Ex4
arr1 = [1, [2, 3], 4]

arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]

hsh1 = {first: [1, 2, [3]]}

hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}

arr1[1][1] = 4
arr2[2] = 4
hsh1[:first][2][0]=4
hsh2[['a']][:a][2]=4
p arr1, arr2, hsh1, hsh2


#Ex5
munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
}

puts  (munsters.values.inject(0) {|s,h| h['gender']=='male' ? (s + (h['age'].to_i)) : s})

#Ex6
munsters.keys.each do |k|
  puts "#{k} is a #{munsters[k]['age']}-year-old #{munsters[k]['gender']}"
end

#Ex7  arr=[4,[3,8]], a = 2, b = [3,8]

#Ex8 
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
hsh.values.each do |arr|
  arr.each do |word|
    print "\n" + word + ": " 
    word.split("").each do |ch|
      print ch if 'aeiou'.include? ch
    end
  end
end

#Ex9
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
p arr
p (arr.map {|sub_arr| sub_arr.sort.reverse} )


#Ex10
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
brr =  arr.map do |h|
  (h.map do |k, v|
    [k,v+1]
  end).to_h
end
p arr, brr


#Ex11
arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
brr = arr.map do |sub_arr|
  sub_arr.select {|n| (n % 3).zero?}
end 
p arr, brr

#Ex12
arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
arr_to_h = arr.each_with_object({}) do |(a,b), h|
  h[a]=b
end
p arr_to_h

#Ex13
arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]
brr = arr.sort_by {|sub| sub.select {|x| x.odd?}}
p arr, brr

#Ex14
hsh = {
    'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
    'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
    'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
    'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
    'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}
arr = hsh.values.map do |h|
  if h[:type] == 'fruit'
    h[:colors].map {|c| c.capitalize}
  else
    h[:size].upcase
  end
end 
p arr


#Ex15
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]
brr = arr.select do |h|
  h.values.flatten.all? {|x| x.even?}
end
p arr, brr

#Ex16
HEX_CHARS=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
def uuid()
  sections = [8,4,4,4,12]
  unique_id = sections.each.with_object([]) do |n,unique_id|
    n.times do 
      unique_id << HEX_CHARS.sample
    end
    unique_id << "-"
  end
  unique_id.pop
  unique_id.join("")
end

p uuid()
