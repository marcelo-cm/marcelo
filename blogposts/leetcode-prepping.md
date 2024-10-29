---
title: LeetCode Interviews — How to Prepare
subtitle: A guide on how I approached my data structure & algorithm practice
date: Oct 2024
---

# Context

I am a self-taught developer, so this guide would be geared towards people starting from the ground up, and by no means is any part mandatory (unless denoted as _strongly suggested_). I will describe how much each part of my approached helped me, and tell you my personal do-s and do-not-s. My biggest advice that I'll give up front: This is simply a game of repetition and consistency.

Why am I qualified to give you advice? I'm not. Though, I have been able to get myself through live technical interviews at a few big tech companies, and dozens of startups.

Please email me if you have any questions: [marcechaman@gmail.com](mailto:marcechaman@gmail.com)

---

# What to expect during the interview itself

To approach your prep effectively, know what the interview will actually look like, so you know what to simulate when practicing:

When the interviewer presents you with a question, **avoid jumping into coding right away.** Instead, take notes as they explain.

Your first step should be to restate the question in your own words and confirm your understanding. This is also your opportunity to ask clarifying questions if any part is unclear. Here are key areas to inquire about:

1. **Inputs:** For example, if an input is an `int`, will it always be positive?
2. **Expected return value:** For example, should the program return `True` in certain cases and `False` in others? Should the output be a `tuple`, `int`, or `str`?

If the question involves Object-Oriented Programming (OOP), it may help to ask which method will be called most frequently. This can guide you toward optimizing the right method and finding the most efficient solution.

Document these questions and answers as comments in your IDE.

Once you clearly understand the question, pause to outline your approach and explain it to the interviewer: _"My initial thought is to iterate through the string using a `Two Pointers` technique, where I would [insert algorithm logic here]."_ Next, sketch the algorithm in pseudocode—writing out the logic in comments can be helpful. Take additional time, if needed, to find the best solution.

When you have a clear plan, begin coding, narrating each step. Be sure to think about potential edge cases. Be prepared to answer any questions the interviewer may have throughout the programming process.

After coding, test your solution with a variety of cases, including edge and invalid cases. Finally, prepare to discuss the time complexity of your approach.

# Learning DSA's from scratch, including Big O complexity

I personally took Intro to CS, and Discrete Math classes at my school, and also read old school books that dive deep into the fundamental algorithms (ie. sorts, tree traversals, etc.). You can quite literally ChatGPT "Good books for learning about Data Structure and Algorithms", **DO NOT** hunt online for the pirated PDFs (wink).

For Big O notation, you must also read articles or watch youtube videos to understand the theory. You get better at this as you continue to prepare. Every NeetCode solution tells you the space and time complexity of the problem.

# Practicing LeetCode effectively, with help

This part is very straight forward. Do 3 questions a day, following either the [Neetcode](https://neetcode.io/) 150, or the Leetcode 150 study plan.

Run into a problem? YouTube the question by name, prefer Neetcode videos.

For every single question you do, copy and paste the solution, and describe your logical approach to the question — you should NEVER memorize the code to a solution, but instead you should become very comfortable with the approach (especially with explaining the approach). The idea is that you will solve the question, optimize it, then iron out the train of thought that helped you arrive at this solution. You should rate every question in difficult from 1-10 — after 1-2 weeks, revisit all the questions marked 6 or higher. I used Notion to help me track this.

The goal is to be extremely good at pattern recognition. Some questions are incredibly difficult to solve without first seeing a question similar to it.

# Next steps

As mentioned in the beginning, this is simply a game of repetition. How many repetitions? It depends on who you are. I know people who did 30 problems and ace interviews like it's nothing; personally, I have done over a hundreds problems in the three months leading up to my interviews — clearly, I didn't have a natural intuition. I would recommend starting your prep 3 months before you expect to do technical interviews.
