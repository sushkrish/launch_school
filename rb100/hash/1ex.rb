family = {  uncles: ["bob", "joe", "steve"],
                        sisters: ["jane", "jill", "beth"],
                                    brothers: ["frank","rob","david"],
                                                aunts: ["mary","sally","susan"]
          }

i_family = family.select{|k,v| k==:sisters || k==:brothers}.values.flatten

p i_family
