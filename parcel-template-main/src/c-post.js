const BASE__URL = 'http://localhost:3000/posts';

function addPost(post) {
  const options = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ post })
  };
  return fetch(`${BASE__URL}`, options).then(res => res.json())
}

addPost({
    "userId": 1,
      "title": "test",
      "body": "test"

}).then(console.log)