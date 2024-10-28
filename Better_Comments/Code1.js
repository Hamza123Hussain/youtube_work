// This function fetches user data from an API
async function fetchUserData(userId) {
  // todo: Handle error if userId is invalid

  if (typeof userId !== 'number') {
    throw new Error('Invalid userId: must be a number') //! Important: Validate userId
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )

  if (!response.ok) {
    //  Important: Log the error for debugging
    console.error('Error fetching user data:', response.statusText)
    return null // Exit if the request fails
  }

  const data = await response.json()
  // WARNING: Ensure that data contains expected properties before accessing them
  if (!data || !data.name) {
    console.warn('! WARNING: User data may not have a name property') // Use an exclamation mark for visibility
  }
  // ?  Should we cache the user data for faster access?
  return data
}
