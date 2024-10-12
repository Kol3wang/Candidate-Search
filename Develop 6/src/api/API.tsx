// const searchGithub = async () => {
//   try {
//     const start = Math.floor(Math.random() * 100000000) + 1;
//     console.log(import.meta.env);
//     const response = await fetch(
//       `https://api.github.com/users?since=${start}`,
//       {
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//         },
//       }
//     );
//     console.log('Response:', response);
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error('invalid API response, check the network tab');
//     }
//     console.log('Data:', data);
//     return data;
//   } catch (err) {
//     console.log('an error occurred', err);
//     return [];
//   }
// };
const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 1000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    console.log('Response Headers:', response.headers); // Log headers
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response');
    }
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(`GitHub API Error: ${response.status} - ${response.statusText}`);
      throw new Error('Invalid API response');
    }
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {};
  }
};

export { searchGithub, searchGithubUser };
