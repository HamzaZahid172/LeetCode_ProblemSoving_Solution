# LeetCode_ProblemSoving_Solution
I'm working Bi-monthly to resolve the Problem Solving of Leetcode. 

## Problem Solve Name: Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
<br />Output: 2

Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
<br />Example 2:

Input: nums = [2,3,0,1,4]
<br />Output: 2
 

Constraints:

1 <= nums.length <= 104<br />
0 <= nums[i] <= 1000<br />
<br />It's guaranteed that you can reach nums[n - 1].


## Problem Solve Name: Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

<br />Example 1:

<br />Input: s = "aa", p = "a"
<br />Output: false
<br />Explanation: "a" does not match the entire string "aa".
<br />Example 2:

<br />Input: s = "aa", p = "a*"
<br />Output: true
<br />Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
<br />Example 3:

<br />Input: s = "ab", p = ".*"
<br />Output: true
<br />Explanation: ".*" means "zero or more (*) of any character (.)".
 

Constraints:

<br />1 <= s.length <= 20
<br />1 <= p.length <= 20
<br />s contains only lowercase English letters.
<br />p contains only lowercase English letters, '.', and '*'.
<br />It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.