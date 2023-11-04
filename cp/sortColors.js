// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.


// The Dutch National Flag algorithm follows these steps:

// Initialize three pointers: low, mid, and high.

// low points to the first index of the array.
// mid points to the first index of the array.
// high points to the last index of the array.
// While the mid pointer is less than or equal to the high pointer:

// If the element at the mid position is equal to the middle value (e.g., 1 in your case), leave it in the "Mid" section and move the mid pointer to the next element.
// If the element at the mid position is equal to the smallest value (e.g., 0 in your case), swap the element at the mid position with the element at the low position and move both mid and low pointers to the next positions.
// If the element at the mid position is equal to the largest value (e.g., 2 in your case), swap the element at the mid position with the element at the high position and move the high pointer to the previous position.


var sortColors = function(nums) {
    let low=0;
    let mid=0;
    let high=nums.length-1;
   
    while(mid<=high){
        if(nums[mid] === 0){
            [nums[mid],nums[low]]=[nums[low],nums[mid]]
            low++;
            mid++;
        }
        else if(nums[mid] === 1)
            mid++
        else {
            [nums[mid],nums[high]]=[nums[high],nums[mid]]
            high--;
        }
    }
       
   };