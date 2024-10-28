// This function calculates the area of a circle
function calculateArea(radius) {
  // ! Important: Ensure the radius is a positive number
  if (radius < 0) {
    throw new Error('Radius cannot be negative') // Raise an error for negative radius
  }

  const area = Math.PI * radius ** 2 // Calculate the area of the circle
  // TODO: Consider adding a feature to calculate the area for other shapes
  return area
}

// Example usage of fetchUserData
fetchUserData(1)
  .then((user) => {
    if (user) {
      console.log('User data:', user)
    }
  })
  .catch((error) => {
    console.error('Error:', error)
  })

// Example usage of calculateArea
try {
  const radius = 5
  console.log(
    `Area of the circle with radius ${radius}:`,
    calculateArea(radius)
  ) // Output: Area of the circle with radius 5: 78.53981633974483
} catch (error) {
  console.error('Error:', error.message)
}
