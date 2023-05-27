const FIREBASE_DOMAIN = 'https://my-aws-db-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function getAllStories() {
  const response = await fetch(`${FIREBASE_DOMAIN}/stories.json`);
  const data = await response.json();
  console.log(data)
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch stories.');
  }

  const transformedStories = [];

  for (const key in data) {
    const obj = {
      id: key,  
      ...data[key],
    };

    transformedStories.push(obj);
  }

  return transformedStories;
}

export async function getSingleStory(storyId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/stories/${storyId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch story.');
  }

  return {
    id: storyId,
    ...data,
  };
}

export async function addStory(storyData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/stories.json`, {
    method: 'POST',
    body: JSON.stringify(storyData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(response.ok)

  if (!response.ok) {
    throw new Error(data.message || 'Could not create story.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.storyId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(storyId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${storyId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
