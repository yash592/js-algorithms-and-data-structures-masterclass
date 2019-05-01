// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

function mergeSortedArrays(nums1, i, nums2, j) {
  let a = (b = 0);

  nums1.splice(i, nums1.length);
  nums2.splice(j, nums2.length);
  console.log(nums1, nums2);

  while (b < nums2.length) {
    if (nums2[b] < nums1[a] || nums1[a] === undefined) {
      nums1.splice(a, 0, nums2[b]);
      a++;
      b++;
    } else {
      a++;
    }
  }
  return nums1;
}

console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// 1 2 2 3 5 6
