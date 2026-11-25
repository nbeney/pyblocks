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
  'Lists': [
    { title: 'Make a list', code: `# EXAMPLE: Make a list

fruits = ["apple", "banana", "cherry"]
print(fruits)
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
` },
    { title: 'Loop over a list', code: `# EXAMPLE: Loop over a list

colors = ["red", "green", "blue"]
for color in colors:
    print("I like", color)
` },
    { title: 'Loop with an index', code: `# EXAMPLE: Loop with an index

scores = [4, 8, 15]
total = 0
for i in range(3):
    print("Score", i, "is", scores[i])
    total += scores[i]
print("Total:", total)
` },
    { title: 'Is it in the list?', code: `# EXAMPLE: Is it in the list?

pets = ["cat", "dog", "fish"]
pet = input("Name a pet: ")
if pet in pets:
    print("Yes,", pet, "is in the list")
else:
    print("No,", pet, "is not in the list")
` },
    { title: 'Pick at random', code: `# EXAMPLE: Pick at random

import random

names = ["Sam", "Alex", "Robin", "Kim"]
print("The winner is", random.choice(names))
` },
    { title: 'Add to a list', code: `# EXAMPLE: Add to a list

shopping = ["milk", "eggs"]
shopping.append("bread")
shopping.insert(0, "apples")
print(shopping)
print("Items:", len(shopping))
` },
    { title: 'Build a list in a loop', code: `# EXAMPLE: Build a list in a loop

squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(squares)
` },
    { title: 'Remove from a list', code: `# EXAMPLE: Remove from a list

fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")
print(fruits)
last = fruits.pop()
print("Removed", last)
fruits.pop(0)
print(fruits)
` },
    { title: 'Sort and reverse', code: `# EXAMPLE: Sort and reverse

numbers = [5, 2, 9, 1]
numbers.sort()
print("Sorted:", numbers)
numbers.reverse()
print("Reversed:", numbers)
` },
    { title: 'Find things in a list', code: `# EXAMPLE: Find things in a list

letters = ["a", "b", "c", "b"]
print("b is at position", letters.index("b"))
print("b appears", letters.count("b"), "times")
scores = [4, 8, 15]
print("Total:", sum(scores))
print("Best:", max(scores), "Worst:", min(scores))
` }
  ],
  'Dictionaries': [
    { title: 'Make a dictionary', code: `# EXAMPLE: Make a dictionary

ages = {"Sam": 10, "Alex": 12}
print(ages)
print("Sam is", ages["Sam"])
` },
    { title: 'Change a dictionary', code: `# EXAMPLE: Change a dictionary

ages = {"Sam": 10, "Alex": 12}
ages["Sam"] = 11
ages["Robin"] = 9
print(ages)
` },
    { title: 'Loop over the keys', code: `# EXAMPLE: Loop over the keys

ages = {"Sam": 10, "Alex": 12, "Robin": 9}
for name in ages:
    print(name, "is", ages[name])
` },
    { title: 'Look something up', code: `# EXAMPLE: Look something up

capitals = {"France": "Paris", "Italy": "Rome", "Spain": "Madrid"}
country = input("Which country? ")
if country in capitals:
    print("The capital is", capitals[country])
else:
    print("I do not know that country")
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
