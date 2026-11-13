/* PyBlocks examples: window.PB_EXAMPLES = { 'Group': [ {title, code}, ... ], ... }
   The Examples menu builds itself from this object (one sub-menu per group). */
window.PB_EXAMPLES = {
  'Basics': [
    { title: 'Say hello', code: `name = "Sam"
print("Hello,", name + "!")
` },
    { title: 'Ask a question', code: `name = input("What is your name? ")
print("Hello,", name + "!")
` },
    { title: 'Maths with variables', code: `apples = 5
price = 0.5
print("Total cost:", apples * price)
` }
  ],
  'Decisions': [
    { title: 'If / elif / else', code: `score = 0
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
    { title: 'Count with a for loop', code: `total = 0
for i in range(5):
    total += i
    print(i)
print("Total:", total)
` },
    { title: 'While loop', code: `count = 0
while count < 5:
    print("Count is", count)
    count += 1
` }
  ],
  'Functions': [
    { title: 'Make a function', code: `def greet(name):
    print("Hello,", name + "!")

greet("Sam")
greet("Alex")
` },
    { title: 'Function that returns a value', code: `def double(n):
    return n * 2

print(double(21))
` }
  ],
  'Modules': [
    { title: 'Roll a dice', code: `import random

number = random.randint(1, 6)
print("You rolled a", number)
` },
    { title: 'Pick a winner', code: `import random

names = ["Ada", "Grace", "Alan", "Linus"]
print(random.choice(names), "wins!")
` },
    { title: 'Shuffle a list', code: `import random

names = ["Ada", "Grace", "Alan", "Linus"]
random.shuffle(names)
print(names)
` },
    { title: 'Countdown with sleep', code: `import time

for i in range(3):
    print(3 - i)
    time.sleep(1)
print("Liftoff!")
` },
    { title: 'Guess the number', code: `import random

secret = random.randint(1, 10)
guess = int(input("Guess a number from 1 to 10: "))
if guess == secret:
    print("You got it!")
else:
    print("Nope, it was", secret)
` }
  ]
};
