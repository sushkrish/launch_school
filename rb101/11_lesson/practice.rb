#ex1. 
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
h={}
flintstones.each_with_index {|v,idx| h[v]=idx}
puts h

#ex2
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts ages.values.reduce(:+)

#Ex3
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts (ages.select{|k,v| v<100}).to_h

#Ex4
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
puts (ages.min_by{|_,v| v})[1]

#Ex5
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
puts flintstones.find_index {|x| x[0,2]=="Be"}

#Ex6. 
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
print flintstones.map {|name| name[0,3]}
puts

#Ex7. 
statement = "The Flintstones Rock"
puts statement.chars.each_with_object(Hash.new(0)) {|c,h| h[c.downcase]+=1}

#Ex8.Strange things, don't do it. 

#Ex9. 
def titleize(sentence)
  (sentence.split(" ").map {|v| v.capitalize}).join(" ")
end
words = "the flintstones rock"
puts titleize(words)

#Ex10.
munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
      "Lily" => { "age" => 30, "gender" => "female" },
        "Grandpa" => { "age" => 402, "gender" => "male" },
          "Eddie" => { "age" => 10, "gender" => "male" },
            "Marilyn" => { "age" => 23, "gender" => "female"}
}
puts (munsters.map do |k,v|
  age = munsters[k]["age"] 
  if age < 17
    v["age_group"]="kid"
  elsif age < 64
    v["age_group"]="adult"
  else
    k,v["age_group"]="senior"
  end
  [k,v]
end).to_h
