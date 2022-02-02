/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
*/

const containerWithMostWater = (height) => {
    if (!height.length || height.length === 1) return null;


    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;

    if (height.length === 2) {
        return Math.min(height[i], height[j]) * (j - i);
    }

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        area > maxArea ? maxArea = area : maxArea;
        height[i] < height[j] ? i++ : j--;
    }
    return maxArea;

}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(containerWithMostWater([1, 1]));
console.log(containerWithMostWater([1]));