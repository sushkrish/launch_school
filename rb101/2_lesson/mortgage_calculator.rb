require 'yaml'
MESSAGES = YAML.load_file('mortgage_calculator_messages.yml')
LANGUAGE = 'en'

def prompt(name)
  puts MESSAGES[LANGUAGE][name]
end

def get_loan_amount
  prompt('enter_loan_amount')
  loan_amount = gets.chomp
  if [loan_amount.to_f.to_s, loan_amount.to_i.to_s].include? loan_amount
    loan_amount.to_f
  else
    prompt('invalid_input')
    get_loan_amount
  end
end

def get_apr
  prompt('enter_apr')
  apr = gets.chomp
  if [apr.to_f.to_s, apr.to_i.to_s].include? apr
    apr.to_f && apr.to_f >= 0
    apr.to_f / 100
  else
    prompt('invalid_input')
    get_apr
  end
end

def get_loan_duration
  prompt('enter_loan_duration')
  loan_duration = gets.chomp
  if loan_duration.to_i.to_s == loan_duration && loan_duration.to_i >= 0
    loan_duration.to_i
  else
    prompt('invalid input')
    get_loan_duration
  end
end

prompt('welcome')
loop do
  loan_amount = get_loan_amount
  monthly_apr = get_apr / 12
  duration_months = get_loan_duration
  multiplier = monthly_apr / (1 - (1 + monthly_apr)**(-duration_months))
  monthly_payment = loan_amount * multiplier

  prompt('monthly_payment_amount')
  puts monthly_payment

  prompt('repeat?')
  repeat = gets.chomp.downcase
  break if repeat == 'n'
end
