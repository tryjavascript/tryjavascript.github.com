TryJavascript.org mission
=======

# Table of Contents

1. Goals
  * Discourse: Ungoals
2. Audience
  1. New programmers
  2. Experienced programmers
3. General Concept / The "Tutorial"
 1. Levels
 2. Steps

**Apendix**:

1. Dictionary of Terms

## Goals

1. Present the fundamental aspects of programming in the JavaScript programming
language.

2. Leave the person learning JavaScript with a strong understanding of
 JavaScript's quirks and strengths.

3. Provide resources for further learning about testing / linting/ other JS 
 workflows should an experienced developer wish to use them while developing
 with other JS developers.

### Discourse: Ungoals

1. Don't push a certain code style.  Automatic Semicolon Insertion (ASI) has 
 been a hot debate in the JS community lately, but I agree with issacs that
 who write JavaScript should *understand* ASI *first* and *then* choose the
 style thatworks best for them / their team. 
 
## Audience

The audience of tryjavascript.org is expected to be similar to the audiences of
 [tryruby][tryruby].  This audience includes a wide range of programming
 experience; the audience may have no programming experience or may be very
 experienced.  The experienced users are expected to be learning JS for fun
 or as a requirement by their employer.

### New Programmers / Inexperienced Programmers

"New programmers" are programmers with little-to-no previous programming
 experience.  These new programmers may need to be introduced to basic
 programming flows like loops and variable assignment.

### Experienced programmers

JavaScript has a C-style syntax, so learning JavaScript for many experienced
 developers should be, for the most part, trivial.  These devs may be more
 interested in the object-oriented and functional paradims of advanced
 Javascript.

## General Concept / "The Tutorial"

The general idea for implementing a **tutorial-like system** is using the
 concepts of **steps** and **levels**.

### Levels
A **tutorial** should walk the learner through several **levels**.
 Completing a **level** indicates that the learner's understanding of
 Javascript has (hopefully) increased. Each level has several **steps**.
 Once a learner has completed every **level** in the tutorial, they should
 have nothing left to do, except check out resources if they want.

### Steps
A **step** is essentially a task for the learner to complete.  Once the learner
 has completed every step in the level, they continue on to the next level. A
 task may include adding some numbers together, or performing some manipulation
 on a string, or even declaring and using a function!

Each **step** has an **expectation**, that is, some condition that the
 learner's input should satisfy. If the condition is that the learnre's
 input should equal the number 42, then any input the learner gives
 (such as 42, 7 \* 6, or 41 + 1) should satisfy that expectation before
 they are allowed to move on.


**TL;DR**
The learner's **input** should match the **expectation** of the **step** in
 order for the learner to move on to the next step or level.


## Interface

Somewhere noticeable at all times should be a **Progress meter**, which shows
 how many levels a user has completed, and how many they have left. The meter
 should also show how many steps the user has left in the current level they
 are working on.

The user should have a textbox that acts as a pseudo-code-editor where they can
 input code and have it evaluated. This code box is called the **Editor**.

The user should always have the present **step** or ( task ) readily available,
 so they can refer to it while writing code that satisfies the step.

**TL;DR**
The learner should be prompted to complete some code task.  The learner should
 input the code into the **Editor** and indicate they are ready to have their
 code evaluated via some submit button or something like that. The learner is
 then given feedback as to whether or not their code satisfies the **step's
 expectation**.

 If the learner's input does satisfy the expectation, they are either:

* Taken to the next step if there are more steps in the level
* Taken to the next level if there are no more steps in the level

# Appendix

## Dictionary of Terms


* **Editor** - A means for the learner to input code.

* **Expectation** - A condition which the learner's input must satisfy.

* **Learner** - person using the TryJavascript.org website to learn JavaScript.
 A learner does code exercises to learn JavaScript.

* **Level** - The major building block of a tutorial.  Each level represents a
 general concept in JavaScript (such as performing arithmetic operations). Each
 level contains several steps.

* **Progress Meter** - An element on the page that represents a learner's
 progress through the tutorial.

* **Step** - The minor building block of a tutorial.  Each step represents a coding
 exercise for the learner to complete. A step may have one or many expectations.

* **Tutorial** - The general idea that the website is interacted with as a
 step-by-step process in which the learner's understanding of JavaScript
 increases after each step.  Every step builds upon its previous step.


<!-- Place All References/Links here-->
[tryruby]: http://tryruby.org
