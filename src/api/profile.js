// src/api/profile.js
const API_URL = 'http://localhost:3000/users'; // Adjust the URL based on your setup

export const getUserProfile = async () => {
  const response = await fetch(`${API_URL}/1`); // Fetch the profile with ID 1
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const updateUserProfile = async (profile) => {
  const response = await fetch(`${API_URL}/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
