/* PyBlocks examples: window.PB_EXAMPLES = { 'Group': [ {title, code}, ... ], ... }
   The Examples menu builds itself from this object (one sub-menu per group). */
window.PB_EXAMPLES = {
  'Basics': [
    { title: 'Ask a question', code: `# EXAMPLE: Ask a question

name = input("What is your name? 😊 ")
print("Hello,", name + "! 👋")
print("Nice to meet you 🌟")
print("Let's have fun learning Python together 🐍🎉")
` },
    { title: 'Say hello', code: `# EXAMPLE: Say hello

name = "Sam"
print("Hello,", name + "! 👋")
` },
    { title: 'Maths with variables', code: `# EXAMPLE: Maths with variables

apples = 5
price = 0.5
print("Total cost:", apples * price)
` }
  ],
  'Decisions': [
    { title: 'If / elif / else', code: `# EXAMPLE: If / elif / else

score = 0
for i in range(3):
    score += 10
name = "Sam"
if score > 20:
    print(name, "did great!")
elif score > 10:
    print("Nice try")
else:
    print("Keep practising")
` }
  ],
  'Loops': [
    { title: 'Count with a for loop', code: `# EXAMPLE: Count with a for loop

total = 0
for i in range(5):
    total += i
    print(i)
print("Total:", total)
` },
    { title: 'While loop', code: `# EXAMPLE: While loop

count = 0
while count < 5:
    print("Count is", count)
    count += 1
` }
  ],
  'Functions': [
    { title: 'Make a function', code: `# EXAMPLE: Make a function

def greet(name):
    print("Hello,", name + "!")

greet("Sam")
greet("Alex")
` },
    { title: 'Function that returns a value', code: `# EXAMPLE: Function that returns a value

def double(n):
    return n * 2

print(double(21))
` }
  ],
  'Modules': [
    { title: 'Roll a dice', code: `# EXAMPLE: Roll a dice

import random

number = random.randint(1, 6)
print("You rolled a", number)
` },
    { title: 'Pick a winner', code: `# EXAMPLE: Pick a winner

import random

names = ["Ada", "Grace", "Alan", "Linus"]
print(random.choice(names), "wins!")
` },
    { title: 'Shuffle a list', code: `# EXAMPLE: Shuffle a list

import random

names = ["Ada", "Grace", "Alan", "Linus"]
random.shuffle(names)
print(names)
` },
    { title: 'Countdown with sleep', code: `# EXAMPLE: Countdown with sleep

import time

for i in range(3):
    print(3 - i)
    time.sleep(1)
print("Liftoff!")
` },
    { title: 'Guess the number', code: `# EXAMPLE: Guess the number

import random

secret = random.randint(1, 10)
guess = int(input("Guess a number from 1 to 10: "))
if guess == secret:
    print("You got it!")
else:
    print("Nope, it was", secret)
` }
  ]
};
